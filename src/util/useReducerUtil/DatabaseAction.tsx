import { State } from "../../interface/State";

export interface DatabaseAction {

    type: string,
    payload: State

}