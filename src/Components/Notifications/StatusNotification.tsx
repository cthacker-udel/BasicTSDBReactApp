import React from 'react';
import { Toast } from 'react-bootstrap';
import { UseDispatchContext } from '../../util/useReducerUtil/UseDispatchContext';
import { UseStateContext } from '../../util/useReducerUtil/UseStateContext';


export const StatusNotification = (props: {header: string, body: string}) => {

    const { dispatch } = UseDispatchContext();
    const { state } = UseStateContext();

    return(

        <Toast onClose={() => {
            const newNotifications = state.notifications
                .filter((eachNotification) => eachNotification.body !== props.body);
            dispatch({type: "updateNotifications", payload: { ...state, notifications: newNotifications }});
        }}>
            <Toast.Header>
                {props.header}
            </Toast.Header>
            <Toast.Body>
                {props.body}
            </Toast.Body>
        </Toast>

    );

}