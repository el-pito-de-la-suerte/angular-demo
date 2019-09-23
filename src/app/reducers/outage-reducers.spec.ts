import { TestBed, async } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { reducer, State }  from './outage-reducer';
import * as actions from '../actions/outage-actions';

describe('OutageReducers', () => {
    let freshState: State
    beforeEach(async(() => {
        freshState = {
            show: null,
            outages: []
        };
    }));freshState
    it('should add new outage', () => {
        const state = reducer(freshState, actions.addOutage({message: 'test 1'}));
        expect(state.outages.length).toEqual(1);
        expect(state.outages[0].messages.length).toEqual(1);
        expect(state.outages[0].messages[0]).toEqual('test 1');
        expect(state.outages[0].endDate).toBeFalsy();
    });
    it('should add new message', () => {
        let state = reducer(freshState, actions.addOutage({message: 'first message'}));
        state = reducer(state, actions.addMessage({outageId: 1, message: 'second message'}));
        expect(state.outages.length).toEqual(1);
        expect(state.outages[0].messages.length).toEqual(2);
        expect(state.outages[0].messages[1]).toEqual('second message');
    });
    it('should close an outage', () => {
        let state = reducer(freshState, actions.addOutage({message: 'test'}));
        state = reducer(state, actions.closeOutage({outageId: 1}));
        expect(state.outages.length).toEqual(1);
        expect(state.outages[0].endDate).toBeTruthy();
    });
});
