import React, { useEffect } from 'react';
import { useState } from "react";

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [Movies, setMovies] = useState([]);
  const getMovies = async()=>{
    


    try{
    
    const response = await fetch("https://mocki.io/v1/6dc6fbf2-f322-4859-a16e-fc4fae9c57bc")
    const data = await response.json();
    console.log(data)

    const fetchedMovies = data.results.map((item)=>{
      return{
        id : item.episode_id ,
        title : item.title , 
        releaseDate : item.release_Date , 
        openingText : item.opening_crawl


      };
    });

    setMovies(fetchedMovies); 
  }catch(error){
    console.log("somthing wrong !");
  }
  };
  useEffect(() => {
    getMovies();
  },[]);

  return (
    <React.Fragment>
      <section>
        <button onClick={getMovies} >Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={Movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
