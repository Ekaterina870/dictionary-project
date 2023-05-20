import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>Part of speech: {props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition</strong>: {props.meaning.definition}
      </p>
      <p>
        <em>
          <strong>Example</strong>:{props.meaning.example}
        </em>
      </p>
      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
