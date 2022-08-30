import { useState } from "react";
import { HStack, Text } from "@chakra-ui/react";
import Cale from "~/my-app/Cale/index";
import Board from "~/my-app/Board/Board";
import "~/my-app/index.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const Main = () => {
  const now = new Date(); //現在
  const [date, setDate] = useState({
    year: now.getFullYear(), //setDate({...date,year:1})
    month: now.getMonth() + 1,
  });

  const preClick = () => {
    //前月移動
    setDate({ ...date, month: (date.month -= 1) });
    if (date.month < 1) {
      setDate({ ...date, month: (date.month = 12) });
      setDate({ ...date, year: (date.year -= 1) });
    }
  };
  const nextClick = () => {
    //次月移動
    setDate({ ...date, month: (date.month += 1) });
    if (date.month > 12) {
      setDate({ ...date, month: (date.month = 1) });
      setDate({ ...date, year: (date.year += 1) });
    }
  };
  return (
    <div className="calendar">
      <div className="game-board">
        <HStack className="header">
          <div className="caleIcon">
            <FaRegCalendarAlt />
          </div>
          <Text className="appTitle">カレンダー</Text>
          <div className="cale">
            <Cale
              pClick={preClick}
              y={date.year}
              m={date.month}
              nClick={nextClick}
            />
          </div>
        </HStack>
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
        />
      </div>
    </div>
  );
};

export default Main;
