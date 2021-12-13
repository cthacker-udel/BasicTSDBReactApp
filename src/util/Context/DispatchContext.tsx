import React from "react";
import { DatabaseAction } from "../useReducerUtil/DatabaseAction";

export const DispatchContext = React.createContext<{dispatch: React.Dispatch<DatabaseAction>} | undefined>(undefined);