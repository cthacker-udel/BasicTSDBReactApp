import React from 'react';
import { State } from '../../interface/State';
import { DatabaseAction } from './DatabaseAction';
import produce from 'immer';

export const DatabaseReducerLogic = (state: State, action: DatabaseAction ): State => {

    switch(action.type) {

        case "toggleNotifications": {
            return produce(state, (draft) => {
                draft.toggleNotifications = action.payload.toggleNotifications;
            });
        }

        default: {
            return { ...state };
        }

    }

}

