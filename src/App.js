import React, { useState, useEffect } from 'react';
import Movie from "./components/Movie"
import Loading from "./components/Loading"
import { useDebounce } from "use-debounce";


const App = () => {

  const styles = {

    searchBox : {
      textAlign : 'center',
      marginTop : 20
    },

    gridContainer : {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      padding: '10px',
      marginLeft : '130px'
    }
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [movieCount, setMovieCount] = useState(0);
  const [movies, setMovie] = useState([]);
  const [debouncedSearchTerm]  = useDebounce(searchTerm, 500);
  const [loading, setLoading] = useState(false);

  useEffect( () => {

    console.log(searchTerm)

    if (searchTerm == null || searchTerm == '') {
      setLoading(true)
      setMovie([])
      setMovieCount(0)
      setLoading(false)
    } else {
      setLoading(true)
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=dd2e133d9b33cc916d1d6b2987a7bd68&query=${debouncedSearchTerm}`)
                .then(response => response.json())
                .then(data =>  updateResp(data))

      // setLoading(false)
    }

    // console.log(res.page)

  }, [debouncedSearchTerm]);

  const updateResp = (data) => {
    setMovie(data.results)
    setMovieCount(data.total_results)
  }


  return (
    <>

      <div style={styles.searchBox}>
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <p>Searched for - {debouncedSearchTerm}, found {movieCount} movies</p>

        </div>

        <div style={styles.gridContainer}>
        {
          movies.length === 0 ? "NO MOVIE FOUND" : movies.map((movie, key) => <Movie key={key} movie={movie}/>)
        }
        </div>
      



    </>
  )

};


export default App;