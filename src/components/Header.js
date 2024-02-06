import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [logBtn, setLogBtn] = useState("Login");
  const { userName } = useContext(UserContext);

  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems)
  return (
    <div className="flex justify-between border h-28 m-3 item-center shadow-lg bg-pink-50 ">
      <div className=" flex items-center">
        <h1 className="pl-6 font-mono text-4xl">
          <Link className="link" to="/">
            EatLoL
          </Link>
        </h1>
      </div>

      <ul className="flex items-center font-semibold">
        <span>OnlineStatus : {onlineStatus ? "🟢" : "🔴"}</span>

        <li className="px-7">
          <Link className="link" to="/offers">
            {" "}
            Offers{" "}
          </Link>
        </li>
        <li className="px-7">
          <Link className="link" to="/help">
            {" "}
            Help{" "}
          </Link>
        </li>
        <li className="px-7">
          <Link className="link" to="/user">
            {" "}
            User{" "}
          </Link>
        </li>
        <li className="px-7">
          <Link className="link" to="/cart">
            
            Cart({cartItems.length})
          </Link>
        </li>
        <li className="px-7"> {userName}</li>
        <li className="px-7">
          <button
            id="login"
            onClick={() => {
              if (logBtn === "Login") {
                setLogBtn("Logout");
              } else {
                setLogBtn("Login");
              }
            }}
          >
            {logBtn}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
