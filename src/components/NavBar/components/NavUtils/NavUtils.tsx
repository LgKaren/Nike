import { FaRegHeart } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi2";

import './NavUtils.styles.scss';
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { Favorites } from "../Favorites/Favorites";

const NavUtils = () => {
    return <div className="nav-utils">
        <a href="Information"><HiOutlineInformationCircle /></a>
        <Favorites />
        <ShoppingCart />
    </div>
};

export { NavUtils };