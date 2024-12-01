import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogWoman } from "../../data/catalog";

const heroWomanPage = {
    imageUrl: 'https://uc-100.jottacloud.com/thumbnail/eyJ0IjoiMSIsImsiOiJBMWQifQ.IFpb8s0TG27NprnNw8XLoBSFDrz25i73tJT7At_4So-WgS5P6FbsG3pbJ65crcaIzQ1UnPlHmHfFy0Vz7B5IrEJ4Y_uelpDsVYC7NzFgKnH1E8Btm58kR_qznD2E9aaY.9QpjR_WqmbXlNIFS_CPJ5Q?size=2480x',
    imageText: 'Calzado de Entrenamiento', 
    headline: 'Entrena a tu manera',
    button: {
        href: '/',
        label: 'Comprar'
    }
};

const WomanPage = () => {
    return <>
        <Hero {...heroWomanPage}/>
        <Catalog productList={catalogWoman}/>
    </>
}

export { WomanPage };