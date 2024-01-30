import { CDN_URL } from "../utils/constants";

const AddRestaurant = ({ items }) => {
  return (
    <div className="w-2/12 p-4">
      <img
        alt="foodImage"
        src={CDN_URL + items?.card?.info?.imageId}
        className="w-full"
      ></img>
      <div className="absolute mt-[-20px] text-center ml-[-30px]">
        <button className="p-2 mx-16 rounded-lg bg-white shadow-lg text-green-500 text-sm">
          ADD +
        </button>
      </div>
    </div>
  );
};

export default AddRestaurant;
