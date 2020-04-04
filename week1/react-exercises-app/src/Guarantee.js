import React from "react";

const GuaranteeItems = ({ prop }) => {
  return (
    <div
      className="Guar"
      style={{
        width: "calc(33.3%-20)",
        display: "inline-block",
        margin: "20px",
      }}
    >
      <img src={prop.img} />
      <h3>{prop.title}</h3>
      <p>{prop.description}</p>
    </div>
  );
};

function Guarantee({ componentEle }) {
  return (
    <div>
      {componentEle.map((prop) => (
        <GuaranteeItems prop={prop} />
      ))}
    </div>
  );
}

export default Guarantee;
