import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Repeat } from "typescript-tuple";
import Cale from "~/my-app/Cale/index";
import Board from "~/my-app/Board/Board";
import Square from "~/my-app/Square/Square";
import Main from "~/my-app/main";
//import SquareState from "~/my-app/Square/Square";
import "~/my-app/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  </React.StrictMode>
);
