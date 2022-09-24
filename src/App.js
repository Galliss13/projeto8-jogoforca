import palavras from "./palavras";
import alfabeto from "./alfabeto";
import React, { useState } from "react";

export default function App() {
  const sorteio =  palavras.sort(() => Math.random() - 0.5);
  const [wordDrawn, setWordDrawn] = React.useState(sorteio[0]);
  const [wordLetters, setWordLetters] = React.useState("");
  const [selectedLetters, setSelectedLetters] = React.useState([]);
  const [mistakes, setMistakes] = React.useState(0);

  function chooseWord() {
    setWordDrawn(sorteio[1]);
    setWordLetters(wordDrawn.split('').map((l) => l = '_ '));
    setSelectedLetters([]);
  }

  function verifyButton(i) {
    if (!selectedLetters.includes(i)) {
      setSelectedLetters([...selectedLetters, i])
    }
    console.log(selectedLetters);
  }

  
  return (
    <div className="game">
      <div className="hangmanImageButton">
        <div className="hangmanImage">
          <img src="assets/forca0.png" alt="hangman0" />
        </div>
        <div className="hangmanButtonLetters">
          <button onClick={chooseWord}>Escolher Palavra</button>
          <div className="buttonLetters">
            <p>{wordLetters}</p>
          </div>
        </div>
      </div>
      <div className="keyboard">
        {alfabeto.map((letter, index) => (
          <button key={index}
            onClick={() => verifyButton(index)}
            className={`letter ${selectedLetters.includes(index) ? 'finished' : ''}`}>
            {letter}
          </button>
        ))}
      </div>
      <div className="toGuess">
        <p>Já sei a palavra!</p>
        <input></input>
        <button>Chutar</button>
      </div>
    </div>
  );
}
