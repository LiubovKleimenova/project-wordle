import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import List from '../List';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState('');
  const [guessList, setGuessList] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');

  function formSubmit(e) {
    e.preventDefault();

    if (guess.length !== 5) {
      alert('Guess must be 5 letters long');
      return;
    }

    if (guess === answer) {
      setGameStatus('happy');
    }

    if (guess !== answer && guessList.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('sad');
    }

    setGuessList([...guessList, guess]);
    setGuess('');
  }

  function inputChange(e) {
    const guessValue = e.target.value.trim();
    if (guessValue.length > 5) {
      alert('Guess must be 5 letters long');
      return;
    }
    setGuess(guessValue.toUpperCase());
  }

  return (
    <>
      <List guessList={guessList} answer={answer} />
      {gameStatus === 'playing' ? (
        <Input
          guess={guess}
          formSubmit={formSubmit}
          inputChange={inputChange}
          enabled={guessList.length < NUM_OF_GUESSES_ALLOWED}
        />
      ) : (
        <Banner
          status={gameStatus}
          attempts={guessList.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
