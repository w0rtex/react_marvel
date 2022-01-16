import {Component, Fragment} from "react";
import Spinner from "../spinner/spinner";

import MarvelService from '../../services/MarvelService'

export default class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chars: [],
            loading: true,
            active: null,
            button: true
        }
    }

    marvelService = new MarvelService()

    updateChars = () => {
        this.marvelService
            .getAllCharacters(9, 0)
            .then(chars => {
                this.setState({
                    chars,
                    loading: false,
                    button: (!(!chars.length || chars.length < 8)) // Disable loadmore button if no more characters to shop
                })
            })
    }

    loadChars = () => {
        this.setState({
            loading: true
        })

        this.marvelService
            .getAllCharacters(9, this.state.chars.length + 1)
            .then(newChars => {
                this.setState(({chars}) => ({
                    chars: [...chars, ...newChars],
                    loading: false,
                    button: (!(!newChars.length || newChars.length < 8)) // Disable loadmore button if no more characters to shop
                }))
            })
    }

    changeChar = (id) => {
        this.props.chooseChar(id)

        this.setState({
            active: id
        })
    }

    componentDidMount() {
        this.updateChars()
    }

    render() {
        const {chars, loading} = this.state

        const Load = () => {
            if (chars.length) {
                return chars.map((item, idx) => {
                    return (
                        <a tabIndex={idx} key={item.id} onClick={() => this.changeChar(item.id)} className={'character-item ' + ((this.state.active === item.id) ? 'active' : '')}>
                            <div className="img">
                                <img src={item.thumbnail} alt="Abyss"/>
                            </div>
                            <div className="title">
                                <h2 className="name">{item.name}</h2>
                            </div>
                        </a>
                    )
                })
            } else {
                return false
            }
        }

        const LoadBtn = () => {
            if (!loading && this.state.button) {
                return <button onClick={this.loadChars} className="btn btn-red load-more btn-long">Load more</button>
            } else if (this.state.button) {
                return (
                    <div className="w-100 pos-r m-4"><Spinner/></div>
                )
            } else {
                return (
                    <h2>There's no characters to show</h2>
                )
            }
        }

        return (
            <div className="hero">
                <Load/>
                <LoadBtn/>
            </div>
        )
    }
}