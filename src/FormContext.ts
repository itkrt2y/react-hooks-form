import * as React from "react";
import { State, Action } from "./store";

export const FormContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>(null);
