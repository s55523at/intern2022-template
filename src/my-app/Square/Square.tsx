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
  useDisclosure,
} from "@chakra-ui/react";
import Schedule from "~/my-app/Schedule/Schedule";

type SquareState = number | null;
type scheduleData = {
  title: string;
  year: number;
  month: number;
  day: number;
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
  data: (scheduleData | null)[];
  setData: (newData: scheduleData) => void;
  squareNum: number;
  zure: number;
};

const Square = (props: SquareProps) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStart] = useState("");
  const [endTime, setEnd] = useState("");
  const [memo, setMemo] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const dataBase: (newData | null)[] = [];
  //const [dataBase, setDataBase] = useState<newData[]>([]);
  const regexp = /(\d{4})-(\d{2})-(\d{2})/;
  const dateVal: number[] = [];
  let delKey = false;

  // const deleteSchedule = () => {
  //   console.log("delete");
  //   props.setData({
  //     title: "",
  //     date: "",
  //     startTime: "",
  //     endTime: "",
  //     memo: "",
  //   });
  // };

  const save = () => {
    const dateStr = date.match(regexp);
    if (dateStr !== null) {
      if (dateStr !== undefined) {
        for (let i = 0; i < dateStr?.length; i++) {
          dateVal[i] = parseInt(dateStr[i]);
          console.log(dateVal[i]);
        }
      }
    }
    props.setData({
      title: title,
      year: dateVal[1],
      month: dateVal[2],
      day: dateVal[3],
      startTime: startTime,
      endTime: endTime,
      memo: memo,
    });
    setTitle("");
    setDate("");
    setStart("");
    setEnd("");
    setMemo("");
    onClose;
  };
  const del = () => {
    delKey = true;
  };
  const sendData: scheduleData | null = props.data[props.squareNum];

  // const found = props.data.find(
  //   (element) =>
  //     props.date.year === element?.year &&
  //     props.date.month === element.month &&
  //     props.squareNum === element.day + props.zure
  // );
  //console.log(found);
  const found = props.data.filter(
    (element) =>
      props.date.year === element?.year &&
      props.date.month === element.month &&
      props.squareNum === element.day + props.zure
  );

  if (props.value === null) {
    return <a className="square">{props.value}</a>;
  } else {
    return (
      <Popover placement="right" isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <button className={props.today ? "today" : "square"} onClick={onOpen}>
            <div>{props.value}</div>
            <Box>
              <Schedule
                data={found}
                del={del}
                value={props.value}
                year={props.date.year}
                month={props.date.month}
                delKey={delKey}
              />
            </Box>
          </button>
        </PopoverTrigger>
        <PopoverContent w="500px">
          <PopoverArrow />
          <PopoverCloseButton onClick={onClose} />
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
              />
              <HStack>
                <Input
                  placeholder="時を入力"
                  type="time"
                  w="200px"
                  value={startTime}
                  onChange={(e) => setStart(e.target.value)}
                  //value={props.data?.startTime}
                />
                <a>~</a>
                <Input
                  placeholder="時を入力"
                  type="time"
                  w="200px"
                  value={endTime}
                  onChange={(e) => setEnd(e.target.value)}
                  //value={props.data?.endTime}
                />
              </HStack>
              <Textarea
                placeholder="memo"
                h="100px"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                //value={props.data?.memo}
              />
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
};

export default Square;
