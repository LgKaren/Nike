import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogOfertas } from "../../data/catalog";

const heroOfertasPage = {
    imageUrl: 'https://uc-109.jottacloud.com/thumbnail/eyJ0IjoiMSIsImsiOiJBMWQifQ.SYsS4CoFqvtPCLgrqMnodr11mzX7NRiWNpIiOKHbr0xAuPJPzjZHTHXuEbxwRWRLUtgZqouz2Shth--S33slYQjskpTT3Y0k036ntnPSlbyht7nxMPPk7IxHIw987yzF.hjn-kEPAnHQIynGoBnLnwQ?size=2480x',
    imageText: '', 
    headline: '',
    button: {
        href: '/',
        label: 'Comprar'
    }
};

const OfertasPage = () => {
    return <>
        <Hero {...heroOfertasPage}/>
        <Catalog productList={catalogOfertas}/>
    </>
}

export { OfertasPage };