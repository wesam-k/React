import React from "react";

const GuaranteeItems = ({ product }) => {
  return (
    <div
      className="Guar"
      style={{
        width: "calc(33.3%-20px)",
        display: "inline-block",
        margin: "20px",
      }}
    >
      <img src={product.img} alt="product"/>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};

function Guarantee({service  }) {
  return (
    <div key={production.id}>
      {service.map((production) => (
        <GuaranteeItems product={production} />
      ))}
    </div>
  );
}

export default Guarantee;
