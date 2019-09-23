import * as fromOutages from './outage-reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    outages: fromOutages.State;
}
  
export const reducers: ActionReducerMap<any> = {
    outages: fromOutages.reducer
};
