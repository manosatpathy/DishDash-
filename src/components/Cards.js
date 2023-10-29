import { imgLink } from "./config";

const Cards = (props) => {
  return (
    <div className="cardInfo">
      <img
        className="cardImg"
        src={imgLink + props.data.info.cloudinaryImageId}
      />
      <div className="cards">
        <h3>{props.data.info.name}</h3>
        <p>{props.data.info.costForTwo}</p>
        <p> &#9733; {props.data.info.avgRating}</p>
        <p>{props.data.info.cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default Cards;
