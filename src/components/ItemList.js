import { CDN_URL } from "./utils/constants";

const ItemList = ({items})=> {
return(
    <div>
       {items.map((item)=>(
        <div key={item.card.info.id} className="p-2 m-2  border-black border-b-2 text-left">
            
            <div className="py-2">
            <img src={CDN_URL + item.card.info.imageId} className="w-20 flex items-end" />
              <span>{item.card.info.name}</span> 
              <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
              
             </div>
             <p className="text-xs">{item.card.info.description}</p>
            
        </div>
            
       )
       
       )}
    </div>
);
};

export default ItemList;