import React from "react";
import { Table } from "react-bootstrap";
import { UseStateContext } from "../../util/useReducerUtil/UseStateContext";

export const MainPageDatabaseDisplayPanel = () => {

    const { state } = UseStateContext();

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
                    {state.users.map((eachUser) => {
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
                    })}
                </tbody>
            </Table>

        </>

    );


}