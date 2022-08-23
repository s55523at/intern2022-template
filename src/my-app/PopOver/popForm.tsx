import { HStack, propNames, Stack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import Schedule from "~/my-app/Schedule/Schedule";

type SquareState = number | null;

type SquareProps = {
  date: {
    year: number; //setDate({...date,year:1})
    month: number;
  };
  value: SquareState;
  // onClick: () => void;
  today: number | null;
  //schedule: string | null;
  //schedule: Array<string> | null;
};

const Form = (props: SquareProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStart] = useState("");
  const [endTime, setEnd] = useState("");
  const [memo, setMemo] = useState("");

  const deleteSchedule = () => {
    setTitle("");
  };

  //const func = () => {};

  if (props.value === null) {
    return <a className="square">{props.value}</a>;
  } else {
    return (
      <Popover placement="right">
        <PopoverTrigger>
          <button
            className={props.today ? "today" : "square"}
            //onClick={props.onClick}
          >
            <div>{props.value}</div>

            <Box>
              <Schedule
                title={title}
                date={date}
                startTime={startTime}
                endTime={endTime}
                memo={memo}
                //onClick={props.onClick}
                del={deleteSchedule}
              />
            </Box>
          </button>
        </PopoverTrigger>
        <PopoverContent w="500px" className="scheText">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader textAlign="left">&nbsp;&nbsp;予定を作成</PopoverHeader>
          <PopoverBody>
            <Stack>
              <Input
                placeholder="タイトルを入力"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="日を入力"
                type="date"
                w="300px"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <HStack>
                <Input
                  placeholder="時を入力"
                  type="time"
                  w="200px"
                  value={startTime}
                  onChange={(e) => setStart(e.target.value)}
                />
                <a>~</a>
                <Input
                  placeholder="時を入力"
                  type="time"
                  w="200px"
                  value={endTime}
                  onChange={(e) => setEnd(e.target.value)}
                />
              </HStack>
              <Input
                placeholder="memo"
                h="100px"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
};

export default Form;
