import "./style.css"
import Video from "../../../Media/hero.mp4"
const Hero = () =>{
    return(
        <>
          <div className="hero-container">
            <video src={Video} autoPlay muted loop />
            <div className="hero-content">
              <h1 className="sm:text-6xl text-4xl font-black">INI VIDEO</h1>
            </div>
          </div>
        </>
    );
}

export default Hero;
