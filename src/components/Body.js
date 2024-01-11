import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {useState, useEffect} from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants]= useState([]);
    const [filteredRestaurant, setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText]= useState("");

useEffect(()=>{
    fetchData();
},[]);

const fetchData= async ()=>{
   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.0265736&lng=77.6886853&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const json= await data.json();
   console.log(json);
   setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};



    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search Restaurant" value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}
                    ></input>
                    <button className="search-btn" onClick={()=>{
                      const filteredRestaurant = listOfRestaurants.filter((res)=>
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())
                      );
                      setFilteredRestaurant(filteredRestaurant);
                     
                    }}>
                        Let's Go
                    </button>
                </div>
                <button className="filter-btn" onClick= {()=>{
                  const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4);
                  console.log(filteredList);
                    setListOfRestaurants(filteredList);
                    console.log(setListOfRestaurants);
                }}>Top Rated</button>
            </div>
      <div className="restaurant-list">
        {filteredRestaurant?.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
        })}
      </div>
      </div>
    );
  };

  export default Body;