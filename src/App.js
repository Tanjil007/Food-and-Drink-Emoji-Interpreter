import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🥕": "Carrot",
  "🍒": "Cherries",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🥝": "Kiwi Fruits",
  "🍑": "Peach",
  "🌽": "Ear Of Corn",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🥯": "Bagel",
  "🥐": "Croissant",
  "🧄": "Garlic",
  "🥨": "Pretzel",
  "🥓": "Bacon",
  "🍿": "Popcorn"
};

export default function App() {
  var [meaning, setMeaning] = useState("");
  var weKnowEmojis = Object.keys(emojiDictionary);

  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Meaning not found with this emoji";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside outtt!</h1>
      <input onChange={inputEmojiHandler} />
      <h2 style={{ color: "dodgerblue" }}>{meaning}</h2>
      <h1>Emoji we know</h1>
      {weKnowEmojis.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
