import { propNames } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";
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

type SquareState = number | null;

export type SquareProps = {
  value: SquareState;
  onClick: () => void;
  today: number | null;
};

const Square = (props: SquareProps) => {
  const [isEditing, setisEditing] = useState();
  const [color, setColor] = useState("red");

  if (props.value === null) {
    return <a className="square">{props.value}</a>;
  } else if (props.today === 1) {
    return (
      <Popover isOpen={isEditing} placement="right">
        <PopoverTrigger>
          <button className="today" onClick={props.onClick}>
            {props.value}
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>予定の作成</PopoverHeader>
          <PopoverBody></PopoverBody>
        </PopoverContent>
      </Popover>
    );
  } else {
    return (
      <Popover
        isOpen={isEditing}
        //onOpen={setIsEditing}
        //onClose={setIsEditing}
        placement="right"
      >
        <PopoverTrigger>
          <button className="square" onClick={props.onClick}>
            {props.value}
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>予定を作成</PopoverHeader>
          <PopoverBody>
            <Input placeholder="タイトルを入力" />
            <Input placeholder="日時を入力" type="date" />
            <Input placeholder="日時を入力" type="time" />
            <a>~</a>
            <Input placeholder="日時を入力" type="time" />
            <Input placeholder="memo" />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
};

export default Square;
