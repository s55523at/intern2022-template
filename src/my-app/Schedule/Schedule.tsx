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

type scheduleData = {
  title: string;
  date: string;
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
  data: scheduleData | null;
  del: () => void;
  value: number;
  year: number;
  month: number;
};
const Schedule = (props: ScheProps) => {
  //const [flag,setFlag]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const titles: string[] = [];
  const regexp = /(\d{4})-(\d{2})-(\d{2})/;
  const dateVal: number[] = [];
  if (props.data?.date !== undefined) {
    const dateStr = props.data?.date?.match(regexp);
    if (dateStr !== null) {
      for (let i = 0; i < dateStr?.length; i++) {
        dateVal[i] = parseInt(dateStr[i]);
        //console.log(dateVal[i]);
      }
    }
  }

  const closePop = () => {
    onClose;
  };

  const stopProp = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  // if (
  //   props.year === dateVal[1] &&
  //   props.month === dateVal[2] &&
  //   props.value === dateVal[3]
  // ) {
  return (
    <div onClick={stopProp}>
      <Popover placement="left" isOpen={isOpen}>
        <button className="title" onClick={onOpen}>
          {props.data?.title}
        </button>
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
          </PopoverHeader>
          <PopoverBody className="scheText">
            <Stack spacing="1">
              <HStack>
                <BellIcon />
                <Box>{props.data?.title}</Box>
              </HStack>
              <HStack>
                <CalendarIcon />
                <Box>{props.data?.date}</Box>
              </HStack>
              <HStack>
                <TimeIcon />
                <Box>{props.data?.startTime}</Box>
                <div>~</div>
                <Box>{props.data?.endTime}</Box>
              </HStack>
              <HStack>
                <InfoIcon />
                <Box>{props.data?.memo}</Box>
              </HStack>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
  //}
};
export default Schedule;
