import {useState} from "react";
import Logo from "../assets/img/foodvilaa.jpg";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const loggedInUser = () =>{
  return true;
};

// SPA --Single page application.

const Title = ()=>(
    <a href="/">
    <img
    className="h-28 px-2 py-2"
    alt ="logo" 
    src ={Logo}
    />
    </a> 
  );
  

  const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

   //const isOnline = useOnline();

   const cartItems = useSelector((store) =>store.cart.items);

    return(

      <div className="flex justify-between bg-amber-200 shadow-lg">
        <Title/>
        <div className="nav-items" >
          <ul className="flex py-10">
           <li className="px-2">
            <Link to ="/">Home</Link>
           </li>
            <Link to ="/about">
            <li className="px-2" > About</li>
            </Link>
            <Link to ="/connect">
            <li className="px-2"> Connect</li>
            </Link>
            <Link to ="/instamart">
            <li> Instamart</li>
            </Link>

            <Link to ="/cart">
         <li className="px-2">Cart-{cartItems.length} items</li>
           </Link>
           </ul>

        </div>
        {/* <h1>{isOnline ? "online":"offline"}</h1> */}
       

        {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>logout</button>
        ):(
          <button onClick={() => setIsLoggedIn(true)}>login</button>
        )}
        
      </div>
    );
  }; 

  export default Header;