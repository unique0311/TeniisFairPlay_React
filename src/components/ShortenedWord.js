import React from "react";

import copyImage from "../assets/copy.png";

const ShortenedWord = ({ word }) => {
  if (!word || word.length === 0) {
    return <span>...</span>;
  }

  const handleClick = () => {
    // Copy the full address to the clipboard
    navigator.clipboard.writeText(word);
  };

  const maxLength = 7;
  const ellipsisLength = 5;

  if (word.length <= maxLength + ellipsisLength) {
    return <span>{word}</span>;
  }

  const firstCharacters = word.slice(0, maxLength);
  const lastCaracters = word.slice(-ellipsisLength);

  return (
    <div className="walletAddress__container">
      <span>
        {firstCharacters}...{lastCaracters}
      </span>
      <img src={copyImage} onClick={handleClick} />
    </div>
  );
};

export default ShortenedWord;
