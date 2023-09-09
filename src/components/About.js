import {Outlet} from "react-router-dom";
const About = () =>{
    return(
        <div>
            <h1>About us page</h1>
            <p> hi everyone welcome to the bout us page</p>
            <Outlet/>
        </div>

    );

};

export default About;