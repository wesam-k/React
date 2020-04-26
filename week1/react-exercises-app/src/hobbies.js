import React from "react";

const HobbyList = ({ hobby }) => {
  return (
    <div>
      <ul>
        <li> hobby kind: {hobby.kind}</li>
      </ul>
    </div>
  );
};

function Hobbies({ HobbiesKind }) {
  return (
    <div className="app">
      {HobbiesKind.map((hobbyKind) => (
        <HobbyList hobby={hobbyKind} />
      ))}
    </div>
  );
}

export default Hobbies;
