import { useForm, FieldValues } from 'react-hook-form';
import './checkout.styles.scss';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { ShoppingCartContext } from '../../providers/ShoppingCartContext';
import { ProductCardProps } from '../../components/ProductCard/ProductCard';

type FormData = {
    name: string;
    street: string;
    postalCode: string;
    colony: string;
    town: string;
    state: string;
    phoneNumber: string;
};

const Checkout = () => {
    const { productList } = useContext(ShoppingCartContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const [payActive, setPayActive] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState<FormData | null>(null);
    const [ticket, setTicket] = useState<string | undefined>();

    const onSubmit = (dataForm: FormData) => {
        setData(dataForm);
        setPayActive(true);
    };

    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: 'Tenis Nike',
                    amount: {
                        currency_code: 'MXN',
                        value: 1,
                    },
                },
            ],
        }).then((orderId: string) => {
            setModalOpen(true);
            setTicket(orderId);
            return orderId;
        });
    };

    const onError = () => {
        toast.error('Error con tu método de pago');
    };

    return (
        <div className="checkout">
            <h1>Finaliza la compra</h1>
            <h2>Datos de envío</h2>
            <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="checkout-form-column">
                    <label>Nombre completo</label>
                    <input
                        type="text"
                        {...register('name', { required: 'Campo obligatorio' })}
                    />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}

                    <label>Calle</label>
                    <input
                        type="text"
                        {...register('street', { required: 'Campo obligatorio' })}
                    />
                    {errors.street && <span className="error-message">{errors.street.message}</span>}

                    <label>Código Postal</label>
                    <input
                        type="text"
                        {...register('postalCode', { required: 'Campo obligatorio' })}
                    />
                    {errors.postalCode && (
                        <span className="error-message">{errors.postalCode.message}</span>
                    )}

                    <label>Colonia</label>
                    <input
                        type="text"
                        {...register('colony', { required: 'Campo obligatorio' })}
                    />
                    {errors.colony && <span className="error-message">{errors.colony.message}</span>}
                </div>

                <div className="checkout-form-column">
                    <label>Municipio</label>
                    <input
                        type="text"
                        {...register('town', { required: 'Campo obligatorio' })}
                    />
                    {errors.town && <span className="error-message">{errors.town.message}</span>}

                    <label>Estado</label>
                    <input
                        type="text"
                        {...register('state', { required: 'Campo obligatorio' })}
                    />
                    {errors.state && <span className="error-message">{errors.state.message}</span>}

                    <label>Número de teléfono</label>
                    <input
                        type="text"
                        {...register('phoneNumber', {
                            required: 'Campo obligatorio',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Campo obligatorio',
                            },
                        })}
                    />
                    {errors.phoneNumber && (
                        <span className="error-message">{errors.phoneNumber.message}</span>
                    )}

                    {payActive ? (
                        <PayPalButtons createOrder={createOrder} onError={onError} className="paypal" />
                    ) : (
                        <input type="submit" value="Continuar compra" />
                    )}
                </div>
            </form>

            <Modal isOpen={modalOpen}>
                <div className="checkout-modal">
                    <h2>Compra exitosa</h2>
                    <h3>Fecha: {moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
                    <h3>Número de ticket: {ticket}</h3>
                    <h3>Datos de compra</h3>
                    {data && (
                        <>
                            <label>Nombre: {data.name}</label>
                            <label>Calle: {data.street}</label>
                            <label>Código Postal: {data.postalCode}</label>
                            <label>Colonia: {data.colony}</label>
                            <label>Municipio: {data.town}</label>
                            <label>Estado: {data.state}</label>
                            <label>Número de teléfono: {data.phoneNumber}</label>
                        </>
                    )}
                    {productList.map((product: ProductCardProps) => (
                        <div className="checkout-modal-product" key={product.description}>
                            <div className="checkout-modal-product-image">
                                <img src={product.imagesUrl[0]} alt={product.description} />
                            </div>
                            <label>{product.description}</label>
                            <label>Cantidad: {product.quantity}</label>
                            <label>Precio: ${product.quantity! * product.price}</label>
                        </div>
                    ))}
                </div>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export { Checkout };
