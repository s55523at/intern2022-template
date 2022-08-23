import { HStack, propNames, Stack, TagLabel } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";
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

type ScheProps = {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  memo: string;
  //onClick: () => void;
  del: () => void;
};

const Schedule = (props: ScheProps) => {
  const titles: string[] = [];
  titles.push(props.title);
  console.log(props.title);
  console.log(props.date);
  console.log(props.startTime);
  console.log(props.endTime);
  console.log(props.memo);
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <button className="title">{props.title}</button>
      </PopoverTrigger>
      <PopoverContent w="500px">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader textAlign="left" color="black">
          &nbsp;&nbsp;予定の詳細
          <DeleteIcon onClick={props.del} />
        </PopoverHeader>
        <PopoverBody className="scheText">
          <Stack>
            <HStack>
              <BellIcon />
              <Box>{titles}</Box>
            </HStack>
            <HStack>
              <CalendarIcon />
              <Box>{props.date}</Box>
            </HStack>
            <HStack>
              <TimeIcon />
              <Box>{props.startTime}</Box>
              <div>~</div>
              <Box>{props.endTime}</Box>
            </HStack>
            <HStack>
              <InfoIcon />
              <Box>{props.memo}</Box>
            </HStack>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Schedule;
