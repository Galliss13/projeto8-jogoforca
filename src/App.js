import palavras from "./palavras";
import alfabeto from "./alfabeto";
import React, { useState } from "react";

export default function App() {
  const sorteio =  palavras.sort(() => Math.random() - 0.5);
  const [wordDrawn, setWordDrawn] = React.useState(sorteio[0]);
  const [wordLetters, setWordLetters] = React.useState("");
  const [estadoAlfabeto, setEstadoAlfabeto] = React.useState(alfabeto.map((letra) => letra = true))
  const [mistakes, setMistakes] = React.useState(0);

  function chooseWord() {
    setWordDrawn(sorteio[1]);
    setWordLetters(wordDrawn.split('').map((l) => l = '_ '))
  }

  function verifyButton(i) {
    if (estadoAlfabeto[i] !== false) {
      setEstadoAlfabeto(...estadoAlfabeto, estadoAlfabeto[i] = false)
    }

    console.log(estadoAlfabeto);
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
            className="letter">
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
