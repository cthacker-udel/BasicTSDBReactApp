import { Col, Container, Row } from "react-bootstrap";
import { NotificationPanel } from "./Panels/NotificationPanel";
import { StateContext } from "../util/Context/StateContext";
import { DispatchContext } from "../util/Context/DispatchContext";
import { useEffect, useReducer } from "react";
import { DatabaseReducerLogic } from "../util/useReducerUtil/DatabaseReducerLogic";
import { InitialState } from "../assets/InitialState";
import { DatabaseNavbar } from "./Navbar/DatabaseNavbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPanel } from "./Panels/MainPanel";
import { InsertDBPanel } from "./Panels/InsertDBPanel";
import { QueryDBPanel } from "./Panels/QueryDBPanel";

export const MainPage = () => {

    const [state, dispatch] = useReducer(DatabaseReducerLogic, InitialState);

    const {
        notifications
    } = state;

    const dispatchValue = { dispatch };
    const stateValue = { state };

    return(
        <DispatchContext.Provider value={dispatchValue}>
            <StateContext.Provider value={stateValue}>
                <Routes>
                    <Route path="/load-db">
                        {/* Load db component page */}
                    </Route>
                    <Route path="/query-db" element={
                        <DispatchContext.Provider value={dispatchValue}>
                        <StateContext.Provider value={stateValue}>
                            <QueryDBPanel />
                        </StateContext.Provider>
                        </DispatchContext.Provider>
                    }>
                    </Route>
                    <Route path="/remove-db">
                        {/* Load up page to remove db*/}
                    </Route>
                    <Route path="/insert-db" element={
                        <DispatchContext.Provider value={dispatchValue}>
                            <StateContext.Provider value={stateValue}>
                                <InsertDBPanel />
                            </StateContext.Provider>
                        </DispatchContext.Provider>
                    }>
                        {/*Load up page to insert into db*/}
                    </Route>
                    <Route path="*" element={
                        <DispatchContext.Provider value={dispatchValue}>
                            <StateContext.Provider value={stateValue}>
                                <MainPanel />
                            </StateContext.Provider>
                        </DispatchContext.Provider>
                    } />
                    <Route path="/" element={<Navigate to="/mainpage" />} />
                </Routes>
            </StateContext.Provider>
        </DispatchContext.Provider>
    );

};
