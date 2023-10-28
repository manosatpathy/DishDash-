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

  const { info } = resInfo?.data?.cards[0]?.card?.card || {};
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log(itemCards);

  return !info && !itemCards ? (
    <Shimmer />
  ) : (
    <div className="resInfoContainer">
      <div className="resInfoContainer">
        <div className="resInfo">
          <h2>{info.name}</h2>
          <p>{info.cuisines.join(", ")}</p>
          <p>
            {info.areaName}, {info.sla.lastMileTravel + " km"}
          </p>
          <p>{info.feeDetails.message}</p>
        </div>
        <div className="resRating">
          <h3> &#9733; {info.avgRating}</h3>
          <p>----------------</p>
          <p>{info.totalRatingsString}</p>
        </div>
      </div>
      <p>
        ------------------------------------------------------------------------
      </p>
      <div className="time-cost">
        <h2>{info.sla.deliveryTime + " MINS"}</h2>
        <h2>{info.costForTwoMessage}</h2>
      </div>
      <p>
        ------------------------------------------------------------------------
      </p>

      {itemCards.map((menu) => {
        return <MenuCard data={menu} key={menu.card.info.id} />;
      })}
    </div>
  );
};

export default ResInfo;
