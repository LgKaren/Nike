import { createBrowserRouter, Navigate } from "react-router-dom";
import { ManPage } from "../pages/man/Man";
import { Homepage } from "../pages/homepages/Homepage";
import { ProductPage } from "../pages/product/Product";
import { ShoppingCartPage } from "../pages/shopping-cart/ShoppingCart";
import { Checkout } from "../pages/checkout/checkout";
import { WomanPage } from "../pages/woman/Woman";
import { KidsPage } from "../pages/kids/Kids";
import { OfertasPage } from "../pages/ofertas/Ofertas";
import { FavoritesPage } from "../pages/favorites/Favorites";
import AboutUs from "../pages/about/AboutUs";

const router = createBrowserRouter([
{
    path: "/",
    element: (
    <Homepage />
    ),
},
{
    path: "hombre",
    element: <ManPage />,
},
{
    path: "mujer",
    element: <WomanPage />,
},
{
    path: "ninos",
    element: <KidsPage />,
},
{
    path: "ofertas",
    element: <OfertasPage />,   
},
{
    path: "product/:productId",
    element: <ProductPage />
},
{
    path: "shopping-cart",
    element: <ShoppingCartPage />
},
{
    path: "checkout",
    element: <Checkout />
},
{
    path: "favorites",
    element: <FavoritesPage />
},
{
    path: "about",
    element: <AboutUs />
},
{
    path: "*",
    element: (<Navigate to="/" replace={true} />) 
}
]);

export { router };

