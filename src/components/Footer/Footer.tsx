import ButtonLink from "../ButtonLink/ButtonLink";
import './Footer.styles.scss';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";


const Footer: React.FC = () => {
    const creationDate = '2023-2024';
    const creatorName = 'Karen LG';
    const socialLinks = {
        facebook: 'https://www.facebook.com/karen.lg.3597',
        instagram: 'https://www.instagram.com/lgkaren16/',
        github: 'https://github.com/',
        linkedin: 'https://www.linkedin.com/feed/',
        ubicacion: 'https://maps.app.goo.gl/qu9mwkmnc1x1WiDM8',
    };
    
    const location = {
        lat: 37.7749,
        lng: -122.4194,
    };

    return (
        <footer>
        <div>
            <h4>Redes Sociales</h4>
        <ul>
        <li>
            <ButtonLink href={socialLinks.facebook} className="_blank" iconAfter={() =>  < FaFacebook />}
            />
        </li>
        <li>
            <ButtonLink href={socialLinks.instagram} className="_blank" iconAfter={() =>  < FaInstagram  />}
            />
        </li>
        <li>
            <ButtonLink href={socialLinks.github} className="_blank" iconAfter={() =>  < FaGithub />}
            />
        </li>
        <li>
            <ButtonLink href={socialLinks.linkedin} className="_blank" iconAfter={() =>  < FaLinkedin />}
            />
        </li>
        <li>
            <ButtonLink href={socialLinks.ubicacion} className="_blank" iconAfter={() =>  < IoLocationOutline />}
            />
        </li>
        </ul>
    </div>

    <div>
                <p>Fecha de creación: {creationDate}</p>
                <p>Creado por: {creatorName}</p>
            </div>

    </footer>
    );
};

export { Footer };