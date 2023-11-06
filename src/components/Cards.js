import { imgLink } from "../utils/constants";

const Cards = (props) => {
  return (
    <div className="flex flex-col border w-60 h-[340px] m-4 p-4 rounded-2xl hover:bg-green-50 ">
      <img
        className=" w-48 h-36 rounded-xl"
        src={imgLink + props.data.info.cloudinaryImageId}
      />
      <div className="cards ">
        <h3 className="font-sans py-1">{props.data.info.name}</h3>
        <p className="font-sans py-1">{props.data.info.costForTwo}</p>
        <p className="font-sans py-1"> &#9733; {props.data.info.avgRating}</p>
        <p className=" font-sans py-1">{props.data.info.cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export const labeledCard = (Cards) => {
  return (props) => {
    return (
      <div >
        <label className="relative border border-black rounded-lg bg-black text-white p-1 top-10 left-3">{"₹150 OFF"}</label>
        <Cards {...props} />
      </div>
    );
  };
};

export default Cards;
