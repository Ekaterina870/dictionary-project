import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  function handleResponse(response) {
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
    let apiKey = "aa4349d1502cfb42ae79dd3817ceotf1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          autoFocus="on"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" />
      </form>
      <Results results={results} />
    </div>
  );
}
