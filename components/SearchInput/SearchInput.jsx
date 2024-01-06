"use client";

import { useState } from "react";
import styles from "./SearchInput.module.css";
import SearchResult from "../Results/SearchResults";
const APIKEY = process.env.NEXT_PUBLIC_APIKEY;

// import { searchCity } from "../Utils/functions";

export default function SearchInput() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const inputHandler = async (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
  };

  const searchCity = async (value) => {
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKEY}&units=metric`
    ).then((response) => response.json());
    setData(data);
  };

  return (
    <section>
      <div className={styles.searchContainer}>
        <input
          placeholder="Buscar ciudad..."
          type="text"
          className={styles.searchInput}
          onChange={inputHandler}
        />
        <button
          className={styles.searchButton}
          onClick={() => searchCity(input)}
        >
          Buscar
        </button>
      </div>
      <SearchResult data={data} />
    </section>
  );
}
