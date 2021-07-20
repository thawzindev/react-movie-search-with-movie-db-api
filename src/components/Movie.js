import React, { useState } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

const Movie = (props) => {

    const styles = {

        card : {
         
        },
    
        container : {
        //    padding: '2px 16px'
        }
      }
    
    return (
        <div style={styles.card}>
                <Link to={`/movie/${props.movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`} alt="Poster Image"/>
                </Link>
                    <h4><b>{props.movie.original_title}</b></h4> 
               
             
         </div>

        // <div style={styles.card}>
        //     <img src="img_avatar.png" alt="Avatar" style="width:100%">
        //     <div class="container">
        //     <h4><b>John Doe</b></h4> 
        //     <p>Architect & Engineer</p> 
        //     </div>
        // </div>
        
    )
}

export default Movie;