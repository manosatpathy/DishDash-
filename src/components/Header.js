import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login")
  return (
    <div id="header">
      <div>
        <h1> <Link className="link" to="/" > EatLoL </Link> </h1>
      </div>
      <div id="nav">
        <ul>
          <li>
            <Link className="link" to="/offers"> Offers </Link>
          </li>
          <li>
            <Link className="link" to="/help"> Help </Link>
          </li>
          <li><Link className="link" to="/user"> User </Link></li>
          <li><Link className="link" to="/cart"> Cart </Link></li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
