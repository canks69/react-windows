import Images from "../images/Images";
import React, {HTMLAttributes} from "react";

interface MediaProps extends HTMLAttributes<HTMLDivElement> {
    image: string;
    name: string;
}

const MediaStart: React.FC<MediaProps> = ({image, name, ...props}) => {
  return(
      <div className="media">
          <div className="media-left">
              <a href="@">
                  <Images className="media-object" Width={35} Height={35} imageName={image} altText={name} />
              </a>
          </div>
          <div className="media-body">
              <small className="media-heading">{name}</small>
          </div>
      </div>
  )
}
export default MediaStart