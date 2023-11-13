import React from "react";
import UserContext from "../utils/Usercontext";

class OfferCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "manoranjan",
    };
  }

  render() {
    return (
      <div className="offerCards">
        <h1>{this.props.name}</h1>
        <hr />
        <h3>Actual price : {this.props.price}</h3>
        <hr />
        <h3>Offer Price : {this.props.offerPrice}</h3>
        <UserContext.Consumer>
          {({ userName }) => {
            return <h3>Username : {userName}</h3>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default OfferCard;
