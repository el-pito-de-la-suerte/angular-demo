import { createSelector } from '@ngrx/store';
import { State as rootState } from '../reducers/';
import { State as outageState } from '../reducers/outage-reducer';
import { Outage } from '../models';
import { isEmpty } from 'rxjs/operators';

export const getOutageState = (state: rootState) => state.outages;

export const getOpenOutages = createSelector(getOutageState, (state: outageState) => {
    return state.outages
        .map((baseItem) => new Outage(baseItem))
        .filter((item) => {
           return state.show === null ? true : item.status === state.show
        });
});
