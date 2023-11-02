import { resMenuApi } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const response = await fetch(resMenuApi + resId);
    const data = await response.json();
    setResInfo(data);
  };

  return resInfo;
};

export default useRestaurantMenu;
