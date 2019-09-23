import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { OutageService } from '../services/outage-service';
import { Store } from '@ngrx/store';
 
import * as fromRoot from '../reducers';
import * as actions from '../actions/outage-actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class OutageEffects {
 
  // a real effect should catch any possible exception
  loadEffects$ = createEffect(() => this.actions$.pipe(
    ofType('[Outage] Load'),
    switchMap(() => this.outageService.load()
    .pipe(
      switchMap((data) => {
        this.snackBar.open('Data loaded');
        return of(actions.loaded({outages: data}));
      })
    )))
  );

  addOutage$ = createEffect(() => this.actions$.pipe(
    ofType('[Outage] Add Outage'),
    switchMap(() => {
      this.snackBar.open('Outage added');
      return EMPTY;
    })));

  addMessage$ = createEffect(() => this.actions$.pipe(
    ofType('[Outage] Add Message'),
    switchMap(() => {
      this.snackBar.open('Message added');
      return EMPTY;
    })));

  removeOutage$ = createEffect(() => this.actions$.pipe(
    ofType('[Outage] Remove Outage'),
    switchMap(() => {
      this.snackBar.open('Outage removed');
      return EMPTY;
    })));
    
    
  closeOutage$ = createEffect(() => this.actions$.pipe(
    ofType('[Outage] Close Outage'),
    switchMap(() => {
      this.snackBar.open('Outage closed');
      return EMPTY;
    })));

  constructor(
    private store$: Store<fromRoot.State>,
    private actions$: Actions,
    private outageService: OutageService,
    private snackBar: MatSnackBar
  ) {}
}