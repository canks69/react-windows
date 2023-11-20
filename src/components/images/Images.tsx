import {HTMLAttributes} from "react";

interface ImagesProps extends HTMLAttributes<HTMLDivElement> {
    imageName: string;
    altText: string;
    Width ?: number;
    Height ?: number;
}

const Images: React.FC<ImagesProps> = ({ imageName, altText, Width, Height, ...rest}) => {
    return <img {...rest} src={`/img/${imageName}`} width={Width} height={Height} alt={altText} />;
};

export default Images