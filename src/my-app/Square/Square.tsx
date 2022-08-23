import Form from "~/my-app/PopOver/popForm";

type SquareState = number | null;

export type SquareProps = {
  date: {
    year: number; //setDate({...date,year:1})
    month: number;
  };
  value: SquareState;
  //onClick: () => void;
  today: number | null;
  //schedule: string | null;
};

const Square = (props: SquareProps) => {
  return (
    <Form
      date={props.date}
      value={props.value}
      //onClick={props.onClick}
      today={props.today}
      //schedule={props.schedule}
    />
  );
};

export default Square;
