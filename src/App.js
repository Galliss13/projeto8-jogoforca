import palavras from './palavras'
import alfabeto from './alfabeto'

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
      <div className="keyboard">
        {alfabeto.map ((letter, index) => <button className='letter'>{letter}</button>)}
      </div>
      <div className="toGuess">
        <p>Já sei a palavra!</p>
        <input></input>
        <button>Chutar</button>
      </div>
    </div>
  );
}
