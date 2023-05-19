import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/Ekaterina870/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Ekaterina Volkova
          </small>
        </footer>
      </div>
    </div>
  );
}
