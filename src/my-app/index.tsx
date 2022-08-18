import React from "react";
import ReactDOM from "react-dom";
//import { createRoot } from 'react-dom/client'
//import * as ReactDOM from 'react-dom/client';
import "./index.css";
import { Repeat } from "typescript-tuple";
import { useState } from "react";

type SquareState = number | null;

type SquareProps = {
  value: SquareState;
  onClick: () => void;
};
type yProps = {
  value: string;
};
const Yobi = (props: yProps) => <button className="y">{props.value}</button>;
const Square = (props: SquareProps) => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
);

type BoardState = Repeat<SquareState, 42>;

type BoardProps = {
  squares: BoardState;
  onClick: (i: number) => void;
};

const dayNum = new Array(42);
const yobi = ["日", "月", "火", "水", "木", "金", "土"];
const date = new Date(); //現在
let year: number = date.getFullYear(); //今何年
let month: number = date.getMonth(); //今何月
//const day1 = new Date(yearS, month, 1); //今月の一日の情報
const day1 = new Date(2025, 2, 1);
month = 2;
year = 2024;
const fYobi = day1.getDay();
console.log(yobi[fYobi]); //一日の曜日
let cnt = 0;
for (; cnt !== fYobi; cnt++) {
  dayNum[cnt] = null;
}
let d = 1;
if (month === 4 || month === 6 || month === 9 || month === 11) {
  //30
  for (; d <= 30; cnt++) {
    dayNum[cnt] = d;
    console.log(dayNum[cnt]);
    d++;
  }
} else if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  //31
  for (; d <= 31; cnt++) {
    dayNum[cnt] = d;
    console.log(dayNum[cnt]);
    d++;
  }
} else if (month === 2) {
  console.log("2gatu!!!!");
  if (year % 4 === 0) {
    for (; d <= 29; cnt++) {
      dayNum[cnt] = d;
      console.log(dayNum[cnt]);
      d++;
    }
  } else {
    for (; d <= 28; cnt++) {
      dayNum[cnt] = d;
      console.log(dayNum[cnt]);
      d++;
    }
  }
}

const Board = (props: BoardProps) => {
  const renderSquare = (i: number) => (
    <Square value={dayNum[i]} onClick={() => props.onClick(i)} />
  );
  const ySquare = (i: number) => <Yobi value={yobi[i]} />;
  return (
    <div>
      <div className="board-high">
        {ySquare(0)}
        {ySquare(1)}
        {ySquare(2)}
        {ySquare(3)}
        {ySquare(4)}
        {ySquare(5)}
        {ySquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
        {renderSquare(10)}
        {renderSquare(11)}
        {renderSquare(12)}
        {renderSquare(13)}
      </div>
      <div className="board-row">
        {renderSquare(14)}
        {renderSquare(15)}
        {renderSquare(16)}
        {renderSquare(17)}
        {renderSquare(18)}
        {renderSquare(19)}
        {renderSquare(20)}
      </div>
      <div className="board-row">
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
        {renderSquare(24)}
        {renderSquare(25)}
        {renderSquare(26)}
        {renderSquare(27)}
      </div>
      <div className="board-row">
        {renderSquare(28)}
        {renderSquare(29)}
        {renderSquare(30)}
        {renderSquare(31)}
        {renderSquare(32)}
        {renderSquare(33)}
        {renderSquare(34)}
      </div>
      <div className="board-row">
        {renderSquare(35)}
        {renderSquare(36)}
        {renderSquare(37)}
        {renderSquare(38)}
        {renderSquare(39)}
        {renderSquare(40)}
        {renderSquare(41)}
      </div>
    </div>
  );
};

/*type Step = {
    squares: BoardState
}*/

type CaleState = {
  readonly year: number;
  readonly month: number;
  readonly plan: BoardState;
};

const Cale = () => {
  const [state, setState] = useState<CaleState>({
    plan: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    year: date.getFullYear(),
    month: date.getMonth(),
  });
  // const current = state.plan[state.stepNumber]

  const handleClick = (i: number) => {};

  const preClick = () => {
    month -= 1;
    if (month < 1) {
      month = 12;
      year -= 1;
    }
    console.log(month);
  };
  const nextClick = () => {
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
    console.log(month);
  };

  return (
    <div className="calendar">
      <div className="game-board">
        <Board
          squares={[
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ]}
          onClick={handleClick}
        />
      </div>
      <div className="info">
        <button onClick={preClick}>←</button>
        <span>{year + "年 "}</span>
        <span>{month + "月"}</span>
        <button onClick={nextClick}>→</button>
        <div>{"ようび " + date.getDay()}</div>
        <ol></ol>
      </div>
    </div>
  );
};

// ========================================
export default Cale;
