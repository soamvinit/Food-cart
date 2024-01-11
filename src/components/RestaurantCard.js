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
      <div className="card">
        <img
          src={ CDN_URL
             +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines?.join(", ")}</h4>
        
        <span>
        <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
          <h4>{sla?.slaString}</h4>
          <h4>{costForTwo}</h4>
        </span>
      </div>
    );
  };

  export default RestaurantCard;