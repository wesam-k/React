import React from "react";
import Friend from "./newFriend";
import DogGallery from "./Dog_photo_gallery";
import RandomJoke from "./Random_Joke"
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <Friend />
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
