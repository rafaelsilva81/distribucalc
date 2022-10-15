import React from "react";
import { NumberButton, OperationButton } from "./common/KeyboardButton";

const operations = ["+", "-", "X", "/"];
const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
const special = ["C", "=", "^"];

export const Keyboard = (props: { itemClicked: (value: string) => void }) => {
  const { itemClicked } = props;

  return (
    <div id="keyboard" className="border-t-[1.5em] border-gray-500 bg-zinc-700">
      {/* First row with operations */}
      <div className="flex justify-evenly">
        {operations.map((operation) => (
          <OperationButton
            value={operation}
            onClick={itemClicked}
            key={operation}
          />
        ))}
      </div>
      {/* Second row with numbers 7 8 9 and special , */}
      <div className="flex justify-evenly">
        {numbers.slice(0, 3).map((number) => (
          <NumberButton value={number} onClick={itemClicked} key={number} />
        ))}
        <OperationButton onClick={itemClicked} value={special[2]} />
      </div>

      {/* Third row with numbers 4 5 6 and special CE */}
      <div className="flex justify-evenly">
        {numbers.slice(3, 6).map((number) => (
          <NumberButton onClick={itemClicked} value={number} key={number} />
        ))}
        <OperationButton onClick={itemClicked} value={special[0]} />
      </div>

      {/* Fourth row with numbers 1 2 3 and 0 */}

      <div className="flex justify-evenly">
        {numbers.slice(6, 10).map((number) => (
          <NumberButton onClick={itemClicked} value={number} key={number} />
        ))}
      </div>

      {/* Fifth row with special = (ENTIRE LENGTH) */}
      <div className="flex justify-center w-full pb-1">
        <OperationButton onClick={itemClicked} value={special[1]} />
      </div>
    </div>
  );
};
