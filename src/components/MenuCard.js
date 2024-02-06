import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"; 

const MenuCard = (props) => {

const dispatch = useDispatch()
  return (
      <div className="flex justify-between shadow-md px-5">
        <div className="flex flex-col">
          {props.data.card.info.ribbon.text ? (
            <h5 className="text-orange-400">
              {" "}
              &#9733; {props.data.card.info.ribbon.text}{" "}
            </h5>
          ) : null}
          <h3> {props.data.card.info.name} </h3>
          <p>&#8377;{props.data.card.info.price / 100}</p>
          <p className="font-mono text-sm">{props.data.card.info.description}</p>
        </div>
        <button className="relative left-5 top-9 font-extrabold cursor-pointer" onClick={()=>dispatch(addItem(props.data.card.info))}> + </button>
        <img
          className="h-[auto] w-[9rem] rounded-md cursor-pointer"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            props.data.card.info.imageId
          }
        />
      </div>
    
  );
};

export default MenuCard;
