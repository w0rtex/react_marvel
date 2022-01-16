import {Component} from "react";

// Images
import img_comics from "../../img/UW.png";

export default class ShopItemHero extends Component {
    render () {
        return (
            <main className="shop-item">
                <div className="img">
                    <img src={img_comics} alt=""/>
                </div>
                <div className="content">
                    <h3>X-Men: Days of Future Past</h3>
                    <p>Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                    <p>144 pages</p>
                    <p>Language: en-us</p>
                    <span className="price">9.99$</span>
                </div>
                <h3 className="back">Back to all</h3>
            </main>
        )
    }
}