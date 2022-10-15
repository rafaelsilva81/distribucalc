import React from "react";
import {
  X as Times,
  Divide,
  Plus,
  Minus,
  Circle,
  Equals,
} from "phosphor-react";

interface KeyboardButtonProps {
  value: string;
  onClick: (value: string) => void;
}

export const NumberButton = (props: KeyboardButtonProps) => {
  const { value, onClick } = props;

  return (
    <button
      onClick={() => onClick(value)}
      className={`bg-neutral-900 hover:bg-neutral-800 font-bold p-3 m-4 rounded flex 
    w-52 justify-center items-center text-4xl text-neutral-100`}
    >
      <span className="flex items-center justify-center"> {value} </span>
    </button>
  );
};

export const OperationButton = (props: KeyboardButtonProps) => {
  const { value, onClick } = props;

  return (
    /* Make a button with a depth effect when clicked */
    <button
      onClick={() => onClick(value)}
      className={`${
        value === "C"
          ? "bg-red-600 hover:bg-red-500"
          : "bg-zinc-500 hover:bg-zinc-400"
      } font-bold p-3 m-4 rounded flex
        ${
          value === "=" ? "w-full" : "w-52"
        } align-center items-center justify-center text-4xl text-neutral-200 font-bold`}
    >
      <span className="flex items-center justify-center">
        {value === "X" ? (
          <Times weight="bold" />
        ) : value === "/" ? (
          <Divide weight="bold" />
        ) : value === "+" ? (
          <Plus weight="bold" />
        ) : value === "-" ? (
          <Minus weight="bold" />
        ) : value === "." ? (
          <Circle weight="fill" size={20} />
        ) : value === "=" ? (
          <Equals weight="bold" />
        ) : (
          value
        )}
      </span>
    </button>
  );
};
