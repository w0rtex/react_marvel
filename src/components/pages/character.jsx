import {Component, Fragment} from "react";

import Nav from "../nav/nav";
import ComicsHeader from "../header/comics";
import CharacterHero from "../hero/character_hero";

// Images
import img_loki from "../../img/loki.png"

export default class Character extends Component {
    render () {
        return (
            <Fragment>
                <Nav/>
                <ComicsHeader/>
                <CharacterHero/>
            </Fragment>
        )
    }
}