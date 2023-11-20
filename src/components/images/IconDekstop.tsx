import {HTMLAttributes} from "react";

interface IconProps extends HTMLAttributes<HTMLDivElement> {
    imageName: string;
    altText: string;
}

const IconDekstop: React.FC<IconProps> = ({ imageName, altText, ...rest}) => {
    return <img {...rest} src={`/img/${imageName}`} alt={altText} />;
};

export default IconDekstop