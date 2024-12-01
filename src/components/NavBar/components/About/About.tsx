import { IconLink } from "../../../IconLink/IconLink";
import { HiOutlineInformationCircle } from "react-icons/hi2";

const About = () => {
    return <div>
        <IconLink href="/about"
            label={
                ''}>
            <HiOutlineInformationCircle />
        </IconLink>
    </div>
}

export { About };