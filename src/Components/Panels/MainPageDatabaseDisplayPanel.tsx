import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { UseStateContext } from "../../util/useReducerUtil/UseStateContext";
import { User } from "../../interface/User";
import { UseDispatchContext } from "../../util/useReducerUtil/UseDispatchContext";
import { ObjectId } from "mongodb";

interface ResponseInterface{

    _id: ObjectId,
    First: string,
    Last: string,
    DOB: string,
    Status: string

};

export const MainPageDatabaseDisplayPanel = () => {

    const { state } = UseStateContext();
    const { dispatch } = UseDispatchContext();

    useEffect(() => {

        fetch("http://localhost:5000/query-all")
        .then((response) => {
            let jsonResult: User[] = [];
            let ids: ObjectId[] = [];
            response.text().then(result => {
                const ResponseResult: ResponseInterface[] = JSON.parse(result);
                jsonResult = JSON.parse(result).map((eachUser: { _id: ObjectId, First: string, Last: string, DOB: string, Status: string }) => ({
                    firstname: eachUser.First,
                    lastname: eachUser.Last,
                    dob: eachUser.DOB,
                    status: eachUser.Status
                }));
                ids = JSON.parse(result).map((eachUser: { _id: ObjectId, First: string, Last: string, DOB: string, Status: string }) => eachUser._id);
                const setIds = new Set(ids.map(eachId => eachId.toString()));
                dispatch({type: "updateUsers", payload: { ...state, users: jsonResult }});
            });
        });

    },[]);

    return(

        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {state.users.map((eachUser) =>
                        <tr>
                            <td>
                                {eachUser.firstname}
                            </td>
                            <td>
                                {eachUser.lastname}
                            </td>
                            <td>
                                {eachUser.dob}
                            </td>
                            <td>
                                {eachUser.status}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

        </>

    );
};
