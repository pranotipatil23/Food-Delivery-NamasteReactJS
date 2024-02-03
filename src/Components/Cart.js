import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../Store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = (item) => {
    dispatch(clearItem());
  };

  return (
    <div className="w-6/12  p-4 mx-auto my-4">
      <div className="text-lg">
        <h1 className="text-xl text-center">Cart</h1>
      </div>
      <div className="text-center m-2">
        <button
          className="border-gray-400 m-2 p-2 border rounded-lg justify-center text-center hover:bg-gray-50"
          onClick={() => handleClearCart(cartItems)}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && (
          <h1>Your cart is empty. Please add items to your cart</h1>
        )}
      </div>
      <div className="shadow-lg bg-gray-50">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
