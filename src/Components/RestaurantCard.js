import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurants } = props;

  const { info } = restaurants;

  return (
    <div className="res-card m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo rounded-lg"
        src={CDN_URL + info?.cloudinaryImageId}
        alt="res logo"
      />

      <h3 className="font-bold py-4 text-lg">{info.name}</h3>
      <h4 className="res-cuisine">{info.cuisines.join(", ")}</h4>
      <h4 className="py-4 ">{info?.avgRating}</h4>
      <h4 className="py-4">{info?.costForTwo}</h4>
      <h4>{info?.sla?.deliveryTime}</h4>
    </div>
  );
};

//offers available

export const withOffers = (RestaurantCard) => {
  return (props) => {
    const subHeader =
      props.restaurants?.info?.aggregatedDiscountInfoV3?.subHeader;
    return (
      <div>
        <label className="absolute bg-orange-400 text-white p-2 rounded-lg text-[14px]">
          {props.restaurants?.info?.aggregatedDiscountInfoV3?.subHeader
            ? `${props.restaurants.info.aggregatedDiscountInfoV3.header} ${props.restaurants.info.aggregatedDiscountInfoV3.subHeader}`
            : props.restaurants?.info?.aggregatedDiscountInfoV3?.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
