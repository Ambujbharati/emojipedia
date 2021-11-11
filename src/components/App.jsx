import React from "react";
import Card from "./Card";
import emj from "../emojipedia";

function CreateCard(emj){
  return (
    <Card 
      id={emj.id}
      emoji={emj.emoji}
      name={emj.name}
      meaning={emj.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emj.map(CreateCard)}
      </dl>
    </div>
  );
}

export default App;
