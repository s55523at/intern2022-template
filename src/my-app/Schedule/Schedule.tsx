import { HStack, propNames, Stack, TagLabel, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
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
  CloseIcon,
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
  title: string | undefined;
  year: number;
  month: number;
  day: number;
  startTime: string | undefined;
  endTime: string | undefined;
  memo: string | undefined;
};

type ScheProps = {
  // title: string | undefined;
  // date: string | undefined;
  // startTime: string | undefined;
  // endTime: string | undefined;
  // memo: string | undefined;
  data: (scheduleData | null | undefined)[];
  // del: (
  //   y: number | undefined,
  //   m: number | undefined,
  //   d: number | undefined
  // ) => void;
  del: () => void;
  value: number;
  year: number;
  month: number;
  editData: (newData: scheduleData) => void;
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

  const allData = props.data.map(function (data, index) {
    return [
      <div className="title" onClick={onOpen} key={index}>
        <Text key={index}>{data?.title}</Text>
      </div>,
    ];
  });
  //if (props.delKey === false) {
  if (props.data.length === 0) {
    return null;
  } else {
    return (
      <div onClick={stopProp}>
        <Popover placement="right" isOpen={isOpen} onClose={onClose}>
          <PopoverTrigger>
            <div className="scheduleContainer">{[allData]}</div>
          </PopoverTrigger>
          <PopoverContent w="500px">
            <PopoverArrow />
            <PopoverHeader textAlign="left" color="black">
              <HStack>
                <Box>
                  &nbsp;&nbsp;予定の詳細&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </Box>
                <IconButton
                  icon={<DeleteIcon />}
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
                  editData={props.editData}
                  del={props.del}
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
            <PopoverBody className="scheText">
              <Stack spacing="1">
                <HStack>
                  <BellIcon />
                  <Box>{props.data[0]?.title}</Box>
                </HStack>
                <HStack>
                  <CalendarIcon />
                  <Box>{props.data[0]?.year}</Box>
                  <div>年</div>
                  <Box>{props.data[0]?.month}</Box>
                  <div>月</div>
                  <Box>{props.data[0]?.day}</Box>
                  <div>日</div>
                </HStack>
                <HStack>
                  <TimeIcon />
                  <Box>{props.data[0]?.startTime}</Box>
                  <div>～</div>
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
};
/*if (props.data.length === 0 || props.data === undefined) {
    console.log(props.data);
    return null;
  } else {
    props.data.map(function (data, index) {
      return [
        <div onClick={stopProp} key={index}>
          <Popover placement="right" isOpen={isOpen} onClose={onClose}>
            <PopoverTrigger>
              <div className="scheduleContainer">
                <div className="title" onClick={onOpen}>
                  <Text>{data?.title}</Text>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent w="500px">
              <PopoverArrow />
              <PopoverHeader textAlign="left" color="black">
                <HStack>
                  <Box>
                    &nbsp;&nbsp;予定の詳細&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  </Box>
                  <IconButton
                    icon={<DeleteIcon />}
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
                    editData={props.editData}
                    del={props.del}
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
              <PopoverBody className="scheText">
                <Stack spacing="1">
                  <HStack>
                    <BellIcon />
                    <Box>{props.data[0]?.title}</Box>
                  </HStack>
                  <HStack>
                    <CalendarIcon />
                    <Box>{props.data[0]?.year}</Box>
                    <div>年</div>
                    <Box>{props.data[0]?.month}</Box>
                    <div>月</div>
                    <Box>{props.data[0]?.day}</Box>
                    <div>日</div>
                  </HStack>
                  <HStack>
                    <TimeIcon />
                    <Box>{props.data[0]?.startTime}</Box>
                    <div>～</div>
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
        </div>,
      ];
    });
  }
};*/

export default Schedule;
