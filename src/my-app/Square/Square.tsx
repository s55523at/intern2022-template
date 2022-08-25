import { HStack, propNames, Stack } from "@chakra-ui/react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
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
  // setData: (
  //   prev: (i: (scheduleData | null)[]) => (scheduleData | null)[]
  // ) => void;
  setData: (newData: scheduleData) => void;
  //setData: React.Dispatch<React.SetStateAction<(scheduleData | null)[]>>;
  squareNum: number;
};

const Square = (props: SquareProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStart] = useState("");
  const [endTime, setEnd] = useState("");
  const [memo, setMemo] = useState("");
  const nullData: scheduleData = {
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    memo: "",
  };

  const deleteSchedule = () => {
    console.log("delete");
    props.setData({
      title: "",
      date: "",
      startTime: "",
      endTime: "",
      memo: "",
    });
  };

  const save = () => {
    props.setData({
      title: title,
      date: date,
      startTime: startTime,
      endTime: endTime,
      memo: memo,
    });
    setTitle("");
    setDate("");
    setStart("");
    setEnd("");
    setMemo("");
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
                data={props.data}
                // title={title}
                // date={date}
                // startTime={startTime}
                // endTime={endTime}
                // memo={memo}
                del={deleteSchedule}
                value={props.value}
                year={props.date.year}
                month={props.date.month}
              />
            </Box>
          </button>
        </PopoverTrigger>
        <PopoverContent w="500px">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader textAlign="left">
            &nbsp;&nbsp;予定を作成
            <IconButton
              icon={<CheckIcon />}
              onClick={save}
              aria-label={"save"}
              variant="unstyled"
              fontSize="15px"
            />
          </PopoverHeader>
          <PopoverBody>
            <Stack spacing="3">
              <Input
                placeholder="タイトルを入力"
                //value={props.data?.title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                /*onChange={(e) => {
                  props.setData((prev) => {
                    if (prev[props.squareNum] === undefined) {
                      console.log("データなし");
                      //tempData.splice(props.squareNum, 0, nullData); //配列に追加
                      for (let i = 0; i < 42; i++) {
                        prev.push(nullData);
                      }
                    }
                    const tempData = prev;
                    //prevを更新する処理
                    console.log(props.squareNum);
                    console.log(tempData);
                    return tempData.map((schedule, index) => {
                      //scheduleをいじる
                      if (index === props.value) {
                        //prev[squareNum]を更新
                        console.log(props.value);
                        if (schedule?.title !== undefined) {
                          schedule.title = e.target.value;
                          console.log(e.target.value);
                        }
                        return schedule;
                      } else {
                        return schedule;
                      }
                    });
                  });
                }}*/
              />
              <Input
                placeholder="日を入力"
                type="date"
                w="300px"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                //value={props.data?.date}
                //defaultValue={}
                /*onChange={(e) => {
                  props.setData((prev) => {
                    const tempData = prev;
                    //prevを更新する処理
                    return tempData.map((schedule, index) => {
                      //scheduleをいじる
                      if (index === props.value) {
                        //prev[squareNum]を更新
                        console.log(props.value);
                        if (schedule?.date !== undefined) {
                          schedule.date = e.target.value;
                          console.log(e.target.value);
                        }
                        return schedule;
                      } else {
                        return schedule;
                      }
                    });
                  });
                }}*/
              />
              <HStack>
                <Input
                  placeholder="時を入力"
                  type="time"
                  w="200px"
                  value={startTime}
                  onChange={(e) => setStart(e.target.value)}
                  //value={props.data?.startTime}
                  /*onChange={(e) => {
                    props.setData((prev) => {
                      const tempData = prev;
                      //prevを更新する処理
                      return tempData.map((schedule, index) => {
                        //scheduleをいじる
                        if (index === props.value) {
                          //prev[squareNum]を更新
                          console.log(props.value);
                          if (schedule?.startTime !== undefined) {
                            schedule.startTime = e.target.value;
                            console.log(e.target.value);
                          }
                          return schedule;
                        } else {
                          return schedule;
                        }
                      });
                    });
                  }}*/
                />
                <a>~</a>
                <Input
                  placeholder="時を入力"
                  type="time"
                  w="200px"
                  value={startTime}
                  onChange={(e) => setStart(e.target.value)}
                  //value={props.data?.endTime}
                  /*onChange={(e) => {
                    props.setData((prev) => {
                      const tempData = prev;
                      //prevを更新する処理
                      return tempData.map((schedule, index) => {
                        //scheduleをいじる
                        if (index === props.value) {
                          //prev[squareNum]を更新
                          console.log(props.value);
                          if (schedule?.endTime !== undefined) {
                            schedule.endTime = e.target.value;
                            console.log(e.target.value);
                          }
                          return schedule;
                        } else {
                          return schedule;
                        }
                      });
                    });
                  }}*/
                />
              </HStack>
              <Textarea
                placeholder="memo"
                h="100px"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                //value={props.data?.memo}
                /*onChange={(e) => {
                  props.setData((prev) => {
                    const tempData = prev;
                    //prevを更新する処理
                    return tempData.map((schedule, index) => {
                      //scheduleをいじる
                      if (index === props.value) {
                        //prev[squareNum]を更新
                        console.log(props.value);
                        if (schedule?.memo !== undefined) {
                          schedule.memo = e.target.value;
                          console.log(e.target.value);
                        }
                        return schedule;
                      } else {
                        return schedule;
                      }
                    });
                  });
                }}*/
              />
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
};

export default Square;
