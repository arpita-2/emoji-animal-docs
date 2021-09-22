import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "🙈": "See no evil monkey",
  "🙉": "Hear no evil monkey",
  "🙊": "Speak no evil monkey",
  "🐨": "Koala",
  "🐼": "Panda",
  "🐻": "Bear",
  "🐹": "Hamster",
  "🦁": "Lion",
  "🦄": "Unicorn",
  "🐴": "Horse Face",
  "🐷": "Pig Face",
  "🐯": "Tiger Face",
  "🦌": "Deer",
  "🐱": "Cat Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! We don't have this in our Dictionary";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Animal Emoji Docs</h1>
      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      <h3>Emojis:</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer " }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
      <footer>
        <p>Developed by Arpita </p>
      </footer>
    </div>
  );
}
