import React from "react";
import ButtonIcon from "../bottom/BottomIcon";
import Images from "../images/Images";
import MediaStart from "./MediaStart";

interface WindowStartProps {
    Start: boolean;
}
const WindowStart: React.FC<WindowStartProps> = ({ Start }) => (
    <div>

        <div className={`start-window-fade hidden-start ${Start ? "show-start" : ""}`} id="start-window-fade"></div>
        <div className={`start-window hidden-start ${Start ? "show-start" : ""}`} id="start-window">
            <div className={`fluid-container ${Start ? "activecontainer" : ""}`} id="container-start">
                <div className="row">
                    <div className="col-xs-1 first-column">
                        <ButtonIcon iconClass="fa fa-power-off fa-1x" />
                        <ButtonIcon iconClass="fa fa-cog fa-1x" />
                        <ButtonIcon iconClass="fa fa-folder-open-o fa-1x" />
                        <ButtonIcon iconClass="fa fa-user fa-1x" />
                        <ButtonIcon iconClass="fa fa-bars" className="open-icon-list"/>
                    </div>
                    <div className="col-xs-3 second-column">
                        <div className="wrap-scroll">
                            <div className="head-med">
                                <small>What I'am Used</small>
                            </div>
                            <MediaStart image="icons/visual-studio.png" name="Visual Studio Code" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                            <MediaStart image="icons/chrome.png" name="Chrome" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default WindowStart;
