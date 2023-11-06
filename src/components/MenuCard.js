const MenuCard = (props) => {
  return (
    <div className="">
      <div className="">
        <div className="menuCardInfo">
          {props.data.card.info.ribbon.text ? (
            <h5> &#9733; {props.data.card.info.ribbon.text} </h5>
          ) : null}
          <h3> {props.data.card.info.name} </h3>
          <p>&#8377;{props.data.card.info.price / 100}</p>
          <p className="msg">{props.data.card.info.description}</p>
        </div>
        <img
          className="dishImg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            props.data.card.info.imageId
          }
        />
      </div>
      <hr />
    </div>
  );
};

export default MenuCard;
