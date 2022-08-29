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
  Textarea,
} from "@chakra-ui/react";
import {
  BellIcon,
  TimeIcon,
  CalendarIcon,
  InfoIcon,
  DeleteIcon,
  CheckIcon,
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

const stopProp = (event: React.MouseEvent<HTMLDivElement>) => {
  event.stopPropagation();
};
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

type ScheProps = {
  data: scheduleData | null | undefined;
  value: number;
  year: number;
  month: number;
  // delData: (delDate: date) => void;
  del: () => void;
  editData: (newData: scheduleData) => void;
};

const Edit = (props: ScheProps) => {
  const y = props.year.toString();
  const defoDate: string = y.concat(
    "-",
    props.month.toString().padStart(2, "0"),
    "-",
    props.value.toString().padStart(2, "0")
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState(props.data?.title);
  const [date, setDate] = useState(defoDate);
  const [startTime, setStart] = useState(props.data?.startTime);
  const [endTime, setEnd] = useState(props.data?.endTime);
  const [memo, setMemo] = useState(props.data?.memo);

  const regexp = /(\d{4})-(\d{2})-(\d{2})/;
  const dateVal: number[] = [];

  const saveEdit = () => {
    const dateStr = date.match(regexp);
    if (dateStr !== null) {
      if (dateStr !== undefined) {
        for (let i = 0; i < dateStr?.length; i++) {
          dateVal[i] = parseInt(dateStr[i]);
        }
      }
    }
    props.del();
    props.editData({
      title: title,
      year: dateVal[1],
      month: dateVal[2],
      day: dateVal[3],
      startTime: startTime,
      endTime: endTime,
      memo: memo,
    });
    setTitle(title);
    setDate(defoDate);
    setStart(startTime);
    setEnd(props.data?.endTime);
    setMemo(props.data?.memo);
    onClose;
  };

  return (
    <div onClick={stopProp}>
      <Popover placement="left" isOpen={isOpen}>
        <IconButton
          icon={<EditIcon />}
          //onClick={(props.del, onClose)}
          onClick={onOpen}
          aria-label={"edit"}
          variant="unstyled"
          fontSize="15px"
        />
        <PopoverContent w="500px">
          <PopoverArrow />
          <PopoverHeader textAlign="left" color="black">
            <HStack>
              <Box>
                &nbsp;&nbsp;予定の編集&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              </Box>
              <IconButton
                icon={<CheckIcon />}
                onClick={saveEdit}
                aria-label={"saveEdit"}
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
          <PopoverBody className="scheText">
            <Stack spacing="3">
              <Input
                placeholder="タイトルを入力"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="日を入力"
                type="date"
                w="300px"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <HStack>
                <Input
                  placeholder="時を入力"
                  type="time"
                  w="200px"
                  value={startTime}
                  onChange={(e) => setStart(e.target.value)}
                />
                <a>~</a>
                <Input
                  placeholder="時を入力"
                  type="time"
                  w="200px"
                  value={endTime}
                  onChange={(e) => setEnd(e.target.value)}
                />
              </HStack>
              <Textarea
                placeholder="memo"
                h="100px"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Edit;
