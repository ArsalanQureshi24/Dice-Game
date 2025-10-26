import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../redux/slices/gameSlice";
import store from "../redux/store";
const Header = () => {
  const game = useSelector((store) => store.game);
  const {diceNumber, guessedNumber, totalScore} = game;
  const dispatch = useDispatch();

  const handleSelectedNumber = (number) => {
    dispatch(gameActions.guessNumber(number));
    
  };

  

  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom my-header">
        {" "}
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          {" "}
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlinkHref="#bootstrap"></use>
          </svg>{" "}
          <div>
            <h1 className={`total-score-count ${totalScore != 0 && 'motion-on-count' } `}>{totalScore}</h1>{" "}
            <h4 className="fs-4">Total Score</h4>
          </div>
        </a>{" "}
        <ul className="nav nav-pills my-guess-numbers">
          {" "}
          <li className="nav-item">
            <button
              className={`guessed-number ${
                guessedNumber === "1" && "selected-guessed-number"
              }`}
              onClick={() => handleSelectedNumber("1")}
            >
              1
            </button>
          </li>{" "}
          <li className="nav-item">
            <button
              className={`guessed-number ${
                guessedNumber === "2" && "selected-guessed-number"
              }`}
              onClick={() => handleSelectedNumber("2")}
            >
              2
            </button>
          </li>{" "}
          <li className="nav-item">
            <button
              className={`guessed-number ${
                guessedNumber === "3" && "selected-guessed-number"
              }`}
              onClick={() => handleSelectedNumber("3")}
            >
              3
            </button>
          </li>{" "}
          <li className="nav-item">
            <button
              className={`guessed-number ${
                guessedNumber === "4" && "selected-guessed-number"
              }`}
              onClick={() => handleSelectedNumber("4")}
            >
              4
            </button>
          </li>{" "}
          <li className="nav-item">
            <button
              className={`guessed-number ${
                guessedNumber === "5" && "selected-guessed-number"
              }`}
              onClick={() => handleSelectedNumber("5")}
            >
              5
            </button>
          </li>{" "}
          <li className="nav-item">
            <button
              className={`guessed-number ${
                guessedNumber === "6" && "selected-guessed-number"
              }`}
              onClick={() => handleSelectedNumber("6")}
            >
              6
            </button>
          </li>{" "}
        </ul>{" "}
        
      </header>
    </>
  );
};

export default Header;
