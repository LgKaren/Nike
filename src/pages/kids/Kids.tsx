import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogKids } from "../../data/catalog";

const heroKidsPage = {
    imageUrl: 'https://uc-100.jottacloud.com/thumbnail/eyJ0IjoiMSIsImsiOiJBMWQifQ.vw9fA8hPZzoEB5fC9PY4GpH7566ryYvJFAxBuKcT_HHvaivYpUyVlGjdNjQOsAKxqQ4ixU4i8UGTFbvi1KUYSuEneUiqrehi3AHhCZjNMEd0HvXyRG8-lka4-D4MV--K.YuRlSGh4W8Jp6omgI6yeOQ?size=2480x',
    imageText: 'Vomero 5', 
    headline: 'Creado para correr, Remasterizado para tu estilo',
    button: {
        href: '/',
        label: 'Comprar'
    }
};

const KidsPage = () => {
    return <>
        <Hero {...heroKidsPage}/>
        <Catalog productList={catalogKids}/>
    </>
}

export { KidsPage };