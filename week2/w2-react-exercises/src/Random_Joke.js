import React, { useState, useEffect } from "react";
import "./App.css";

export default function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const api = "https://official-joke-api.appspot.com/random_joke";
  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((data) => setJoke(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  function Joke(props) {
    return (
      <div>
        <p>{props.setup}</p>
        <p>{props.punchline}</p>
      </div>
    );
  }

  return (
    <div className="RandomJoke">
      {joke && <Joke setup={joke.setup} punchline={joke.punchline} />}
      <button onClick={Joke}>Get a joke</button>
      {isLoading && <p> loading...!!! just waiting it's not joking</p>}
      {hasError && <p> something is wrong</p>}
    </div>
  );
}
