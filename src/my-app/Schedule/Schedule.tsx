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

type ScheProps = {
  title: string | undefined;
  date: string | undefined;
  startTime: string | undefined;
  endTime: string | undefined;
  memo: string | undefined;
  del: () => void;
  value: number;
};
const Schedule = (props: ScheProps) => {
  //const [flag,setFlag]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const titles: string[] = [];
  //titles.push(props.title);
  /*console.log(props.title);
  console.log(props.date);
  console.log(props.startTime);
  console.log(props.endTime);
  console.log(props.memo);*/

  //let popFlag = false;
  //console.log(flag);

  const stopProp = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const openPop = () => {
    /*setFlag(flag=>({
      ...flag,
      flag : true
    }) */
    onOpen();
  };
  const closePop = () => {
    /*popFlag = false;
    console.log(popFlag);*/
    onClose();
  };

  //if(props.value===)

  return (
    <div onClick={stopProp}>
      <Popover placement="right" isOpen={isOpen}>
        <button className="title" onClick={openPop}>
          {props.title}
        </button>
        <PopoverContent w="500px">
          <PopoverArrow />
          <PopoverCloseButton onClick={closePop} />
          <PopoverHeader textAlign="left" color="black">
            &nbsp;&nbsp;予定の詳細
            <IconButton
              icon={<DeleteIcon />}
              onClick={(props.del, closePop)}
              aria-label={"delete"}
              variant="unstyled"
              fontSize="15px"
            />
          </PopoverHeader>
          <PopoverBody className="scheText">
            <Stack spacing="1">
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
    </div>
  );
};
export default Schedule;
