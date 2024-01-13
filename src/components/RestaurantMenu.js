import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
const [resInfo, setResInfo] = useState(null);

const {resId} = useParams();

    useEffect(()=>{
   fetchMenu();
    },[]);

  const fetchMenu = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.0265736&lng=77.6886853&restaurantId="
    +resId+"&catalog_qa=undefined&submitAction=ENTER");

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  } ; 
  
  if(resInfo === null) return <Shimmer />;

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

  const {itemCards}=
       resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
       console.log(itemCards);
;
    return   ( 
        <>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
       <h3>{costForTwoMessage}</h3>
       <ul>
        {itemCards.map(item => <li key={item.card.info.id}>
            {item.card.info.name} 
        - Rs{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
       </ul>
        </>
    );
};

export default RestaurantMenu;