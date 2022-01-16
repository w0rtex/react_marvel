import {Component} from "react";

import img_uw from "../../img/UW.png";

export default class ShopItems extends Component {
    render () {
        return (
            <main className="shop">
                <div className="shop-items">
                    <a href="#" className="shop-items__item">
                        <div className="img">
                            <img src={img_uw} alt=""/>
                        </div>
                        <h4 className="title">Some title here</h4>
                        <span className="price">$9.99</span>
                    </a>
                    <a href="#" className="shop-items__item">
                        <div className="img">
                            <img src={img_uw} alt=""/>
                        </div>
                        <h4 className="title">Some title here</h4>
                        <span className="price">$9.99</span>
                    </a>
                    <a href="#" className="shop-items__item">
                        <div className="img">
                            <img src={img_uw} alt=""/>
                        </div>
                        <h4 className="title">Some title here</h4>
                        <span className="price">$9.99</span>
                    </a>
                    <a href="#" className="shop-items__item">
                        <div className="img">
                            <img src={img_uw} alt=""/>
                        </div>
                        <h4 className="title">Some title here</h4>
                        <span className="price">$9.99</span>
                    </a>
                    <a href="#" className="shop-items__item">
                        <div className="img">
                            <img src={img_uw} alt=""/>
                        </div>
                        <h4 className="title">Some title here</h4>
                        <span className="price">$9.99</span>
                    </a>
                    <a href="#" className="shop-items__item">
                        <div className="img">
                            <img src={img_uw} alt=""/>
                        </div>
                        <h4 className="title">Some title here</h4>
                        <span className="price">$9.99</span>
                    </a>

                </div>

                <a href="#" className="btn btn-red load-more btn-long">Load more</a>
            </main>
        )
    }
}