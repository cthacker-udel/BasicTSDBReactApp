import { Col, Container, Row } from "react-bootstrap";
import { NotificationPanel } from "./Panels/NotificationPanel";
import { StateContext } from "../util/Context/StateContext";
import { DispatchContext } from "../util/Context/DispatchContext";
import { useReducer } from "react";
import { DatabaseReducerLogic } from "../util/useReducerUtil/DatabaseReducerLogic";
import { InitialState } from "../assets/InitialState";
import { DatabaseNavbar } from "./Navbar/DatabaseNavbar";
import { Routes, Route } from "react-router-dom";
import { MainPanel } from "./Panels/MainPanel";
import { InsertDBPanel } from "./Panels/InsertDBPanel";

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
                    <Route path="/query-db">
                        {/* Load up page to query db */}
                    </Route>
                    <Route path="/remove-db">
                        {/* Load up page to remove db*/}
                    </Route>
                    <Route path="/insert-db" element={<InsertDBPanel />}>
                        {/*Load up page to insert into db*/}
                    </Route>
                    <Route path="*" element={<MainPanel />} />
                </Routes>
            </StateContext.Provider>
        </DispatchContext.Provider>
    );

};
