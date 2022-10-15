/* Calculator SPA */
import React, { useEffect, useRef } from "react";
import { Display } from "./components/Display";
import { Keyboard } from "./components/Keyboard";
import socket from "./services/Server";

interface Calculation {
  firstExpression: string;
  secondExpression: string;
  operator: string;
}

function App() {
  const connection = socket;
  const [value, setValue] = React.useState("0");
  const [calc, setCalc] = React.useState<Calculation | undefined>();

  useEffect(() => {
    connection.onmessage = (event) => {
      setValue(event.data);
    };
  }, [connection]);

  const itemClicked = async (val: string) => {
    if (val === "C") {
      setValue("0");
      setCalc(undefined);
      return;
    }

    if (val === "=") {
      if (calc) {
        connection.send(JSON.stringify(calc));
      }
      return;
    }

    if (
      val === "+" ||
      val === "-" ||
      val === "X" ||
      val === "/" ||
      val === "^"
    ) {
      setCalc({ firstExpression: value, operator: val, secondExpression: "" });
      setValue("0");
      return;
    }

    if (calc) {
      setCalc({
        ...calc,
        secondExpression: calc.secondExpression + val,
      });
      setValue(calc.secondExpression + val);
      return;
    }

    setValue(value === "0" ? val : value + val);
  };

  return (
    <div id="app">
      <div className="flex justify-center bg-sky-500 min-h-screen w-screen pt-10">
        <div
          className="flex flex-col bg-gray-100 h-full w-1/3 rounded-b-sm border-sky-500"
          id="calculator"
        >
          {/* Display */}
          <div className="w-full">
            <Display value={value} />
          </div>

          {/* Keyboard */}
          <div className="w-full h-full">
            <Keyboard itemClicked={itemClicked} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
