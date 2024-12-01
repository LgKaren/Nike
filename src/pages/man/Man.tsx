import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogMan } from "../../data/catalog";

const heroManPage = {
    imageUrl: 'https://uc-104.jottacloud.com/thumbnail/eyJ0IjoiMSIsImsiOiJBMWQifQ.CIAHo0H_Q7JgVH35ULxWHCm6VfKvLWUXLf0Y7P-9c9XpK-seLT2Ho7-owjb5IIjUhk-2rlUKUy0RD3zHI-mdIIf00Lkga9jNwyW02dq7g5B0AflWHMgIIpfXH0MkllAr.bFC5-AAz7Ln3tbScGQdDaA?size=2480x',
    imageText: 'Velocidad que nunca imaginaste', 
    headline: 'Mercurial Dream Speed',
    button: {
        href: '/',
        label: 'Comprar'
    }
};

const ManPage = () => {
    return <>
        <div style={{ width: '100vw'}}>
            <video width="100%" autoPlay muted>
                <source src="/assets/NikeFootball.mp4" type="video/mp4" />
            </video>
        </div>
        <Hero {...heroManPage}/>
        <Catalog productList={catalogMan}/>
    </>
}

export { ManPage };