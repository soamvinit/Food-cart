import { CDN_URL } from "./utils/constants";


const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
     sla,
    costForTwo,
    avgRating,
  }) => {
    return (
      <div className="card m-4 p-4 w-[250px]  bg-slate-100 rounded-xl hover:bg-orange-300">
        <img className="rounded-lg"
          src={ CDN_URL
             +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold py-2 text-lg">{name}</h2>
        <h4>{cuisines?.join(", ")}</h4>
        
        <span>
        <h4>{avgRating} ⭐</h4>
          <h4>{sla?.slaString}</h4>
          <h4>{costForTwo}</h4>
        </span>
      </div>
    );
  };

 export const withPromotedLabel = (RestaurantCard)=>{
    return(props)=>{
      return(
        <div>
          <label>Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
  };

  export default RestaurantCard;