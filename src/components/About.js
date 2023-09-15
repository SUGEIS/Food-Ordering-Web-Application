import {Outlet} from "react-router-dom";
const About = () =>{
    return(
        <div>
            <img
             src="https://blog.geekhunter.com.br/wp-content/uploads/2021/09/front-end-developer-1.jpg" 
             className="w-1/2 h-1/2 px-16 py-10 align-center"
             />
            <h1>About us page</h1>
            <p> hi everyone welcome to the bout us page</p>
            <Outlet/>
        </div>

    );

};

export default About;