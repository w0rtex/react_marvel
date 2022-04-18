import {Component, Fragment, useEffect, useState} from "react";
import Spinner from "../spinner/spinner";

import MarvelService from '../../services/MarvelService'

const Hero = (props) => {

    const [chars, setChars] = useState([])
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(null)
    const [button, setButton] = useState(true)

    const marvelService = new MarvelService()

    const updateChars = () => {
        marvelService
            .getAllCharacters(9, 0)
            .then(chars => {
                setChars(chars)
                setLoading(false)
                setButton((!(!chars.length || chars.length < 8))) // Disable loadmore button if no more characters to shop
            })
    }

    const loadChars = () => {

        setLoading(true)

        marvelService
            .getAllCharacters(9, chars.length + 1)
            .then(newChars => {
                setChars(chars => {
                    return [...chars, ...newChars] // Disable loadmore button if no more characters to shop
                })

                setLoading(false)
                setButton((!(!newChars.length || newChars.length < 8)))
            })
    }

    const changeChar = (id) => {
        props.chooseChar(id)

        setActive(id)
    }

    useEffect(updateChars, [])

    const Load = () => {
        if (chars.length) {
            return chars.map((item, idx) => {
                return (
                    <div tabIndex={idx} key={item.id} onClick={() => changeChar(item.id)} className={'character-item ' + ((active === item.id) ? 'active' : '')}>
                        <div className="img">
                            <img src={item.thumbnail} alt="Abyss"/>
                        </div>
                        <div className="title">
                            <h2 className="name">{item.name}</h2>
                        </div>
                    </div>
                )
            })
        } else {
            return false
        }
    }

    const LoadBtn = () => {
        if (!loading && button) {
            return <button onClick={loadChars} className="btn btn-red load-more btn-long">Load more</button>
        } else if (button) {
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

export default Hero