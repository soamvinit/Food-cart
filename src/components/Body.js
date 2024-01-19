import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants]= useState([]);
    const [filteredRestaurant, setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText]= useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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


 const onlineStatus = useOnlineStatus();

  if(onlineStatus ===false)
  return (
    <h1>Seems like your internet connection is having trouble!!</h1>
    );



    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" 
                    placeholder="Search Restaurant" value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}
                    ></input>
                    <button className="search-btn px-4 py-2 bg-orange-300 m-4 rounded-xl" onClick={()=>{
                      const filteredRestaurant = listOfRestaurants?.filter((res)=>
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())
                      );
                      setFilteredRestaurant(filteredRestaurant);
                     
                    }}>
                        Let's Go
                    </button>
                </div>
                <div  className="flex  items-center">
                <button className="filter-btn px-4 py-2 bg-orange-300 rounded-xl" onClick= {()=>{
                  const filteredList = listOfRestaurants?.filter((res)=>res.info.avgRating > 4);
                  console.log(filteredList);
                  setFilteredRestaurant(filteredList);
                    console.log(setListOfRestaurants);
                }}>Top Rated</button>
                </div>
              
            </div>
      <div className="restaurant-list flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => {
          return <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
           
          {
            restaurant.info.promoted ? <RestaurantCardPromoted {...restaurant.info}/> : <RestaurantCard  {...restaurant.info} />
          }
            </Link>;
        })}
      </div>
      </div>
    );
  };

  export default Body;