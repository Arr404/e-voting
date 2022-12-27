import "./style.scss"
import {Link} from "react-router-dom"

const Nav = () => {
    return(
        <>
        <h1>Click the burger menu to see the magic.</h1>
        <input type="checkbox" id="burger-toggle"/>
        <label for="burger-toggle" class="burger-menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        </label>
        <div class="menu">
        <div class="menu-inner">
            <div class="gallery">
            <div class="title">
                <p>Lemon Gaming</p>
            </div>
            <div class="images">
                <Link to = "/dashboard"> 
                <a class="image-link" href="#">
                <div class="image" data-label="Pilih"><img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" alt=""/></div>
                </a>
                </Link>
                <Link to = "/profile">
                <a class="image-link" href="#">
                <div class="image" data-label="Profil"><img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" alt=""/></div>
                </a>
                </Link>
                <Link to = "/login">
                <a class="image-link" href="#">
                <div class="image" data-label="Log Out"><img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" alt=""/></div>
                </a>
                </Link>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Nav;
