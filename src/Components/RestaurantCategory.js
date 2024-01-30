import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
    /*setShowItems((prevShowItems) => {
      console.log(prevShowItems);
      prevShowItems === showItems ? !prevShowItems : showItems;
    });*/
  };

  return (
    <div>
      {/** Header */}
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {category?.title} ({category?.itemCards?.length})
          </span>
          {showItems ? (
            <span className="text-lg">⌃</span>
          ) : (
            <span className="text-xl">⌄</span>
          )}
        </div>
        {showItems && (
          <ItemList className="display" items={category?.itemCards}></ItemList>
        )}
      </div>
      {/** Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
