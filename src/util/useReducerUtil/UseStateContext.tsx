import React from 'react';
import { StateContext } from '../Context/StateContext';
import { State } from '../../interface/State';


export const UseStateContext = (): { state: State } => {

    const context = React.useContext(StateContext);

    if (context === undefined) {
        throw new Error("Unable to get state context");
    }
    return context;

}