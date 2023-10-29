import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import { resMenuApi } from "./config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const ResInfo = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const response = await fetch(resMenuApi + resId);
    const data = await response.json();
    setResInfo(data);
  };

  if (resInfo === null) return <Shimmer />;

  const { info } = resInfo?.data?.cards[0]?.card?.card || {};
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return (
    <div className="resInfoMainContainer">
      <div className="resInfoChildContainer">
        <div className="resInfoHeadContainer">
          <div className="resInfo">
            <h2>{info.name}</h2>
            <div className="middle">
              <p>{info.cuisines.join(", ")}</p>
              <p>
                {info.areaName}, {info.sla.lastMileTravel + " km"}
              </p>
            </div>
            <p>{info.feeDetails.message}</p>
          </div>
          <div className="resRating">
            <h3 className="rateStar"> &#9733; {info.avgRating}</h3>
            <p>------------</p>
            <p>{info.totalRatingsString}</p>
          </div>
        </div>
        <hr />
        <div className="time-cost">
          <h3>{info.sla.deliveryTime + " MINS"}</h3>
          <h3>{info.costForTwoMessage}</h3>
        </div>
        <hr />
        {itemCards.map((menu) => {
          return <MenuCard data={menu} key={menu.card.info.id} />;
        })}
      </div>
    </div>
  );
};

export default ResInfo;
