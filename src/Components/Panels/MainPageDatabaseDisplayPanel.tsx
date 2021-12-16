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

    console.log("state = ", state);

    useEffect(() => {
        try{
            fetch("http://localhost:5000/query-all")
            .then((response) => {
                let jsonResult: User[] = [];
                response.text().then(result => {
                    const ResponseResult: ResponseInterface[] = JSON.parse(result);

                    const idSet = new Set(ResponseResult.map(eachResponse => eachResponse._id));
                    const filteredResponse: ResponseInterface[] = [];
                    const idSetValuesArray = Array.from(idSet.values());
                    for (const eachId of idSetValuesArray) {
                        const result = ResponseResult.find((eachResponse) => eachResponse._id.toString() === eachId.toString());
                        if (result !== undefined) {
                            filteredResponse.push(result);
                        }
                    }
                    jsonResult = filteredResponse.map((eachResponse) => ({
                        firstname: eachResponse.First,
                        lastname: eachResponse.Last,
                        dob: eachResponse.DOB,
                        status: eachResponse.Status,
                    }));
                    dispatch({type: "updateUsers", payload: { ...state, users: jsonResult }});
                });
            })
            .catch(err => {
                console.log(err);
            });
        } catch (err) {
            console.log("err = ", err);
        }
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
