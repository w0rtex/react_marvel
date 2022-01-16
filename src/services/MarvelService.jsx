export default class MarvelService {
    _apiKey = '0c4c7c47eb7c74431de5da8e9dd432af'
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _defOffset = 210

    getResource = async (url) => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error ('Error')
        }

        return await res.json()
    }

    getAllCharacters = async (limit, offset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=${limit}&offset=${this._defOffset + offset}&apikey=${this._apiKey}`)
        return res.data.results.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?apikey=${this._apiKey}`)

        if (res) {
            return this._transformCharacter(res.data.results[0])
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
}