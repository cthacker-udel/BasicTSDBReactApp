import React from "react";
import { State } from "../../interface/State";

export const StateContext = React.createContext<{state: State} | undefined>(undefined);