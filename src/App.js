export default function App() {
  return (
    <div className="game">
      <div className="hangmanImageButton">
        <div className="hangmanImage">
          <img src="assets/forca0.png" alt="hangman0" />
        </div>
        <div className="hangmanButtonLetters">
          <button>Escolher Palavra</button>
          <div className="buttonLetters"></div>
        </div>
      </div>
      <div className="keyboard"></div>
      <div className="toGuess">
        <p>Já sei a palavra!</p>
        <input></input>
        <button>Chutar</button>
      </div>
    </div>
  );
}
