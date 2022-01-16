import {Component, Fragment} from "react";

import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

import decor from "../../img/decor.png";

export default class RandomChar extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        char: {},
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        if (char.description === '') {
            char.description = 'Описание отсутствует'
        }

        if (char.description.length > 200) {
            char.description = char.slice(0, 200) + '...'
        }

        this.setState({
            char,
            loading: false,
            error: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011500 - 1011000) + 1011000)

        this.setState({
            loading: true
        })

        this.marvelService
            .getCharacter(id)
            .then(res => {
                this.onCharLoaded(res)
            })
            .catch(err => {
                this.onError()
            })
    }

    componentDidMount() {
        this.updateChar()
    }

    render() {
        const {char, loading, error} = this.state
        const {thumbnail, name, description, homepage, wiki} = char

        const View = () => {

            if (loading) return <Spinner/>

            if (error) return <Error/>

            return (
                <Fragment>
                    <div className="img">
                        <img src={thumbnail} alt="Thor"/>
                    </div>
                    <div className="content">
                        <h3 className="title">{name}</h3>
                        <p>{description}</p>
                        <div className="btn-group">
                            <a href={homepage} className="btn btn-red">Homepage</a>
                            <a href={wiki} className="btn">Wiki</a>
                        </div>
                    </div>
                </Fragment>
            )
        }

        return (<header className="random_char">
            <div className="left">
                <View/>
            </div>
            <div className="right">
                <img src={decor} alt=""/>
                <div className="flex-column">
                    <h2 className="white">Random character for today!</h2>
                    <h2 className="white">Do you want to get to know him better?</h2>
                </div>
                <div className="flex-column">
                    <h2 className="white">
                        Or choose another one </h2>
                    <button className="btn btn-red" onClick={this.updateChar}>Try it</button>
                </div>
            </div>
        </header>)
    }
}