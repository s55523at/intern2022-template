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
import { CheckIcon, DeleteIcon, CloseIcon } from "@chakra-ui/icons";
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
  title: string | undefined;
  year: number;
  month: number;
  day: number;
  startTime: string | undefined;
  endTime: string | undefined;
  memo: string | undefined;
};
type date = {
  year: number;
  month: number;
  day: number;
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
  delData: (delDate: date) => void;
  editData: (newData: scheduleData) => void;
  squareNum: number;
  zure: number;
};

const Square = (props: SquareProps) => {
  const y = props.date.year.toString();
  const d = props.squareNum - props.zure;
  const defoDate: string = y.concat(
    "-",
    props.date.month.toString().padStart(2, "0"),
    "-",
    d.toString().padStart(2, "0")
  );
  //console.log(defoDate);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(defoDate);
  const [startTime, setStart] = useState("");
  const [endTime, setEnd] = useState("");
  const [memo, setMemo] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const dataBase: (newData | null)[] = [];
  //const [dataBase, setDataBase] = useState<newData[]>([]);
  const regexp = /(\d{4})-(\d{2})-(\d{2})/;
  const dateVal: number[] = [];
  //let delKey = false;

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
    setDate(defoDate);
    setStart("");
    setEnd("");
    setMemo("");
    onClose;
  };
  const del = () => {
    props.delData({
      year: props.date.year,
      month: props.date.month,
      day: props.squareNum - props.zure,
    });
    console.log("del");
    /*for (let i = 0; i < props.data.length; i++) {
      if (
        props.date.year === props.data[i]?.year &&
        props.date.month === props.data[i]?.month &&
        props.value === props.data[i]?.day
      ) {
        console.log(props.data);
        delete props.data[i];
        console.log(props.data);
      }
    }*/
  };

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
            <div className="dateContainer">{props.value}</div>
            <Box>
              <Schedule
                data={found}
                del={del}
                value={props.value}
                year={props.date.year}
                month={props.date.month}
                editData={props.editData}
              />
            </Box>
          </button>
        </PopoverTrigger>
        <PopoverContent w="500px">
          <PopoverArrow />
          <PopoverHeader textAlign="left">
            <HStack>
              <Box fontSize="15px">
                &nbsp;&nbsp;予定を作成&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              </Box>
              <IconButton
                icon={<CheckIcon />}
                onClick={save}
                aria-label={"save"}
                variant="unstyled"
                fontSize="15px"
              />
              <IconButton
                icon={<CloseIcon />}
                onClick={onClose}
                aria-label={"close"}
                variant="unstyled"
                fontSize="15px"
              />
            </HStack>
          </PopoverHeader>
          <PopoverBody>
            <Stack spacing="3">
              <Input
                placeholder="タイトルを入力"
                //value={props.data?.title}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
