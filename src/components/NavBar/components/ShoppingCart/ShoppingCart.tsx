import { RiShoppingCart2Line } from "react-icons/ri";
import { IconLink } from "../../../IconLink/IconLink";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../../../providers/ShoppingCartContext";
import { ProductCardProps } from "../../../ProductCard/ProductCard";

const ShoppingCart = () => {
    const { productList } = useContext(ShoppingCartContext);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        let sum = 0;
        console.log(productList)
        productList?.forEach((product: ProductCardProps) => {
            sum += Number(product.quantity);
        });
        console.log(sum)
        setCount(sum);
    }, [productList]);

    return <div>
        <IconLink href="/shopping-cart"
            label={
                productList?.length > 0 ? 
                String(count) : 
                ''}>
            <RiShoppingCart2Line />
        </IconLink>
    </div>
}

export { ShoppingCart };