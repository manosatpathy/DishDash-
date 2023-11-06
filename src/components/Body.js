import Cards, { labeledCard } from "./Cards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { resListApi } from "../utils/constants";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const Body = () => {
  const [allResData, setAllResData] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const ResPromotedCard = labeledCard(Cards);
  console.log(filteredRes);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(resListApi);
      const data = await response.json();
      // console.log(data.data);
      const allResInfo = data?.data?.cards[5]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants
        // ? data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        //     ?.restaurants
        // : undefined;
      // console.log(data.data);
      setAllResData(allResInfo);
      setFilteredRes(allResInfo);
    } catch (error) {
      console.error("Error fetching Data", error);
    }
  };

  return allResData.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body">
      <div className="flex gap-5 mx-20 my-5">
        <input
          className="w-96 h-8 font-medium shadow-md rounded-sm bg-cyan-50"
          placeholder="search for resturant, food"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const searchedRes = allResData.filter((res) =>
                res.info.name.toLowerCase().includes(inputValue.toLowerCase())
              );
              setFilteredRes(searchedRes);
            }
          }}
        />
        <button
          className="border font-medium shadow-md rounded-sm bg-cyan-50 w-32"
          onClick={() => {
            const searchedRes = allResData.filter((res) =>
              res.info.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredRes(searchedRes);
          }}
        >
          Search
        </button>
        <button
          className="ml-0 font-medium shadow-md rounded-sm bg-cyan-50 w-32"
          onClick={() => {
            const highRatedRes = allResData.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRes(highRatedRes);
          }}
        >
          Highest Rating
        </button>
      </div>
      <div className="flex flex-wrap mx-12">
        {filteredRes.map((res) => (
          <Link
            className="link"
            to={"/restaurant/" + res.info.id}
            key={res.info.id}
          >
            {res.info.aggregatedDiscountInfoV3.header === "₹150 OFF" ? (
              <ResPromotedCard data={res} />
            ) : (
              <Cards data={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
