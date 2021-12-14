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
        case "updateNotifications": {
            return produce(state, (draft) => {
                draft.notifications = action.payload.notifications;
            });
        }
        case "addUser": {
            return produce(state, (draft) => {
                draft.users = [...draft.users, action.payload.newUser];
            });
        }
        case "updateUsers": {
            return produce(state, (draft) => {
                draft.users = action.payload.users;
            });
        }

        default: {
            return { ...state };
        }

    }

}

