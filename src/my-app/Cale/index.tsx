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
        <button className="button" onClick={props.pClick}>
          &lt;&nbsp;
        </button>
        <span>{props.y}</span>
        <span>年 </span>
        <span>{props.m}</span>
        <span>月</span>
        <button className="button" onClick={props.nClick}>
          &nbsp;&gt;
        </button>
        <ol></ol>
      </div>
    </div>
  );
};

// ========================================
export default Cale;
