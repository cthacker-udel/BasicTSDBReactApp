import React from "react";
import { DispatchContext } from "../Context/DispatchContext";
import { DatabaseAction } from "./DatabaseAction";

export const UseDispatchContext = (): {dispatch: React.Dispatch<DatabaseAction>} => {
    const context = React.useContext(DispatchContext);
    if (context === undefined) {
        throw new Error("Unable to access dispatch context");
    }
    return context;
};
