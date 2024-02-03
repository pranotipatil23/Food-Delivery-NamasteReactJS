import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
  const { restaurants } = props;

  const { info } = restaurants;

  console.log(info);

  return (
    <div className="res-card m-4 p-4 w-[324px] h-[375px] max-h-[400px] max-w-[350px] rounded-lg hover:bg-gray-100">
      <div className="mt-4">
        <img
          className="res-logo rounded-lg w-full h-48 object-cover"
          src={CDN_URL + info?.cloudinaryImageId}
          alt="res logo"
        />
      </div>
      <div>
        <div className="font-sans py-2 text-xl">{info.name}</div>
        <div className="py-2">
          <div>
            <span className="text-green-600 mx-1">
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span>{info?.avgRating}</span>
            <span className="text-2xl font-bold items-center justify-center">
              {" . "}
            </span>
            <span>{info?.sla?.slaString}</span>
          </div>
        </div>
        <h4 className="res-cuisine font-thin whitespace-nowrap overflow-ellipsis overflow-hidden">
          {info.cuisines.join(", ")}
        </h4>
        <span className="font-thin font-sans">{info?.locality}</span>
      </div>
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
