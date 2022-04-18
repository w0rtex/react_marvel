import {Component, Fragment} from "react";
import Nav from "../nav/nav";
import ComicsHeader from "../header/comics";
import ShopItemHero from "../hero/shop-item";

// Images
import img_comics from "../../img/UW.png"

export default class ShopItem extends Component {
    render() {
        return (
            <Fragment>
                <ComicsHeader/>
                <ShopItemHero/>
            </Fragment>
        )
    }
}