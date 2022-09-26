import palavras from "./palavras";
import alfabeto from "./alfabeto";
import React, { useState } from "react";

export default function App() {
  const sorteio = palavras.sort(() => Math.random() - 0.5);
  const [wordDrawn, setWordDrawn] = React.useState(sorteio[1]);
  const [wordLetters, setWordLetters] = React.useState([]);
  const [selectedLetters, setSelectedLetters] = React.useState([]);
  const [mistakes, setMistakes] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState("word");
  const [guessWord, setGuessWord] = useState("");
  console.log(wordDrawn);

    // NÃO CONSEGUI COLOCAR O IDENTIFICADOR "WORD" NA PALAVRA A SER ADIVINHADA, MAS ELA É REPRESENTADA PELA VÁRIAVEL wordDrawn

  function chooseWord() {
    setWordDrawn(sorteio[1]);
    setWordLetters(sorteio[1].split("").map((l) => (l = "_ ")));
    setSelectedLetters([]);
    setMistakes(0);
    setGameStatus("word");
    setGuessWord("");
  }

  function verifyButton(l, i) {
    if (
      !selectedLetters.includes(i) &&
      wordDrawn !== sorteio[1] &&
      (gameStatus === "word")
    ) {
      setSelectedLetters([...selectedLetters, i]);
      const newWord = wordDrawn
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      if (newWord.includes(l)) {
        const newArray = [...wordLetters];

        for (let k = 0; k < wordDrawn.length; k++) {
          if (newWord[k] === l) {
            newArray[k] = `${l} `;
          }
        }
        setWordLetters(newArray);
      } else {
        if (mistakes < 6) {
          setMistakes(mistakes + 1);
        }
      }

      verifyEndGame();
    }
  }

  function verifyEndGame() {
    let qtde_ = 0;
    for (let i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] === "_ ") qtde_++;
    }
    if (mistakes === 5) {
      youLoose();
    } else if (qtde_ === 1) {
      youWon();
    }
  }

  function youLoose() {
    setWordLetters(wordDrawn);
    setMistakes(6);
    setGameStatus("loose");
    setGuessWord("");
  }
  function youWon() {
    setWordLetters(wordDrawn);
    setGameStatus("win");
    setGuessWord("");
  }

  return (
    <div className="game">
      <div className="hangmanImageButton">
        <div className="hangmanImage">
          <img data-identifier="game-image" src={`assets/forca${mistakes}.png`} alt="hangman0" />
        </div>
        <div className="hangmanButtonLetters">
          <button data-identifier="choose-word" onClick={chooseWord}>Escolher Palavra</button>
          <div className="buttonLetters">
            <p className={gameStatus}>{wordLetters}</p>
          </div>
        </div>
      </div>
      <div className="keyboard">
        {alfabeto.map((letter, index) => (
          <button data-identifier="letter" key={index} onClick={() => verifyButton(letter, index)} className={`letter ${
              selectedLetters.includes(index) ? "finished" : ""
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="toGuess">
        <p>Já sei a palavra!</p>
        <input data-identifier="type-guess" onChange={(e) => setGuessWord(e.target.value)}></input>
        <button data-identifier="guess-button" onClick={() => guessWord === wordDrawn ? youWon() : youLoose()}>
          Chutar
        </button>
      </div>
    </div>
  );
}
