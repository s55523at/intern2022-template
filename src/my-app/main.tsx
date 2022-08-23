import { FC, useState } from "react";
import Cale from "~/my-app/Cale/index";
import Board from "~/my-app/Board/Board";
import "~/my-app/index.css";

const Main = () => {
  const now = new Date(); //現在
  const [date, setDate] = useState({
    year: now.getFullYear(), //setDate({...date,year:1})
    month: now.getMonth() + 1,
  });

  /*let pFlag = 0;

  const handleClick = () => {
    console.log(pFlag);
    pFlag = 1;
    const a = document.getElementById("content")!;
    a.style.display = "flex";
  };*/
  const handleClick = () => {
    console.log("click");
  };

  const preClick = () => {
    setDate({ ...date, month: (date.month -= 1) });
    if (date.month < 1) {
      setDate({ ...date, month: (date.month = 12) });
      setDate({ ...date, year: (date.year -= 1) });
    }
    console.log("-");
    console.log(date.month);
  };
  const nextClick = () => {
    setDate({ ...date, month: (date.month += 1) });
    if (date.month > 12) {
      setDate({ ...date, month: (date.month = 1) });
      setDate({ ...date, year: (date.year += 1) });
    }
    console.log("+");
    console.log(date.month);
  };
  return (
    <div className="calendar">
      <div className="game-board">
        <div className="cale">
          <Cale
            pClick={preClick}
            y={date.year}
            m={date.month}
            nClick={nextClick}
          />
        </div>
        <Board
          date={date}
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
          //onClick={handleClick}
        />
      </div>
    </div>
  );
};
//<NewPopOver popFlag={pFlag} />

export default Main;
