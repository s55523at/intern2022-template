import { Repeat } from "typescript-tuple";
import Square from "~/my-app/Square/Square";
import Yobi from "~/my-app/Yobi/Yobi";
import { useState, FC } from "react";
import { PresenceContext } from "framer-motion";

type SquareState = number | null;

type BoardState = Repeat<SquareState, 42>;

type date = {
  year: number;
  month: number;
  day: number;
  id: number | null;
};

type BoardProps = {
  date: {
    year: number; //setDate({...date,year:1})
    month: number;
  };
  squares: BoardState;
  //onClick: (i: number) => void;
};

type scheduleData = {
  title: string | undefined;
  year: number;
  month: number;
  day: number;
  startTime: string | undefined;
  endTime: string | undefined;
  memo: string | undefined;
  id: number;
};

const Board = (props: BoardProps) => {
  const yobi = [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
  ];
  const dayNum: (number | null)[] = []; //空の日付配列
  const [data, setData] = useState<(scheduleData | null)[]>([]);
  const now = new Date();
  const nowD = now.getDate();
  const nowM = now.getMonth() + 1;
  const tKey: (number | null)[] = [];
  let zure = -1;

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
  const fYobi = day1.getDay();

  let cnt = 0;
  for (; cnt !== fYobi; cnt++) {
    dayNum.push(null);
    tKey.push(0);
    zure++;
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

  const addData = (newData: scheduleData) => {
    setData((prev) => {
      return [...prev, newData];
    });
  };
  const deleteData = (delDate: date) => {
    console.log(delDate.id);
    console.log(data);

    setData((prev) => {
      return prev.filter(
        (data) =>
          delDate.year !== data?.year ||
          delDate.month !== data?.month ||
          delDate.day !== data?.day ||
          delDate.id !== data?.id
      );
    });
    console.log(data);
  };

  const renderSquare = (i: number) => (
    <Square
      date={props.date} //月
      value={dayNum[i]} //日
      today={tKey[i]} //今日か否か
      squareNum={i}
      data={data} //予定
      setData={addData}
      delData={deleteData}
      editData={addData}
      zure={zure}
    />
  );
  const ySquare = (i: number) => <Yobi value={yobi[i]} />;

  const elm = [];
  for (let i = 0; i < 42; i += 7) {
    const items = [];
    for (let j = 0; j < 7; j++) {
      items.push(
        <td
          key={
            props.date.year.toString() +
            props.date.month.toString() +
            (i + j).toString()
          }
        >
          {renderSquare(j + i)}
        </td>
      );
    }
    elm.push(
      <tr
        key={
          props.date.year.toString() +
          props.date.month.toString() +
          i.toString()
        }
      >
        {items}
      </tr>
    );
  }

  return (
    <table className="tab">
      <tbody>
        <tr className="yobiText">
          <th>{ySquare(0)}</th>
          <th>{ySquare(1)}</th>
          <th>{ySquare(2)}</th>
          <th>{ySquare(3)}</th>
          <th>{ySquare(4)}</th>
          <th>{ySquare(5)}</th>
          <th>{ySquare(6)}</th>
        </tr>
        {}
        {elm.map((value) => {
          return value;
        })}
      </tbody>
    </table>
  );
};

export default Board;
