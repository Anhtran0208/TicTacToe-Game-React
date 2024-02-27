import { useState } from "react";

export default function Player({ initalName, symbol, isActive, onChangeName }) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(initalName);

  function handleClick() {
    setIsEdit((editing) => !editing);
    if (isEdit) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
