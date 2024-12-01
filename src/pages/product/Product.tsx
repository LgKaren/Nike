import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Product.styles.scss';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';
import { useContext, useEffect, useState } from 'react';
import { catalogKids, catalogMan, catalogWoman  } from '../../data/catalog';
import { ProductCardProps } from '../../components/ProductCard/ProductCard';
import ReactStars from 'react-stars';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Catalog } from '../../components/Catalog/Catalog';
import { ShoppingCartContext } from '../../providers/ShoppingCartContext';
import { setToLocalStorage } from '../../utils/localStorage';
import Input from '../../components/Input/Input';
import { FavoritesContext } from '../../providers/FavoritesContext';
import Button from '../../components/Button/Button';

interface ProductFormProps {
    quantity: number;
}

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";
const FAVORITES_LIST_KEY = "FAVORITES_LIST_KEY";

const sizes = [
    18, 19, 20, 21, 22, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30,
];

interface ProductFormProps {
    quantity: number;
}

const ProductPage = () => {
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const { favoritesList, setFavoritesList } = useContext(FavoritesContext);
    const { register, handleSubmit } = useForm<ProductFormProps>();
    const params = useParams();
    const [product, setProduct] = useState<ProductCardProps>();
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        const result =
            catalogMan.find((product) => product.id === params.productId) ||
            catalogWoman.find((product) => product.id === params.productId) ||
            catalogKids.find((product) => product.id === params.productId);

        if (result) {
            setProduct(result);
        }
    }, []);

    useEffect(() => {
        if (productList && productList.length > 0) {
            setToLocalStorage(PRODUCT_LIST_KEY, productList);
        }
    }, [productList]);

    useEffect(() => {
        if (favoritesList && favoritesList.length > 0) {
            setToLocalStorage(FAVORITES_LIST_KEY, favoritesList);
        }
    }, [favoritesList]);

    const findProduct = () => {
        const result = productList.findIndex(
            (productSearch: ProductCardProps) => productSearch.id === product?.id
        );
        return result;
    };

    const findProductFromFavorites = () => {
        const result = favoritesList.findIndex(
            (productSearch: ProductCardProps) => productSearch.id === product?.id
        );
        return result;
    };

    const onSubmit: SubmitHandler<ProductFormProps> = (data) => {
        if (!selectedSize) {
            setErrorMessage("Por favor, selecciona una talla antes de continuar.");
            toast.error("Por favor selecciona una talla");
            return;
        }
        const productIndex = findProduct();
        if (productIndex === -1) {
            setProductList([
                ...productList,
                {
                    ...product,
                    size: selectedSize,
                    quantity: Number(data.quantity),
                },
            ]);
        } else {
            productList[productIndex].quantity =
                Number(productList[productIndex].quantity) + Number(data.quantity);
            setProductList([...productList]);
        }
        toast.info("Producto añadido al carrito");
    };

    const addToFavorites = () => {
        if (!selectedSize) {
            setErrorMessage("Por favor, selecciona una talla antes de continuar.");
            toast.error("Por favor selecciona una talla");
            return;
        }
        const productIndex = findProductFromFavorites();
        if (productIndex === -1) {
            setFavoritesList([
                ...favoritesList,
                {
                    ...product,
                    size: selectedSize,
                    quantity: 1,
                },
            ]);
        } else {
            favoritesList[productIndex].quantity =
                Number(favoritesList[productIndex].quantity) + 1;
            setFavoritesList([...favoritesList]);
        }
        toast.info("Producto añadido a favoritos");
    };

    if (!product) {
        return <div>Este producto no existe, intenta más tarde</div>;
    }

    return (
        <div className="product-page">
            <div className="product-page-body">
                <div className="product-page-carousel">
                    <EmblaCarousel slides={product?.imagesUrl} />
                </div>
                <div className="product-page-detail-wrapper">
                    <div className="product-page-detail-title">{product.title}</div>
                    <div className="product-page-detail-price-wrapper">
                        <div className="product-page-detail-price">${product.price}.00 MXN</div>
                        <div className="product-page-detail-discount">{product.discount}%</div>
                    </div>
                    <ReactStars count={5} size={16} value={product.stars} edit={false} />
                    {product.description}

                    <div className="size-selector">
                        <div className="size-header">
                            <span>Selecciona tu talla</span>
                            <a href="/size-guide" className="size-guide">
                                Guía de tallas
                            </a>
                        </div>
                        <div className="size-options">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`size-option ${selectedSize === size ? "selected" : ""}`}
                                    onClick={() => {
                                        setSelectedSize(size);
                                        setErrorMessage(""); 
                                    }}
                                >
                                    {size} cm
                                </button>
                            ))}
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>

                    <form className="product-page-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="product-page-form-quantity">
                            <label>Cantidad</label>
                            <select className="select dark" {...register("quantity")}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                        <Input type="submit" value="Agregar al carrito" className="dark" />
                    </form>
                    <Button
                        type="button"
                        label="Agregar a favoritos"
                        className="dark"
                        onClick={addToFavorites}
                    />
                </div>
            </div>
            <label>Productos relacionados:</label>
            <Catalog productList={catalogMan.slice(1, 4)} />
            <ToastContainer />
        </div>
    );
};

export { ProductPage };
