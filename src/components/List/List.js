import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function List({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <p key={index} className="guess">
          {guessList[index]
            ? checkGuess(guessList[index], answer)
                .slice(0, 5)
                .map(({ letter, status }, index) => (
                  <span key={index} className={`cell ${status}`}>
                    {letter}
                  </span>
                ))
            : range(0, 5).map((index) => <span key={index} className="cell" />)}
        </p>
      ))}
    </div>
  );
}

export default List;
