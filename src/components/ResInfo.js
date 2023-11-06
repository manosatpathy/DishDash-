import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const ResInfo = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { info } = resInfo?.data?.cards[0]?.card?.card || {};
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  // console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  return (
    <div className="w-[100%] flex justify-center">
      <div className="w-[50%] my-5">
        <div className="flex justify-between">
          <div className="resInfo">
            <h2 className="font-extrabold text-lg">{info.name}</h2>
            <div className="py-1">
              <p className="text-xs">{info.cuisines.join(", ")}</p>
              <p className="text-xs">
                {info.areaName}, {info.sla.lastMileTravel + " km"}
              </p>
            </div>
            <p className="text-xs  py-3">{info.feeDetails.message}</p>
          </div>
          <div className="border rounded-lg p-1 flex flex-col justify-center items-center w-20 h-3 gap-1">
            <h3 className="rateStar text-green-700 font-bold">
              {" "}
              &#9733; {info.avgRating}
            </h3>
            <p className="text-xs border-t-2 py-2">{info.totalRatingsString}</p>
          </div>
        </div>
        <hr />
        <div className="my-2 font-bold flex gap-3">
          <h3>{info.sla.deliveryTime + " MINS"}</h3>
          <h3>{info.costForTwoMessage}</h3>
        </div>
        <hr />

        {itemCards ? (
          itemCards.map((menu) => (
            <MenuCard data={menu} key={menu.card.info.id} />
          ))
        ) : (
          <div>Menu not available for this resturant</div>
        )}
      </div>
    </div>
  );
};

export default ResInfo;
