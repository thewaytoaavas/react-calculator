import React from "react";

const btns = [
  {
    label: "AC",
    clsName: "Clear",
  },

  {
    label: "AC",
    clsName: "Clean",
  },

  {
    label: "AC",
    clsName: "divide",
  },
  {
    label: "AC",
    clsName: "multi",
  },
  {
    label: "AC",
    clsName: "plus",
  },
  {
    label: "AC",
    clsName: "minus",
  },
  {
    label: "AC",
    clsName: "no-7",
  },
  {
    label: "AC",
    clsName: "no-8",
  },
  {
    label: "AC",
    clsName: "no-9",
  },
  {
    label: "AC",
    clsName: "no-4",
  },
  {
    label: "AC",
    clsName: "no-5",
  },
  {
    label: "AC",
    clsName: "no-6",
  },
  {
    label: "AC",
    clsName: "no-1",
  },
  {
    label: "AC",
    clsName: "no-2",
  },
  {
    label: "AC",
    clsName: "no-3",
  },
  {
    label: "AC",
    clsName: "0",
  },
  {
    label: "AC",
    clsName: ".",
  },
  {
    label: "AC",
    clsName: "=",
  },
];

export const Buttons = () => {
  return (
    <div className="items">
      {btns.map((btn, i) => (
        <button key={i} className={btn.clsName}>
          {btn.label}
        </button>
      ))}
    </div>
  );
};
