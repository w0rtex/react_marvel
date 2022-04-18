import {Fragment, Component, useState} from "react";
import {Helmet} from 'react-helmet'

// Components
import Nav from "../nav/nav";
import Hero from "../hero/hero";
import Sidebar from "../sidebar/sidebar";
import RandomChar from "../header/random_char";
import Search from '../sidebar/search'
import Fuze from "../fuze/fuze";

// Images
import bgAsset from "../../img/bgasset.png";

const Home = (props) => {
    const [charId, setCharId] = useState(null)

    const chooseChar = (id) => {
        setCharId(() => id)
    }

    return (
        <Fragment>
            <Helmet>
                <title>Marvel information portal</title>
                <meta name="description" content="Everything about marvel characters"/>
            </Helmet>
            <img className="bg-asset" src={bgAsset} alt=""/>
            <RandomChar/>
            <main className="home">
                <aside>
                    <Fuze>
                        <Sidebar charId={charId}/>
                    </Fuze>
                    <Search/>
                </aside>
                <Hero chooseChar={chooseChar}/>
            </main>
        </Fragment>
    )
}

export default Home