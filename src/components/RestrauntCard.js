import {IMG_CDN_URL } from "../contants";

const RestrauntCard =({
    name,
    cuisines,
    cloudinaryImageId,
  }) => {
    
  
   return(
      <div className="w-60 px-6 py-3 m-2 shadow-lg bg-amber-50">
        <img 
        src={
          IMG_CDN_URL+
        cloudinaryImageId
        }
        />
        <h2 className="font-bold text-xl ">{name} </h2>
        {/* <h3>{cuisines.join(",")}</h3> */}
        <h3>{cuisines.join(", ")}</h3>
        
      </div>
    );
  };
  
  
  export default RestrauntCard;