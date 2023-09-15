import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import { MENU_CDN_LINK } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import useCard from "../utils/useCard";
import {addItem} from "../utils/cartSlice";
import{ useDispatch} from "react-redux";

const RestrauntMenu = () =>{
    
    const {resId} = useParams();
   // const{id}=params;
    const restaurant = useRestaurant(resId);
   const menu = useCard(resId); 

   const dispatch = useDispatch();

   const addFoodItem = (item) => {
    dispatch(addItem (item));
   };

//    const handleAddItem = () =>
//    {
//     dispatch(addItem ("Grapes"));

//    };

    // useEffect(()=>{
    //  getRestaurantInfo();   
    // },[]);

    // async function getRestaurantInfo(){
    //     const data =  await fetch(
    //          MENU_CDN_LINK +resId
    //         )
    //     const json = await data.json();
    //     console.log(json)
        
            
    //      setRestaurant(json.data.cards[0].card.card.info);

    //      setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

    // }
    

     
    return(!restaurant) ? <Shimmer/>:(
        <>
        <div className="flex">
        
        <div> 
            <h1> Restaurant id: {resId}</h1>
            {/* <h2>{menu[0]?.card?.info?.name}</h2> */}
             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ menu[0]?.card?.info?.imageId} alt={menu[0]?.card?.info?.name} /> 

            {/* <img src={ menu[0]?.card?.info?.badgesV2?.imageId}/> */}
            {/* <h3>{ (menu[1].card.info.name)}</h3>*/}
            {console.log(menu[0]?.card?.info?.imageId)};
            <h3>{restaurant.name}</h3>
            <h3>{restaurant.cuisines.join(",")}</h3>
            

           </div>
        

            <div className = "p-5">
                <h1>Menu</h1>
                <ul>
                    {
                    menu.map((itemcards,index)=>(
                        <>
                    <li key={index}>{itemcards?.card?.info?.name}
                     - <button className="p-1 bg-green-400"
                     onClick={()=> addFoodItem(itemcards)}>
                        Add
                        </button>
                        </li>
                      <img src={IMG_CDN_URL + itemcards.card.info.imageId} alt="Restaurant" />  
                      </>
                    ))}
                    </ul>
            </div>
            </div>
            </>
    );
} ;

export default RestrauntMenu;








// import {useEffect, useState} from "react";
// import { useParams } from "react-router-dom";
// import {IMG_CDN_URL} from "../contants";
// const RestrauntMenu =() => {
     
//     const {resId}=useParams();

//     const[restaurant,setRestaurant]=useState({});


//     useEffect(( ) =>{
//         getRestaurantInfo();
//     },[]);

//     async function getRestaurantInfo(){
//                const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.664325&lng=78.1460142&restaurantId=523422&catalog_qa=undefined&submitAction=ENTER ");
//            const json =  await data.json();
//              console.log(json.data);

//              setRestaurant(json?.data?.cards[0]?.card?.card?.info);
           
        
//             }
    
// return ( 
//     <div> 
//         <h1>Restraunt id:{resId}</h1>
//         <h2>{restaurant.name}</h2>
//         <img src = {IMG_CDN_URL + restaurant.cloudinaryImageId}/>
//     </div>
// );
//  };

//     export default RestrauntMenu;