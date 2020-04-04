import React from "react";
import ReactDOM from "react-dom";
import App from "./hobby";
import Counter from "./Counter";
import Guarantee from "./Guarantee";
import delivery from "./delivery.png";
import coin from "./coin.png";
import chat from "./chat.png";


const components = [
  {
    img: { delivery },
    title: " Free shipping",
    description: "we are ready to deliver your order any time ",
  },
  {
    img: { coin },
    title: "100 % money back",
    description: "don't worry abut your money",
  },
  {
    img: { chat },
    title: "Online support 24/7",
    description: "for any question or we are here to help you",
  },
];

const hobbies = [
  {
    kind: "Surfing",
  },
  {
    kind: "climbing",
  },
  {
    kind: "Mountain biking",
  },
  {
    kind: "Breakdancing",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App HobbiesKind={hobbies} />
  </React.StrictMode>,
  document.getElementById("hobby")
);

ReactDOM.render(
  <React.StrictMode>
    <Guarantee componentEle={components} />
  </React.StrictMode>,
  document.getElementById("Guarantees")
);
ReactDOM.render(
  <React.StrictMode>
    <Counter  />
  </React.StrictMode>,
  document.getElementById("Counter")
);
