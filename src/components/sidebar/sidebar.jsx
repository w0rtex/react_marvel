import {Component, Fragment, useEffect, useState} from "react";
import MarvelService from "../../services/MarvelService";
import Error from "../error/error";
import Spinner from "../spinner/spinner";
import PropTypes from "prop-types"

const Sidebar = (props) => {

    const [char, setChar] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const marvelService = new MarvelService()

    const updateChar = () => {
        const {charId} = props

        if (!charId) return false

        setLoading(true)

        marvelService
            .getCharacter(charId)
            .then(res => {
                setChar(res)
                setLoading(false)
            })
            .catch(res => {
                setError(true)
                setLoading(false)
            })
    }

    useEffect(updateChar, [props.charId])

    const Content = () => {
        if (char && !loading && !error) {
            return <View char={char}/>
        } else if (loading) {
            return <Spinner/>
        } else if (error) {
            return <Error/>
        } else {
            return (
                <h3 className={"mb-4"}>Select the character</h3>
            )
        }
    }

    return <Content/>
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
        </Fragment>
    )
}

export default Sidebar