import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../Store/cartSlice";

const AddRestaurant = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="w-2/12 p-4">
      <img
        alt="foodImage"
        src={CDN_URL + items?.card?.info?.imageId}
        className="w-full"
      ></img>
      <div className="absolute mt-[-20px] text-center ml-[-30px]">
        <button
          className="p-2 mx-16 rounded-lg bg-white shadow-lg text-green-500 text-sm"
          onClick={() => handleAddCart(items)}
        >
          ADD +
        </button>
      </div>
    </div>
  );
};

export default AddRestaurant;
