import {Component, Fragment} from "react";

// Components
import Nav from "../nav/nav";
import ComicsHeader from "../header/comics";
import ShopItems from "../hero/shop";
import ShopItemHero from "../hero/shop-item";

// Images
import img_avengers from "../../img/Avengers.png"
import img_logo from "../../img/Avengers logo.png"
import img_uw from "../../img/UW.png"
import {Helmet} from "react-helmet";

const Shop = (props) => {

    return (
        <Fragment>
            <Helmet>
                <title>Marvel comics shop</title>
                <meta name="description" content="Everything about marvle comics"/>
            </Helmet>
            <ComicsHeader/>
            <ShopItems/>
        </Fragment>
    )
}

export default Shop