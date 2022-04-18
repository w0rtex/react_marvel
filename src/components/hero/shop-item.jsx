import {Component, Fragment, useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";

// Services
import MarvelService from "../../services/MarvelService";

// Components
import Spinner from "../spinner/spinner";
import {Helmet} from "react-helmet";

const ShopItemHero = (props) => {
    const marvelService = new MarvelService()
    const {comicId} = useParams()

    const [comic, setComic] = useState(null)

    const getComic = () => {
        marvelService
            .getComic(comicId)
            .then(res => {
                setComic(res)
            })
            .catch(err => {

            })
    }

    useEffect(() => {
        getComic()
    }, [])

    const Load = () => {
        if (comic) {
            return (
                <Fragment>
                    <Helmet>
                        <title>{comic.title}</title>
                        <meta name="description" content="Everything about marvel characters"/>
                    </Helmet>
                    <div className="img">
                        <img src={comic.thumbnail} alt=""/>
                    </div>
                    <div className="content">
                        <h3>{comic.title}</h3>
                        <p>{comic.description}</p>
                        <p>{comic.pageCount} pages</p>
                        <p>Language: {comic.language}</p>
                        <span className="price">{comic.price}$</span>
                    </div>
                    <a href="">
                        <Link to={'.'} className="back">Back to all</Link>
                    </a>
                </Fragment>
            )
        } else {
            return (
                <Spinner style={{top: '5rem'}}/>
            )
        }
    }

    return (
        <main className="shop-item">
            <Load/>
        </main>
    )
}

export default ShopItemHero