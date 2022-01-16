// Default
import {Component} from "react";

// Pages
import Home from "./pages/home"
import Shop from "./pages/shop"
import ShopItem from "./pages/shop-item"
import Character from "./pages/character";

export default class App extends Component {
    state = {
        showRandomChar: true
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {
        return (
            <Home/>
        )
    }
}