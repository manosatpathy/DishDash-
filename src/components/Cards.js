import { imgLink } from "./config";


const Cards = (props) => {
    return (
        <div className="cards">
          <img  src={imgLink+props.data.info.cloudinaryImageId}/>
          <h3>{props.data.info.name}</h3>
          <p >{props.data.info.costForTwo}</p>
          <p > &#9733; {props.data.info.avgRating}</p>
          <p>{props.data.info.cuisines.join(", ")}</p>
        </div>
    );
  };

  
  export default Cards;