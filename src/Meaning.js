import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        <strong>Definition: </strong>
        {props.meaning.definition}.
      </div>
      <div className="synonym">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
      <div className="example">
        <Example example={props.meaning.example} />
      </div>
    </div>
  );
}
