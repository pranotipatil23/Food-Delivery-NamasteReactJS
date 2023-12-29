import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurants } = props;

  const { info } = restaurants;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + info?.cloudinaryImageId}
        alt="res logo"
      />

      <h3>{info.name}</h3>
      <h4 className="res-cuisine">
        {info.cuisines.join(", ")}
      </h4>
      <h4>{info?.avgRating}</h4>
      <h4>{info?.costForTwo}</h4>
      <h4>{info?.sla?.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
