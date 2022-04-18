import img_uw from "../../img/UW.png";
import MarvelService from "../../services/MarvelService";
import {Fragment, useEffect, useState} from "react";
import {Link} from "react-router-dom";

// Components
import Spinner from "../spinner/spinner";

const ShopItems = (props) => {

    const [comics, setComics] = useState(null)
    const [loading, setLoading] = useState(false)

    const marvelService = new MarvelService()

    const coms = () => {
        marvelService
            .getComics()
            .then(res => {
                setComics(res)
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    const updateComs = () => {
        setLoading(true)

        marvelService
            .getComics(comics.length)
            .then(res => {
                setComics(item => [...item, ...res])
                setLoading(false)
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    useEffect(() => {
        coms()
    }, [])

    const Load = () => {
        if (comics) {
            return (
                <Fragment>
                    <div className="shop-items">
                        {comics.map(item => {
                            return (
                                <Link to={`${item.id}`} key={item.id} className="shop-items__item">
                                    <div className="img">
                                        <img src={item.thumbnail} alt=""/>
                                    </div>
                                    <h4 className="title">{item.title}</h4>
                                    <span className="price">${item.price}</span>
                                </Link>
                            )
                        })}
                    </div>
                    <div>
                    {(loading) ? <Spinner/> : <a onClick={updateComs} className="btn btn-red load-more btn-long">Load more</a>}
                    </div>
                </Fragment>
            )
        } else {
            return <Spinner style={{top: '10rem'}}/>
        }
    }

    return (
        <main className="shop">
            <Load/>
        </main>
    )
}

export default ShopItems