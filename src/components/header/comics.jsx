import {Component} from "react";

// Images
import img_avengers from "../../img/Avengers.png";
import img_logo from "../../img/Avengers logo.png";

export default class ComicsHeader extends Component {
    render () {
        return (
            <header className="header_comics">
                <div>
                    <img src={img_avengers} alt=""/>
                </div>
                <div className="title">
                    <h3>New comics every week! <br /> Stay tuned!</h3>
                </div>
                <div>
                    <img src={img_logo} alt=""/>
                </div>
            </header>
        )
    }
}