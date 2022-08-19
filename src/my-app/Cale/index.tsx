import React from "react";
import ReactDOM from "react-dom";
import FC from "react";
//import { createRoot } from 'react-dom/client'
//import * as ReactDOM from 'react-dom/client';
//import "~/my-app/index.css";
import { Repeat } from "typescript-tuple";
import { useState } from "react";
import Board from "~/my-app/Board/Board";

/*type Step = {
    squares: BoardState
}*/
/*type CaleProps = {
  nextClick?:(id:string)=>void;
  preClick?:(id:string)=>void;
}*/

type SquareState = number | null;
type BoardState = Repeat<SquareState, 42>;

type CaleState = {
  readonly year: number;
  readonly month: number;
};

type CaleProps = {
  pClick: () => void;
  y: number;
  m: number;
  nClick: () => void;
};

const Cale = (props: CaleProps) => {
  return (
    <div className="calendar">
      <div className="info">
        <button onClick={props.pClick}>←</button>
        <span>{props.y}</span>
        <span>年 </span>
        <span>{props.m}</span>
        <span>月</span>
        <button onClick={props.nClick}>→</button>
        <ol></ol>
      </div>
    </div>
  );
};

// ========================================
export default Cale;
