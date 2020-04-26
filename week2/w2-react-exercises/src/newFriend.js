import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import "./App.css";

export default function NewFriend() {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  function getFriend() {
    setLoading(true);
    const api = "https://www.randomuser.me/api?results=1";
    return fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setFriend(data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setError(true);
        setLoading(false);
      });
  }

  return (
    <div className="newFriend">
      {friend && (
        <FriendProfile
          firstName={friend.name ? friend.name.first : ""}
          lastName={friend.name ? friend.name.last : ""}
          street={friend.location ? friend.location.street.name : ""}
          city={friend.location ? friend.location.city : ""}
          postcode={friend.location ? friend.location.postcode : ""}
          country={friend.location ? friend.location.country : ""}
          email={friend.email}
          phoneNum={friend.phone}
        />
      )}

      <button onClick={getFriend}>Get a friend!</button>
      {isLoading && <p> loading...!!! just waiting</p>}
      {hasError && <p> something is wrong</p>}
    </div>
  );
}
