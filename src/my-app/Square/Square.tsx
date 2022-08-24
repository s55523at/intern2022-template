import { HStack, propNames, Stack } from "@chakra-ui/react";
import { FC, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Textarea,
} from "@chakra-ui/react";
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
type scheduleData = {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  memo: string;
};

export type SquareProps = {
  date: {
    year: number; //setDate({...date,year:1})
    month: number;
  };
  value: SquareState;
  today: number | null;
  data: scheduleData | null;
  //data: string | null;
  //setDayTitle: string | null;
  setData: (
    prev: (i: (scheduleData | null)[]) => (scheduleData | null)[]
  ) => void;
  squareNum: number;
};

const Square = (props: SquareProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStart] = useState("");
  const [endTime, setEnd] = useState("");
  const [memo, setMemo] = useState("");

  //props.setData({...props.data,props.title:(props.data.title="aa")})
  //console.log((props.data.title))

  //const next = [...prev];
  //console.log(props.data?.title);

  /*
  setTitle((title) => {
      title + "";
      return title;
    });
    */
  const deleteSchedule = () => {
    //props.setData(null);
  };

  if (props.value === null) {
    return <a className="square">{props.value}</a>;
  } else {
    return (
      <Popover placement="right">
        <PopoverTrigger>
          <button className={props.today ? "today" : "square"}>
            <div>{props.value}</div>
            <Box>
              <Schedule
                title={props.data?.title}
                date={props.data?.date}
                startTime={props.data?.startTime}
                endTime={props.data?.endTime}
                memo={props.data?.memo}
                del={deleteSchedule}
                value={props.squareNum}
              />
            </Box>
          </button>
        </PopoverTrigger>
        <PopoverContent w="500px" className="scheText">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader textAlign="left">&nbsp;&nbsp;予定を作成</PopoverHeader>
          <PopoverBody>
            <Stack spacing="3">
              <Input
                placeholder="タイトルを入力"
                value={props.data?.title}
                //onChange={(e) => props.setData:(prev:(i:scheduleData|null))=>}
                onChange={(e) => {
                  props.setData((prev) => {
                    //prevを更新する処理
                    return prev.map((schedule: string | undefined, index) => {
                      //scheduleをいじる
                      if (index === props.squareNum) {
                        //更新
                        schedule = props.data?.title;
                        return schedule;
                      }
                      return schedule;
                    });
                  });
                }}
                //onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="日を入力"
                type="date"
                w="300px"
                value={props.data?.date}
                onChange={(e) => setDate(e.target.value)}
              />
              <HStack>
                <Input
                  placeholder="時を入力"
                  type="time"
                  w="200px"
                  value={props.data?.startTime}
                  onChange={(e) => setStart(e.target.value)}
                />
                <a>~</a>
                <Input
                  placeholder="時を入力"
                  type="time"
                  w="200px"
                  value={props.data?.endTime}
                  onChange={(e) => setEnd(e.target.value)}
                />
              </HStack>
              <Textarea
                placeholder="memo"
                h="100px"
                value={props.data?.memo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
};

export default Square;
