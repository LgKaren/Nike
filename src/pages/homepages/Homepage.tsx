import { motion } from "framer-motion";
import { Carousel } from "../../components/Carousel/Carousel";
import { Hero } from "../../components/Hero/Hero";
import { sales } from "../../data/sales";
import { trendingProducts } from "../../data/trending-products";

const heroProps =  {
    imageUrl: 'https://uc-101.jottacloud.com/thumbnail/eyJ0IjoiMSIsImsiOiJBMWQifQ.vo0VcW1o5FkCm4x_hyZadpGOIWhU1uOshA6-anMICrNcawPzymeT_kGdZ8ZtWcP1QxfWdzriHRSZK6m43mWONs0cWO7UsXW8IN8GLYabHTBDuYo-Y2n09H0nGqOePjL1.bwqQlym7nO-HWOvbD3HIkw?size=2480x',
    imageText: 'Welcome to Nike',
    headline: '¿Quieres verte mejor y tener un estilo que impacte?',
    button: {
        href: '/NewModels',
        label:'Adquierelo aquí'
    }
};

const Homepage = () => {
    return <>
        <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: '0%' }}
            transition={{ duration: 2 }}
            >
                <div style={{ width: '100vw'}}>
            <video width="100%" autoPlay muted>
                <source src="/assets/Greatness.mp4" type="video/mp4" />
            </video>
        </div>
            <Hero {...heroProps} />
            </motion.div>
            <div className='app-body'>
                <Carousel title="Tendencias" items={trendingProducts}/>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
            >
                <Carousel title="NIKE" items={sales} />
            </motion.div>
        </div>
    </>   
};

export { Homepage };