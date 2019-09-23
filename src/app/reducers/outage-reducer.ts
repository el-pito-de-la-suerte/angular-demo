import { createReducer, on, Action } from '@ngrx/store';
import { OutageInterface, OutageStatus } from '../models';
import * as actions from '../actions/outage-actions';

export interface State {
    outages: OutageInterface[];
    show: OutageStatus
}
export const initialState: State = {
    outages: [],
    show: null
};

const outageReducer = createReducer(initialState,
    on(actions.load, (state) => ({ ...state } )),
    on(actions.loaded, (state, payload) =>
        ({ ...state, outages: payload.outages} )),
    on(actions.removeOutage, (state, payload) =>
        ({ ...state, outages: state.outages.filter((outage) => outage.outageId !== payload.outageId)} )),
    on(actions.addMessage, (state, payload) => {
        const outages = state.outages;
        const outage = state.outages.find((out) => out.outageId === payload.outageId);
        if (outage) {
            outage.messages.push(payload.message);
        }
        return {...state, ...outages}; 
    }),
    on(actions.closeOutage, (state, payload) => {
        const outages = state.outages;
        const outage = state.outages.find((out) => out.outageId === payload.outageId);
        if (outage) {
            outage.endDate = new Date();
        }
        return {...state, ...outages}; 
    }),
    on(actions.addOutage, (state, payload) => {
        const outages = state.outages || [];
        const higherId = outages.length === 0
            ? 0
            : Math.max(...outages.map((out) => out.outageId));
        outages.push({
            outageId: higherId + 1,
            startDate: new Date(),
            messages: [payload.message],
        })
        return {...state, ...outages};
    }),
    on(actions.setFilter, (state, payload) => ({ ...state, show:  payload.status } ))
)

export function reducer(state: State | undefined, action: Action) {
    return outageReducer(state, action);
}

 