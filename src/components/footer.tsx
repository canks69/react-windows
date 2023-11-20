import ButtonIcon from "./bottom/BottomIcon";
import WindowStart from "./windows/WindowStart";
import {useState} from "react";

const Footer = () => {
    const [startFade, setStartFade] = useState(false);
    const startClick = () => {
        setStartFade(!startFade);
    }
    return (
        <>
            <WindowStart Start={startFade} />
            <footer className="nav navbar-inverse navbar-fixed-bottom footer text-center">
                <div className="fluid-container">
                    <div className="row">
                        <div className="left">
                            <div className="col-xs-1-me" onClick={startClick}>
                                <ButtonIcon
                                    id="strat-win"
                                    iconClass="fa fa-windows fa-2x"
                                />
                            </div>
                            <div className="col-xs-1-me">
                                <ButtonIcon
                                    iconClass="fa fa-search fa-2x"
                                />
                            </div>
                            <div className="col-xs-1-me">
                                <ButtonIcon
                                    iconClass="fa fa-envelope fa-2x"
                                />
                            </div>
                        </div>
                        <div className="right">
                            <div className="col-xs-1-me" id="close-all"></div>
                            <div className="col-xs-1-me">
                                <ButtonIcon
                                    iconClass="fa fa-bell fa-2x"
                                />
                            </div>
                            <div className="date col-xs-1-me">
                                <p id="time">12:00 PM</p>
                                <span id="history">19/11/2023</span>
                            </div>
                            <div className="col-xs-1-me">
                                <ButtonIcon
                                    iconClass="fa fa-volume-up fa-2x"
                                />
                            </div>
                            <div className="col-xs-1-me">
                                <ButtonIcon
                                    iconClass="fa fa-chevron-up fa-2x"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer