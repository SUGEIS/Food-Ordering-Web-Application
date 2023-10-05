import { restaurantList} from "../contants";
import RestrauntCard from "./RestrauntCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline"


    const Body = () => {
        const [allRestaurants,setAllRestaurants]= useState([]);
        console.log(allRestaurants);

    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState("");

    
      useEffect(() => {
        getRestaurants();
    },[]); 

    async function getRestaurants(){
        const data = await fetch
        ("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.664325&lng=78.1460142&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ")
        console.log(data);
        const json = await data.json();
        //console.log(json);
        

        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  

       }

       const isOnline = useOnline();
 if(!isOnline){
        return <h1> offline,please check your internet connection</h1>;
       }

       // not render component 
        if(!allRestaurants) return null;

    
        // const searchBtnCSS = {
        //     backgroundColor:"yellow"
        // };

    //    if(filteredRestaurants?.length === 0) 
    //    return <h1> no restaurant found</h1>;
    

     return (allRestaurants.length === 0 )?< Shimmer />:(
    <>
    <div className="search-container p-5 bg-orange-200 my-2">
    <input
    type="text"
    className="focus:bg-yellow-300"
    placeholder="Search"
    value={searchText}
    onChange = {(e) => {
        setSearchText(e.target.value);
    }} 

     />
    <button
    //javascript function inside a jsx

    // style={{
    //     backgroundColor:"blue,"
    // }}

     className="p-2 m-2 bg-green-600 hover:bg-red-950 text-white rounded-xl"

     onClick={() => {

        // const data = filterData(searchText,restaurants);
        const data = filterData(searchText,allRestaurants);
        
        setFilteredRestaurants(data);

     }}

    >Search 
    </button>
    </div>

     <div className=" flex flex-wrap">
        {console.log(setAllRestaurants)}
        
      
        {filteredRestaurants.map((restaurant,index)=>{

            return (

                <Link
                to={"/restraunt/" + restaurant.info.id}
                key={restaurant.info.id}>

               
               <RestrauntCard {...restaurant.info} />
              
                </Link>


            );

        })};
        </div>
        </>
    );
};
    
    
    export default Body; 
    
     
//      <RestrauntCard {...restrautList[0].data}/>
//        <RestrauntCard {...restrautList[1].data}/>
//        <RestrauntCard {...restrautList[2].data}/>
//        <RestrauntCard {...restrautList[3].data}/>
//        <RestrauntCard {...restrautList[4].data}/>
//        <RestrauntCard {...restrautList[5].data}/>
//         </div>
//      ) ;
//    };

//    export default Body;


{/* <RestrauntCard Key={restaurant.id} {...restaurant.info} /> */}