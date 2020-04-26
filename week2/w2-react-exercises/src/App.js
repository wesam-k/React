import React from "react";
import NewFriend from "./newFriend";
import DogGallery from "./DogGallery";
import RandomJoke from "./Random_Joke"
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <NewFriend />
      </div>
      <div className="DogGallery">
        <DogGallery />
      </div>
      <div className="RandomJoke">
        <RandomJoke />
      </div>
    </div>
  );
}

export default App;
