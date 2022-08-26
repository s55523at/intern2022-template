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

const stopProp = (event: React.MouseEvent<HTMLDivElement>) => {
  event.stopPropagation();
};
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
  data: scheduleData | null | undefined;
  value: number;
  year: number;
  month: number;
};

const Edit = (props: ScheProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <PopoverCloseButton onClick={onClose} />
          <PopoverHeader textAlign="left" color="black">
            &nbsp;&nbsp;予定の編集
          </PopoverHeader>
          <PopoverBody className="scheText">
            <Stack spacing="3">
              <Input placeholder="タイトルを入力" />
              <Input placeholder="日を入力" type="date" w="300px" />
              <HStack>
                <Input placeholder="時を入力" type="time" w="200px" />
                <a>~</a>
                <Input placeholder="時を入力" type="time" w="200px" />
              </HStack>
              <Textarea placeholder="memo" h="100px" />
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Edit;
