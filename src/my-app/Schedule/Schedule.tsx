import { HStack, propNames, Stack, TagLabel } from "@chakra-ui/react";
import { FC, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  BellIcon,
  TimeIcon,
  CalendarIcon,
  InfoIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";

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
import Edit from "../edit/Edit";

type scheduleData = {
  title: string;
  year: number;
  month: number;
  day: number;
  startTime: string;
  endTime: string;
  memo: string;
};

type ScheProps = {
  // title: string | undefined;
  // date: string | undefined;
  // startTime: string | undefined;
  // endTime: string | undefined;
  // memo: string | undefined;
  data: (scheduleData | null | undefined)[];
  del: () => void;
  value: number;
  year: number;
  month: number;
  delKey: boolean;
};
const Schedule = (props: ScheProps) => {
  //const [flag,setFlag]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const titles: string[] = [];
  const regexp = /(\d{4})-(\d{2})-(\d{2})/;
  const dateVal: number[] = [];

  /* if (props.data[props.value]?.date !== undefined) {
    const dateStr = props.data[props.value]?.date?.match(regexp);
    if (dateStr !== null) {
      if (dateStr !== undefined) {
        for (let i = 0; i < dateStr?.length; i++) {
          dateVal[i] = parseInt(dateStr[i]);
          //console.log(dateVal[i]);
        }
      }
    }
  }
*/
  const closePop = () => {
    onClose;
  };

  const stopProp = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  //if (props.delKey === false) {
  if (props.data.length === 0) {
    return null;
  }

  if (props.data.length === 1) {
    return (
      <div onClick={stopProp}>
        <Popover placement="right" isOpen={isOpen} onClose={onClose}>
          <PopoverTrigger>
            <button className="title" onClick={onOpen}>
              {props.data[0]?.title}
            </button>
          </PopoverTrigger>
          <PopoverContent w="500px">
            <PopoverArrow />
            <PopoverCloseButton onClick={onClose} />
            <PopoverHeader textAlign="left" color="black">
              &nbsp;&nbsp;予定の詳細
              <IconButton
                icon={<DeleteIcon />}
                //onClick={(props.del, onClose)}
                onClick={props.del}
                aria-label={"delete"}
                variant="unstyled"
                fontSize="15px"
              />
              <Edit
                data={props.data[0]}
                value={props.value}
                year={props.year}
                month={props.month}
              />
            </PopoverHeader>
            <PopoverBody className="scheText">
              <Stack spacing="1">
                <HStack>
                  <BellIcon />
                  <Box>{props.data[0]?.title}</Box>
                </HStack>
                <HStack>
                  <CalendarIcon />
                  <Box>{props.data[0]?.year}</Box>
                  <div>-</div>
                  <Box>{props.data[0]?.month}</Box>
                  <div>-</div>
                  <Box>{props.data[0]?.day}</Box>
                </HStack>
                <HStack>
                  <TimeIcon />
                  <Box>{props.data[0]?.startTime}</Box>
                  <div>~</div>
                  <Box>{props.data[0]?.endTime}</Box>
                </HStack>
                <HStack>
                  <InfoIcon />
                  <Box>{props.data[0]?.memo}</Box>
                </HStack>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    );
  }
  if (props.data.length == 2) {
    console.log("2ko");
    return (
      <div onClick={stopProp}>
        <Popover placement="right" isOpen={isOpen} onClose={onClose}>
          <PopoverTrigger>
            <button className="title" onClick={onOpen}>
              {props.data[1]?.title}
            </button>
          </PopoverTrigger>
          <PopoverContent w="500px">
            <PopoverArrow />
            <PopoverCloseButton onClick={onClose} />
            <PopoverHeader textAlign="left" color="black">
              &nbsp;&nbsp;予定の詳細
              <IconButton
                icon={<DeleteIcon />}
                //onClick={(props.del, onClose)}
                onClick={props.del}
                aria-label={"delete"}
                variant="unstyled"
                fontSize="15px"
              />
              <Edit
                data={props.data[0]}
                value={props.value}
                year={props.year}
                month={props.month}
              />
            </PopoverHeader>
            <PopoverBody className="scheText">
              <Stack spacing="1">
                <HStack>
                  <BellIcon />
                  <Box>{props.data[0]?.title}</Box>
                </HStack>
                <HStack>
                  <CalendarIcon />
                  <Box>{props.data[0]?.year}</Box>
                  <div>-</div>
                  <Box>{props.data[0]?.month}</Box>
                  <div>-</div>
                  <Box>{props.data[0]?.day}</Box>
                </HStack>
                <HStack>
                  <TimeIcon />
                  <Box>{props.data[0]?.startTime}</Box>
                  <div>~</div>
                  <Box>{props.data[0]?.endTime}</Box>
                </HStack>
                <HStack>
                  <InfoIcon />
                  <Box>{props.data[0]?.memo}</Box>
                </HStack>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover placement="right" isOpen={isOpen} onClose={onClose}>
          <PopoverTrigger>
            <button className="title2" onClick={onOpen}>
              {props.data[1]?.title}
            </button>
          </PopoverTrigger>
          <PopoverContent w="500px">
            <PopoverArrow />
            <PopoverCloseButton onClick={onClose} />
            <PopoverHeader textAlign="left" color="black">
              &nbsp;&nbsp;予定の詳細
              <IconButton
                icon={<DeleteIcon />}
                //onClick={(props.del, onClose)}
                onClick={props.del}
                aria-label={"delete"}
                variant="unstyled"
                fontSize="15px"
              />
              <Edit
                data={props.data[1]}
                value={props.value}
                year={props.year}
                month={props.month}
              />
            </PopoverHeader>
            <PopoverBody className="scheText">
              <Stack spacing="1">
                <HStack>
                  <BellIcon />
                  <Box>{props.data[1]?.title}</Box>
                </HStack>
                <HStack>
                  <CalendarIcon />
                  <Box>{props.data[1]?.year}</Box>
                  <div>-</div>
                  <Box>{props.data[1]?.month}</Box>
                  <div>-</div>
                  <Box>{props.data[1]?.day}</Box>
                </HStack>
                <HStack>
                  <TimeIcon />
                  <Box>{props.data[1]?.startTime}</Box>
                  <div>~</div>
                  <Box>{props.data[1]?.endTime}</Box>
                </HStack>
                <HStack>
                  <InfoIcon />
                  <Box>{props.data[1]?.memo}</Box>
                </HStack>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    );
  } else {
    return null;
  }
  // } else {
  //   //props.delKey = false;
  //   return null;
  // }
};
export default Schedule;
