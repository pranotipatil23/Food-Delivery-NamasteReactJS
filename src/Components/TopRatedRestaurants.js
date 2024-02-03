const TopRatedRestaurants = () => {
  return (
    <div className="search p-4 flex items-center">
      <button
        className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setFilteredRestaurants(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default TopRatedRestaurants;
