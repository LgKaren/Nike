import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/Menu";  
import { NavUtils } from "./components/NavUtils/NavUtils";

import './NavBar.styles.scss';

const NavBar = () => {
    return <div className="nav-bar">
        <a href="/">
            <ImageFrame 
                src="https://www.reasonwhy.es/media/cache/destacada/logo-nike-reasonwhy.es_.png"
                alt="logo-LG"
                width="50"
            />
        </a>
        <Menu />
        <NavUtils />
    </div>
}

export default NavBar;