import React from 'react';
import { Toast } from 'react-bootstrap';


export const StatusNotification = (props: {header: string, body: string}) => {

    return(

        <Toast>
            <Toast.Header>
                {props.header}
            </Toast.Header>
            <Toast.Body>
                {props.body}
            </Toast.Body>
        </Toast>

    );

}