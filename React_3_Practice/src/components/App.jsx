import React from "react";
import Entry from "./Entry";
import entries from "../emojipedia.js";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {entries.map(function (entry, index) {
          return (
            <Entry
              key={index}
              emoji={entry.emoji}
              name={entry.name}
              meaning={entry.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
