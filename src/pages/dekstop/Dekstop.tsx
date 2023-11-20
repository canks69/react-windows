import IconDekstop from "../../components/images/IconDekstop";
import OverlayComputer from "../../components/windows/OverlayComputer";
import {useState} from "react";

const Dekstop = () => {
    const [Scale, setScale] = useState(false)
    const ComputerClick = () => {
        setScale(!Scale)
    }
    const handleCloseOverlay = () => {
        setScale(false);
    };
  return (
      <div className="icon-computer text-center" id="icon-computer" onDoubleClick={ComputerClick}>
          <IconDekstop imageName="icons/mycomputer.png" altText="My Computer" className="img-responsive" />
          <OverlayComputer Scale={Scale} onClose={handleCloseOverlay} />
      </div>
  )
}

export default Dekstop