import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, updateResult] = useState("");
  const [pp, updatePP] = useState(0);
  const [sq, updateSQ] = useState(0);
  const [cp, updateCP] = useState(0);

  function updateOutput(event) {
    let result = "";
    if (Number(pp) < Number(cp)) {
      result =
        "Yay you made a profilt of " +
        (cp - pp) * sq +
        String.fromCharCode(8377) +
        " which is " +
        ((cp - pp) / pp) * 100 +
        "%";
    } else if (pp === 0 || cp === 0 || sq === 0) {
      result = "Please enter a Value";
    } else if (pp === cp) {
      result = "You made no profilt or had any loss the Stock proce is same";
    } else {
      result =
        "You made a loss of " +
        (pp - cp) * sq +
        String.fromCharCode(8377) +
        " which is " +
        ((pp - cp) / pp) * 100 +
        "%";
    }
    updateResult(result);
//     updatePP(0);
//     updateCP(0);
//     updateSQ(0);
  }

  return (
    <div className="App">
      <h1 className={"title"}>Stock Profit/loss Calculator</h1>
      <div className={"content"}>
        <h3>
          Puchase Price:
          <input
            type="number"
            onChange={(event) => {
              updatePP(event.target.value);
            }}
          ></input>
        </h3>
        <h3>
          Stock Quantity:
          <input
            type="number"
            onChange={(event) => {
              updateSQ(event.target.value);
            }}
          ></input>
        </h3>
        <h3>
          Current Price:
          <input
            type="number"
            onChange={(event) => {
              updateCP(event.target.value);
            }}
          ></input>
        </h3>
        <button onClick={updateOutput}>Check</button>
        <h2>{result}</h2>
      </div>
    </div>
  );
}
