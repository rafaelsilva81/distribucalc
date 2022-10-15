import React, { useEffect } from "react";
import socket from "../services/Server";

interface DisplayProps {
  value?: string;
}

export const Display = (props: DisplayProps) => {
  const connection = socket;
  const [status, setStatus] = React.useState(1);

  useEffect(() => {
    connection.addEventListener("close", () => {
      setStatus(0);
    });
  }, [connection]);

  const { value } = props;

  useEffect(() => {
    console.log("Display value changed to: ", value);
    setDisplay(value || "0");
  }, [value]);

  const [display, setDisplay] = React.useState<string>("0");

  return (
    <div id="display" className="border-[2em] border-t-0 border-neutral-800">
      <div className="bg-neutral-800 p-2 flex flex-row items-center justify-start">
        {status === 0 ? (
          <>
            <div
              className="w-4 h-4 rounded-full bg-red-500"
              style={{ boxShadow: "0 0 5px rgb(239 68 68)" }}
            />
          </>
        ) : (
          <div
            className="w-4 h-4 rounded-full bg-green-500"
            style={{ boxShadow: "0 0 5px rgb(34 197 94)" }}
          />
        )}
        {/* Reconnect button */}
      </div>
      {/* Rounded display element */}
      <div className="flex justify-end bg-[#55584d] h-1/3 w-full border-[1.5em] border-gray-300">
        <div className="flex flex-col w-full h-full py-3">
          <div className="flex justify-end items-center mx-4">
            <p className="text-6xl font-bold text-neutral-900 font-[Calculator] text-ellipsis overflow-hidden">
              {display}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
