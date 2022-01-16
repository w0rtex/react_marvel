import {Component} from "react";

export default class Nav extends Component {
    render () {
        return (
            <nav>
                <div className="title">
                    <span>Marvel</span> information portal
                </div>
                <div className="nav">
                    <a href="#" className="active">Characters</a>
                    /
                    <a href="#">Comics</a>
                </div>
            </nav>
        )
    }
}