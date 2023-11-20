import React from "react";

interface OverlayComputerProps {
    Scale: boolean;
    onClose: () => void;
}
const OverlayComputer: React.FC<OverlayComputerProps> = ({ Scale, onClose }) => {
    return(
        <div className={`overlay-computer ${Scale ? "overlay-show" : "overlay-hide"}`} id="overlay-computer">
            <div className="fluid-container">
                <div className="first-row-win" id="first-row-win">
                    <div className="left">
                        <i className="fa fa-hdd-o"></i>
                        <i className="fa fa-file-o"></i>
                        <i className="fa fa-folder"></i>
                        <span>Front End</span>
                    </div>
                    <div className="right">
                        <i className="fa fa-window-minimize"></i>
                        <i className="fa fa-window-restore"></i>
                        <i className="fa fa-window-maximize"></i>
                        <i className="fa fa-times" onClick={onClose}></i>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="second-row-win">

                </div>
            </div>
        </div>
    )
}

export default OverlayComputer