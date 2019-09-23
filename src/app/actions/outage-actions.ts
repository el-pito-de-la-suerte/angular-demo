import { createAction, props } from '@ngrx/store';
import { OutageInterface, OutageStatus } from '../models';

export const load = createAction('[Outage] Load');
export const loaded = createAction('[Outage] Loaded', props<{outages: OutageInterface[]}>());
export const addOutage = createAction('[Outage] Add Outage', props<{message: string}>());
export const addMessage = createAction('[Outage] Add Message', props<{outageId: number, message: string}>());
export const removeOutage = createAction('[Outage] Remove Outage', props<{outageId: number}>());
export const closeOutage = createAction('[Outage] Close Outage', props<{outageId: number}>());
export const setFilter = createAction('[Outage] Set Filter', props<{status: OutageStatus}>());
