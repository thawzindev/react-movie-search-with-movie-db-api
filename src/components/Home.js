import React, { useState, useEffect } from "react";
import Movie from "./Movie"
import Loading from "./Loading"
import "../Home.css"
import { useDebounce } from "use-debounce";
import { Api } from "../Api.js"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
  } from "react-router-dom";

const Home = () => {

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
      },

      disable : {
          display : 'none'
      }
    }
  
    const [searchTerm, setSearchTerm] = useState('');
    const [movieCount, setMovieCount] = useState(0);
    const [movies, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(null);
    const [debouncedSearchTerm]  = useDebounce(searchTerm, 500);
    const [loading, setLoading] = useState(false);

    const ApiCall = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=dd2e133d9b33cc916d1d6b2987a7bd68&query=${debouncedSearchTerm}&page=${page}`)
                  .then(response => response.json())
                  .then(data =>  updateResp(data))
    }
  
    useEffect( () => {
  
      console.log(searchTerm)
  
      if (searchTerm == null || searchTerm == '') {

        setMovie([])
        setMovieCount(0)
        setPage(1)

      } else {

        ApiCall();
      }
  
    }, [debouncedSearchTerm]);
  
    const updateResp = (data) => {
      setMovie(data.results)
      setMovieCount(data.total_results)
      setMaxPage(data.total_pages)
    }
  
    const prev = () => {

        setPage(page-1);
        ApiCall();
        
    }
  
    const next = () => {

        setPage(page+1);
        ApiCall();
      
    }
  
  
    return (
      <>
  
        <div style={styles.searchBox}>
          <input autoFocus
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
  
  
          {
              movieCount !== 0 ? 
            <ul>
              <li className={ page === 1 ? 'disable' : ''} onClick={prev}><a href="#">Prev</a></li>
              <li className={ maxPage === page ? 'disable' : ''} onClick={next}><a href="#">Next</a></li>
            </ul>

            : 

            ''
          }
        
  
  
  
      </>
    )
  
  };

  export default Home;