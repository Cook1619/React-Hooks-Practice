import React, { useState, useEffect } from "react";
import axios from "axios";

const StarWars = () => {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://swapi.py4e.com/api/films/${number}/`
      );
      setMovie(res.data);
    }
    fetchData();
    //This ensures this only renders when number changes, otherwise useeffect runs every render
    // You can give it another state value to keep track of
  }, [number]);
  return (
    <div>
      <h1>Pick a movie</h1>
      <h4>You chose: {movie.title}</h4>
      <h3>{movie.opening_crawl}</h3>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
};

export default StarWars;
