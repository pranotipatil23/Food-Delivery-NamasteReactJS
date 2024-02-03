import AddRestaurant from "./AddRestaurant";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-4 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <span>
              {item?.card?.info?.itemAttribute?.vegClassifier == "VEG"
                ? "🌱"
                : "🍗"}
            </span>
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}{" "}
              </span>
            </div>

            <p className="text-xs">{item?.card?.info?.description}</p>
            <div></div>
          </div>

          <AddRestaurant items={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
