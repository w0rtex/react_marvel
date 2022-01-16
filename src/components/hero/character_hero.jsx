import {Component} from "react";

// Images
import img_loki from "../../img/loki.png";

export default class CharacterHero extends Component {
    render() {
        return (
            <main className="character">
                <div className="img">
                    <img src={img_loki} alt=""/>
                </div>
                <div className="content">
                    <h3>Loki</h3>
                    <p>In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</p>
                </div>
            </main>
        )
    }
}