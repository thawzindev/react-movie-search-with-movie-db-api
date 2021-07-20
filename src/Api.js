const Api = ({debouncedSearchTerm, page, updateResp}) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=dd2e133d9b33cc916d1d6b2987a7bd68&query=${debouncedSearchTerm}&page=${page}`)
                  .then(response => response.json())
                  .then(data =>  updateResp(data))
}

export default Api;