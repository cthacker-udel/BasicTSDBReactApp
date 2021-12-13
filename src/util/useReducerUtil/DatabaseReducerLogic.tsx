import React from 'react';
import { State } from '../../interface/State';
import { DatabaseAction } from './DatabaseAction';
import produce from 'immer';

export const DatabaseReducerLogic = (state: State, action: DatabaseAction ): State => {

    switch(action.type) {

        default: {
            return { ...state };
        }

    }

}

