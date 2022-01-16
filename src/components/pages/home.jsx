import {Fragment, Component} from "react";

// Components
import Nav from "../nav/nav";
import Hero from "../hero/hero";
import Sidebar from "../sidebar/sidebar";
import RandomChar from "../header/random_char";
import Fuze from "../fuze/fuze";

// Images
import bgAsset from "../../img/bgasset.png";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            charId: null
        }
    }

    chooseChar = (id) => {
        this.setState({
            charId: id
        })
    }

    render() {
        return (
            <Fragment>
                <img className="bg-asset" src={bgAsset} alt=""/>
                <Nav/>
                <RandomChar/>
                <main className="home">
                    <Fuze>
                        <Sidebar charId={this.state.charId}/>
                    </Fuze>
                    <Hero chooseChar={this.chooseChar} />
                </main>
            </Fragment>
        )
    }
}