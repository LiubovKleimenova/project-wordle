import React from 'react';

function Banner({ status, attempts, answer }) {
  return (
    <div className={` ${status} banner`}>
      {status === 'sad' ? (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      ) : (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{attempts} guesses</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
