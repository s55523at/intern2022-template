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
  //onClick: (i: number) => void;
};

type scheduleData = {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  memo: string;
};

const Board = (props: BoardProps) => {
  const yobi = ["日", "月", "火", "水", "木", "金", "土"];
  const dayNum: (number | null)[] = []; //空の日付配列
  const [data, setData] = useState<(scheduleData | null)[]>([]);
  //const [data,setData]=useState<(string|null)[]>([]);
  const now = new Date();
  const nowD = now.getDate();
  const nowM = now.getMonth() + 1;
  const tKey: (number | null)[] = [];

  const checkNow = () => {
    if (props.date.month === nowM) {
      if (d === nowD) {
        tKey.pop();
        tKey.push(1);
        //console.log(d);
      }
    }
  };

  const day1 = new Date(props.date.year, props.date.month - 1, 1);
  //console.log(day1);
  //month = 2;
  //year = 2024;
  const fYobi = day1.getDay();
  //console.log(yobi[fYobi]); //一日目の曜日

  let cnt = 0;
  for (; cnt !== fYobi; cnt++) {
    dayNum.push(null);
    tKey.push(0);
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
      tKey.push(0);
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
      tKey.push(0);
      checkNow();
      d++;
    }
  } else if (props.date.month === 2) {
    //console.log("2gatu!!!!");
    if (props.date.year % 4 === 0) {
      //うる
      for (; d !== 30; cnt++) {
        dayNum.push(d);
        tKey.push(0);
        checkNow();
        d++;
      }
    } else {
      for (; d !== 29; cnt++) {
        dayNum.push(d);
        tKey.push(0);
        checkNow();
        d++;
      }
    }
  }
  for (; d <= 42; cnt++) {
    dayNum.push(null);
    tKey.push(0);
    d++;
  }
  //setDayTitle={function (dayTitle: string | null): string | null {} }

  const renderSquare = (i: number) => (
    <Square
      date={props.date} //月
      value={dayNum[i]} //日
      today={tKey[i]} //今日か否か
      squareNum={i}
      data={data[i]} //予定
      setData={setData}
    />
  );
  const ySquare = (i: number) => <Yobi value={yobi[i]} />;

  /*const [count, setCount] = useState(0);
  setCount((prevCount) => {
    return prevCount + 1;
  });

  type SetCount = (prev: (i: number) => number) => void;*/

  return (
    <table className="tab">
      <tr>
        <th>{ySquare(0)}</th>
        <th>{ySquare(1)}</th>
        <th>{ySquare(2)}</th>
        <th>{ySquare(3)}</th>
        <th>{ySquare(4)}</th>
        <th>{ySquare(5)}</th>
        <th>{ySquare(6)}</th>
      </tr>
      <tr>
        <th>{renderSquare(0)}</th>
        <th>{renderSquare(1)}</th>
        <th>{renderSquare(2)}</th>
        <th>{renderSquare(3)}</th>
        <th>{renderSquare(4)}</th>
        <th>{renderSquare(5)}</th>
        <th>{renderSquare(6)}</th>
      </tr>
      <tr>
        <th>{renderSquare(7)}</th>
        <th>{renderSquare(8)}</th>
        <th>{renderSquare(9)}</th>
        <th>{renderSquare(10)}</th>
        <th>{renderSquare(11)}</th>
        <th>{renderSquare(12)}</th>
        <th>{renderSquare(13)}</th>
      </tr>
      <tr>
        <th>{renderSquare(14)}</th>
        <th>{renderSquare(15)}</th>
        <th>{renderSquare(16)}</th>
        <th>{renderSquare(17)}</th>
        <th>{renderSquare(18)}</th>
        <th>{renderSquare(19)}</th>
        <th>{renderSquare(20)}</th>
      </tr>
      <tr>
        <th>{renderSquare(21)}</th>
        <th>{renderSquare(22)}</th>
        <th>{renderSquare(23)}</th>
        <th>{renderSquare(24)}</th>
        <th>{renderSquare(25)}</th>
        <th>{renderSquare(26)}</th>
        <th>{renderSquare(27)}</th>
      </tr>
      <tr>
        <th>{renderSquare(28)}</th>
        <th>{renderSquare(29)}</th>
        <th>{renderSquare(30)}</th>
        <th>{renderSquare(31)}</th>
        <th>{renderSquare(32)}</th>
        <th>{renderSquare(33)}</th>
        <th>{renderSquare(34)}</th>
      </tr>
      <tr>
        <th>{renderSquare(35)}</th>
        <th>{renderSquare(36)}</th>
        <th>{renderSquare(37)}</th>
        <th>{renderSquare(38)}</th>
        <th>{renderSquare(39)}</th>
        <th>{renderSquare(40)}</th>
        <th>{renderSquare(41)}</th>
      </tr>
    </table>
  );
};

export default Board;
