const useHTTP = async (url) => {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error ('Error')
    }

    return await res.json()

}

export default useHTTP