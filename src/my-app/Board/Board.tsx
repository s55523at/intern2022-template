import { Repeat } from "typescript-tuple";
import Square from "~/my-app/Square/Square";
import Yobi from "~/my-app/Yobi/Yobi";
import { useState, FC } from "react";

type SquareState = number | null;

type BoardState = Repeat<SquareState, 42>;

type BoardProps = {
  date: {
    year: number; //setDate({...date,year:1})
    month: number;
  };
  squares: BoardState;
  onClick: (i: number) => void;
};

const Board = (props: BoardProps) => {
  const yobi = ["日", "月", "火", "水", "木", "金", "土"];
  const dayNum: (number | null)[] = []; //空の日付配列
  const now = new Date();
  const nowD = now.getDate();
  const nowM = now.getMonth() + 1;

  const checkNow = () => {
    if (props.date.month === nowM) {
      if (d === nowD) {
        /*const a = document.getElementById("day");
        a.setAttribute("id", "uuu");
        console.log(a.id);
        a.id = "today";
        console.log(a.id);*/
        console.log(d);
      }
    }
  };

  const day1 = new Date(props.date.year, props.date.month - 1, 1);
  console.log(day1);
  //month = 2;
  //year = 2024;
  const fYobi = day1.getDay();
  console.log(yobi[fYobi]); //一日目の曜日

  let cnt = 0;
  for (; cnt !== fYobi; cnt++) {
    dayNum.push(null);
  }
  let d = 1;
  if (
    props.date.month === 4 ||
    props.date.month === 6 ||
    props.date.month === 9 ||
    props.date.month === 11
  ) {
    //30
    for (; d !== 31; cnt++) {
      dayNum.push(d);
      checkNow();
      d++;
    }
  } else if (
    props.date.month === 1 ||
    props.date.month === 3 ||
    props.date.month === 5 ||
    props.date.month === 7 ||
    props.date.month === 8 ||
    props.date.month === 10 ||
    props.date.month === 12
  ) {
    //31
    for (; d !== 32; cnt++) {
      dayNum.push(d);
      checkNow();
      d++;
    }
  } else if (props.date.month === 2) {
    console.log("2gatu!!!!");
    if (props.date.year % 4 === 0) {
      //うる
      for (; d !== 30; cnt++) {
        dayNum.push(d);
        checkNow();
        d++;
      }
    } else {
      for (; d !== 29; cnt++) {
        dayNum.push(d);
        checkNow();
        d++;
      }
    }
  }
  for (; d <= 42; cnt++) {
    dayNum.push(null);
    d++;
  }

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
      <div id="day" className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div id="day" className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
        {renderSquare(10)}
        {renderSquare(11)}
        {renderSquare(12)}
        {renderSquare(13)}
      </div>
      <div id="day" className="board-row">
        {renderSquare(14)}
        {renderSquare(15)}
        {renderSquare(16)}
        {renderSquare(17)}
        {renderSquare(18)}
        {renderSquare(19)}
        {renderSquare(20)}
      </div>
      <div id="day" className="board-row">
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
        {renderSquare(24)}
        {renderSquare(25)}
        {renderSquare(26)}
        {renderSquare(27)}
      </div>
      <div id="day" className="board-row">
        {renderSquare(28)}
        {renderSquare(29)}
        {renderSquare(30)}
        {renderSquare(31)}
        {renderSquare(32)}
        {renderSquare(33)}
        {renderSquare(34)}
      </div>
      <div id="day" className="board-row">
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

export default Board;
