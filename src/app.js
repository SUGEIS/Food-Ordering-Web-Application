import React ,{lazy,Suspense }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {IMG_CDN_URL} from "./contants";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Connect from "./components/Connect";
import Not from "./components/Not";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile" ;
//import Instamart from "./components/Instamart";
import Shimmer from "./components/Shimmer";
import {Provider} from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() =>import("./components/Instamart"));


const AppLayout = () => {
  return(
    <Provider store = {store}>
    <Header/>
    < Outlet/>
     <Footer/>
     </Provider>
    
  );
};



const appRouter = createBrowserRouter([
{
  path:"/",
  element: <AppLayout/>,
  errorElement:<Not/>,
  children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/about",
      element:<About/>,
      children:[
        {
          path:"profile",
          element:<Profile/>,
        },
      ],
    },
    {
      path:"/connect",
      element: <Connect/>,
    },
    {
      path:"/restraunt/:resId",
      element:<RestrauntMenu/>,
    },
    {
      path:"/instamart",
      element:(
        
        <Suspense fallback={<Shimmer />}>
        <Instamart/>
          </Suspense>
      ),
    },
    {
      path:"/cart",
      element:<Cart/>,
    }
],
},

]);

/**
 * header
 *    -logo
 *    -nav items
 *     -cart
 * Body
 *   -search
 *   -Restaurant list
 *   -Restaurant card
 *    -image
 *    -cuisine
 *    -rating
 *    -name
 * Footer
 *    - links
 *    -copyright
 */





const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter}/>);





  



// const heading = React.createElement(
//     "h1",
//     {
//       id: "title",
//       key:"h2",
    
//     },
//     "heading"
//   );
  

  // const heading =(
  //   <h1 id="title" key="h2">
  //      Namaste react
  //      </h1>
  // );
  
  // const container = React.createElement(
  //   "div",
  //   {
  //     id: "container",
  //   },
  //   [heading, heading1]
  // );

  // const Headercomponent =()=>{
  //   return(
  //     <div>
  //       <h1> Am from functional component</h1>
  //       <h2> This is h2 tag </h2>
  //     </div>
  //   )
  // }
  
  
  