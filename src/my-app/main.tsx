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

  const handleClick = (i: number) => {
    return;
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
  /*<Cale
        pClick={preClick()}
        y={date.year}
        m={date.month}
        nClick={nextClick()}
      />*/
  return (
    <div className="calendar">
      <div className="game-board">
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
          onClick={handleClick}
        />
      </div>
      <Cale pClick={preClick} y={date.year} m={date.month} nClick={nextClick} />
    </div>
  );
};

export default Main;
