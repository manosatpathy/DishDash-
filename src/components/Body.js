import Cards from "./Cards";
import { useState, useEffect } from "react";

const Body = () => {
  const [allResData, setAllResData] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3197612&lng=85.8539644&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      const allResInfo =
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setAllResData(allResInfo);
      setFilteredRes(allResInfo);
    } catch (error) {
      console.error("Error fetching Data", error);
    }
  };

  return (
    <div id="body">
      <div id="search">
        <input
          placeholder="search for resturant, food"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          id="searchBtn"
          onClick={() => {
            const searchedRes = allResData.filter((res) =>
              res.info.name.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredRes(searchedRes);
          }}
        >
          search
        </button>
        <button
          id="filter"
          onClick={() => {
            const highRatedRes = allResData.filter(
              (res) => res.info.avgRating > 4.0
            );
            setFilteredRes(highRatedRes);
          }}
        >
          highest Rating
        </button>
      </div>
      <div id="container">
        {filteredRes.map((res) => (
          <Cards data={res} key={res.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
