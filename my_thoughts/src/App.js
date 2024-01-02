import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AddThoughtForm } from "./AddThoughtForm";
import { Thought } from "./Thought";
import { generateId, getNewExpirationTime } from "./utilities";
import { logError } from "./error-logging-service";

const root = createRoot(document.getElementById("app"));

const createThought = (text) => {
  return {
    id: generateId(),
    text,
    expiresAt: getNewExpirationTime(),
  };
};

function App() {
  const [thoughts, setThoughts] = useState([
    createThought("This is a place for your passing thoughts."),
    createThought("They'll be removed after 15 seconds."),
  ]);

  const addThought = (text) => {
    const thought = createThought(text);
    setThoughts((thoughts) => [thought, ...thoughts]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };

  // TODO: Upgrade this fallback component!
  const BlankThought = () => {
    return <p>Oops</p>;
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              removeThought={removeThought}
              key={thought.id}
              thought={thought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

root.render(<App />);
