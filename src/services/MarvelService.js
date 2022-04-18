import useHTTP from "../hooks/http.hook";

export default class MarvelService {
    _apiKey = '0c4c7c47eb7c74431de5da8e9dd432af'
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _defOffset = 210

    getAllCharacters = async (limit, offset) => {
        const res = await useHTTP(`${this._apiBase}characters?limit=${limit}&offset=${this._defOffset + offset}&apikey=${this._apiKey}`)
        return res.data.results.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const res = await useHTTP(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`)

        if (res) {
            return this._transformCharacter(res.data.results[0])
        } else {
            return new Error()
        }
    }

    getCharacterByName = async (name) => {
        const res = await useHTTP(`${this._apiBase}characters?name=${name}&apikey=${this._apiKey}`)

        if (res && res.data.results.length) {
            return this._transformCharacter(res.data.results[0])
        } else {
            return false
        }
    }

    getComics = async (offset = 200, limit = 8) => {
        const res = await useHTTP(`${this._apiBase}comics?limit=${limit}&offset=${offset}&apikey=${this._apiKey}`)

        if (res) {
            return res.data.results.map(item => this._transformComics(item))
        } else {
            return new Error()
        }
    }

    getComic = async (id) => {
        const res = await useHTTP(`${this._apiBase}comics/${id}?apikey=${this._apiKey}`)

        if (res) {
            return this._transformComics(res.data.results[0])
        } else {
            return new Error()
        }
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            id: char.id,
            comics: char.series.items.map(item => {
                return {
                    link: item.resourceURI,
                    name: item.name
                }
            })
        }
    }

    _transformComics = (comics) => {
        console.log(comics)

        return {
            title: comics.title,
            description: comics.description,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            id: comics.id,
            language: comics.textObjects[0] ? comics.textObjects[0].language : 'Not mentioned',
            price: comics.prices[0].price,
            pageCount: comics.pageCount
        }
    }
}