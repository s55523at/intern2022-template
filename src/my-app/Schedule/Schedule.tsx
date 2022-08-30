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
  id: number;
};

type ScheProps = {
  data: scheduleData | null;
  del: (id: number) => void;
  value: number;
  year: number;
  month: number;
  editData: (newData: scheduleData) => void;
  id: number;
};
const Schedule = (props: ScheProps) => {
  //const [flag,setFlag]=useState(false);
  // const [openKey, setOpen] = useState<boolean[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const stopProp = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const deleteEvent = () => {
    props.del(props.id);
  };

  return (
    <div onClick={stopProp}>
      <Popover placement="right" isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <div>
            <div className="title" onClick={onOpen}>
              <Text>{props.data?.title}</Text>
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
                onClick={deleteEvent}
                aria-label={"delete"}
                variant="unstyled"
                fontSize="15px"
              />
              <Edit
                data={props.data}
                value={props.value}
                year={props.year}
                month={props.month}
                editData={props.editData}
                del={props.del}
                id={props.id}
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
                <Box>{props.data?.title}</Box>
              </HStack>
              <HStack>
                <CalendarIcon />
                <Box>{props.data?.year}</Box>
                <div>年</div>
                <Box>{props.data?.month}</Box>
                <div>月</div>
                <Box>{props.data?.day}</Box>
                <div>日</div>
              </HStack>
              <HStack>
                <TimeIcon />
                <Box>{props.data?.startTime}</Box>
                <div>～</div>
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
};

export default Schedule;
