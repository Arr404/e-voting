import "./style.css";
import Hero from "../Component/Hero"
import {Link} from "react-router-dom";
import {BsArrowLeftCircle} from "react-icons/bs";

const Landing = () =>{
    return(
        <>
            <Hero/>
            <Link to="/login">
                <button className="buttonLogin">
                    <div className="loginText">LOGIN</div>
                </button>
           </Link>
        </>
    )
}

export default Landing;
