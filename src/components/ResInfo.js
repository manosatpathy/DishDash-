import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import { resMenuApi } from "./config";
import { useState, useEffect } from "react";

const ResInfo = () => {
  const {resId} = useParams();

  const [resInfo, setResInfo] = useState([]);


 useEffect(()=>{
    fetchResMenu();
 },[])


  const fetchResMenu = async () => {
    const response = await fetch(resMenuApi+resId);
    const data = await response.json();
    const allResMenu = data?.data?.cards[0]?.card?.card?.info;
    setResInfo(allResMenu);
    console.log(allResMenu)
  };

  return (
    <div className="resInfoContainer">
      <div className="resInfoContainer">
        <div className="resInfo">
          <h2>{resInfo.name}</h2>
          <p>{resInfo.cuisines.join(", ")}</p>
          <p>{resInfo.areaName}, 6.5 km</p>
          <p>{resInfo.feeDetails.message}</p>
        </div>
        <div className="resRating">
          <h3> &#9733; {resInfo.avgRating}</h3>
          <p>----------------</p>
          <p>100+ ratings</p>
        </div>
      </div>
      <p>
        ------------------------------------------------------------------------
      </p>
      <div className="cost">
        <h2>35MINS</h2>
        <h2>rs200 for two</h2>
      </div>
      <p>
        ------------------------------------------------------------------------
      </p>
      <MenuCard />
    </div>
  );
};

export default ResInfo;
