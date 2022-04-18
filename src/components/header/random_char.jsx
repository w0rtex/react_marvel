import {Fragment, useEffect, useState} from "react";

import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

import decor from "../../img/decor.png";

const RandomChar = (props) => {

    const [char, setChar] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const marvelService = new MarvelService();

    const onCharLoaded = (char) => {
        if (char.description === '') {
            char.description = 'Описание отсутствует'
        }

        if (char.description.length > 200) {
            char.description = char.slice(0, 200) + '...'
        }

        setChar(char)
        setLoading(false)
        setError(false)
    }

    const onError = () => {
        setError(true)
        setLoading(false)
    }

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011500 - 1011000) + 1011000)

        setLoading(true)

        marvelService
            .getCharacter(id)
            .then(res => {
                onCharLoaded(res)
            })
            .catch(err => {
                onError()
            })
    }

    useEffect(() =>{
        updateChar()
    }, [])

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
                    <button className="btn btn-red" onClick={updateChar}>Try it</button>
                </div>
            </div>
        </header>
    )
}

export default RandomChar