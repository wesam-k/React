import React from "react";

const HobbyList = ({ prop }) => {
  return (
    <div>
      <ul>
        <li> hobby kind: {prop.kind}</li>
      </ul>
    </div>
  );
};

function App({ HobbiesKind }) {
  return (
    <div className="app">
      {HobbiesKind.map((prop) => (
        <HobbyList prop={prop} />
      ))}
    </div>
  );
}

export default App;
