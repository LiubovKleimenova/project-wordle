import React, { useState } from 'react';

function Input({ guess, formSubmit, inputChange, enabled }) {
  return (
    <form className="guess-input-wrapper" onSubmit={formSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={inputChange}
        disabled={!enabled}
      />
    </form>
  );
}

export default Input;
