import {Component, Fragment} from "react";
import MarvelService from "../../services/MarvelService";
import Error from "../error/error";
import Spinner from "../spinner/spinner";
import PropTypes from "prop-types"

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            char: null,
            loading: false,
            error: false
        }
    }

    marvelService = new MarvelService()

    updateChar = () => {
        const {charId} = this.props

        if (!charId) return false

        this.setState({
            loading: true
        })

        this.marvelService
            .getCharacter(charId)
            .then(res => {
                this.setState({
                    char: res,
                    loading: false
                })
            })
            .catch(res => {
                this.setState({
                    error: true,
                    loading: false
                })
            })
    }

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.charId !== this.props.charId) {
            this.updateChar()
        }
    }

    render() {

        const {char, loading, error} = this.state

        const Content = () => {
            if (char && !loading && !error) {
                return <View char={char}/>
            } else if (loading) {
                return <Spinner/>
            } else if (error) {
                return <Error/>
            } else {
                return (
                    <h3>Select the character</h3>
                )
            }
        }

        return (
            <aside>
                <Content/>
            </aside>
        )
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char

    const Comics = () => {
        if (!comics.length) {
            return (
                <h4>There's no comics with this character</h4>
            )
        }

        const comicsArr = comics.map((item, idx) => {
            if (idx > 9) return false

            return (
                <a href={item.link} key={item.name}>{item.name}</a>
            )
        })

        return (
            <div className="comics">
                <h4 className="title">Comics:</h4>
                <div className="list">
                    {comicsArr}
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <div className="profile section">
                <div className="title">
                    <div className="img">
                        <img src={thumbnail} alt=""/>
                    </div>
                    <div className="name">
                        <h2>{name}</h2>
                        <div>
                            <a href={homepage} className="btn btn-red">Homepage</a>
                            <a href={wiki} className="btn">Wiki</a>
                        </div>
                    </div>
                </div>
                <p className="descr">
                    {description}
                </p>
                <Comics/>
            </div>
            <div className="search section">
                <h4>Or find a character by name:</h4>
                <div className="flex">
                    <input type="text" placeholder="Enter name"/>
                    <a href="#" className="btn btn-red m-0">Search</a>
                </div>
                <h4 id="form-validation" className='error'>This field is required</h4>
                <h4 id="form-validation" className='success'>Error</h4>
            </div>
        </Fragment>
    )
}

Sidebar.propTypes = {
    charId: PropTypes.number
}

export default Sidebar