type SquareState = number | null;

export type SquareProps = {
  value: SquareState;
  onClick: () => void;
};
const Square = (props: SquareProps) => (
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>
);

export default Square;
