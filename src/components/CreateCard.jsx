import React from "react";
import Card from "./Card";

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

export default CreateCard;