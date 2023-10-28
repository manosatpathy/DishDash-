const MenuCard = (props) => {
  return (
    <div className="menuCard">
      <div className="menuCardInfo">
        {props.data.card.info.ribbon.text ? (
          <p> &#9733; {props.data.card.info.ribbon.text} </p>
        ) : null}
        <h4> {props.data.card.info.name} </h4>
        <p>&#8377;{props.data.card.info.price / 100}</p>
        <p>{props.data.card.info.description}</p>
      </div>
      <img
        className="dishImg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
          props.data.card.info.imageId
        }
      />
      <p>
        ------------------------------------------------------------------------------------
      </p>
    </div>
  );
};

export default MenuCard;
