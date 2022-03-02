/** @format */

import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definion, index) {
        return (
          <div key={index}>
            <p>
              <strong>{definion.definition}</strong>
              <br />
              <em> {definion.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
