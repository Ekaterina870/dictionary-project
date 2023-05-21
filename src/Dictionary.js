import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    setResults(response.data);
  }
  function handlePicturesResponse(response) {
    setPhotos(response.data.photos);
  }
  function search(event) {
    event.preventDefault();

    let apiKey = "aa4349d1502cfb42ae79dd3817ceotf1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let picturesApiKey = "aa4349d1502cfb42ae79dd3817ceotf1";
    let picturesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${picturesApiKey}`;
    axios.get(picturesApiUrl).then(handlePicturesResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            className="input"
            type="search"
            placeholder="What word do you want to look up?"
            autoFocus="on"
            onChange={handleKeywordChange}
          />
          <input className="button" type="submit" value="Search" />
        </form>

        <Results results={results} />
        <Photos photos={photos} />
      </section>
    </div>
  );
}
