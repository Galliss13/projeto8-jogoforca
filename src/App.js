import palavras from "./palavras";
import alfabeto from "./alfabeto";
import React, { useState } from "react";

export default function App() {
  const sorteio =  palavras.sort(() => Math.random() - 0.5);
  const [wordDrawn, setWordDrawn] = React.useState(sorteio[1]);
  const [wordLetters, setWordLetters] = React.useState([]);
  const [selectedLetters, setSelectedLetters] = React.useState([]);
  const [mistakes, setMistakes] = React.useState(0);
  console.log(wordDrawn);


  function chooseWord() {
    setWordDrawn(sorteio[1]);
    console.log(wordDrawn);
    setWordLetters(sorteio[1].split('').map((l) => l = '_ '));
    setSelectedLetters([]);
    setMistakes(0);
  }

  function verifyButton(l, i) {
    if (!selectedLetters.includes(i) && wordDrawn !== sorteio[0]) {
      setSelectedLetters([...selectedLetters, i])
      console.log(l);
      console.log(wordDrawn);
      if (wordDrawn.includes(l)) {
        const newArray = [...wordLetters];
        for (let k = 0; k < wordDrawn.length; k++) {
          if (wordDrawn[k] === l) {
            newArray[k] = `${l} `;
          } 
        }
        setWordLetters(newArray);
      } else {
        setMistakes(mistakes + 1)
      }
    }
  }

  
  return (
    <div className="game">
      <div className="hangmanImageButton">
        <div className="hangmanImage">
          <img src={`assets/forca${mistakes}.png`} alt="hangman0" />
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
            onClick={() => verifyButton(letter, index)}
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
