import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import "../MovieDetail.css";

const MovieDetail = () => {

    const [movie, setMovie] = useState({});

    let { id } = useParams();

    useEffect(() => {
        DetailApi();
    }, []);

    const DetailApi = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dd2e133d9b33cc916d1d6b2987a7bd68`)
                  .then(response => response.json())
                  .then(data => setMovie(data))
    }

    return (
        <div className="grid-container">

            <div className="grid-item">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="Poster Image"/>
            </div>

            <div className="grid-item">
                <ul>
                    <li><h3>{movie.original_title}</h3></li>
                    <br/>
                    <li className="overview"><p>{movie.overview}</p></li>

                    <li>
                        <Link to='/'>Back</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default MovieDetail;