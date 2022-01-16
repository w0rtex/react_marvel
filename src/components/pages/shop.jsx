import {Component, Fragment} from "react";

// Components
import Nav from "../nav/nav";
import ComicsHeader from "../header/comics";
import ShopItems from "../hero/shop";

// Images
import img_avengers from "../../img/Avengers.png"
import img_logo from "../../img/Avengers logo.png"
import img_uw from "../../img/UW.png"

export default class Shop extends Component {
    render () {
        return (
            <Fragment>
                <Nav/>
                <ComicsHeader/>
                <ShopItems/>
            </Fragment>
        )
    }
}