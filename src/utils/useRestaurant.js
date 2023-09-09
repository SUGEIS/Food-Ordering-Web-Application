import {useState , useEffect} from "react";
import { MENU_CDN_LINK } from "../contants";

const useRestaurant = (resId)=>{
    const[restaurant, setRestaurant] = useState(null);
    const[menu,setMenu]=useState(null);



    useEffect(()=>{
        getRestaurantInfo();   
       },[]);
   
       async function getRestaurantInfo(){
           const data =  await fetch(
                MENU_CDN_LINK +resId
               );
           const json = await data.json();
           console.log(json)
           
               
            setRestaurant(json.data.cards[0].card.card.info);
   
           setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
   
       }

      

       return restaurant;
    
} ;

export default useRestaurant;   

 