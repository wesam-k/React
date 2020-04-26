import React, { useState } from "react";
import "./App.css";

export default function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  function getDogPhoto() {
    setLoading(true);
    const api = "https://dog.ceo/api/breeds/image/random";
    return fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setDogPhotos([...dogPhotos, data.message]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setError(true);
        setLoading(false);
      });
  }

  let text = "Get your first dog by clicking the button!";
  if (dogPhotos.length) {
    text = "Get a dog!";
  }

  function DogPhoto({ image }) {
    return (
      <div>
        <img src={image} className="photo" />
      </div>
    );
  }
  return (
    <div className="dogPhotos">
      <button onClick={getDogPhoto}>{text}</button>
      {dogPhotos.map((photo) => (
        <DogPhoto image={photo} />
      ))}
      {isLoading && <p> loading...!!! just waiting the dog photo</p>}
      {hasError && <p> something is wrong</p>}
    </div>
  );
}
