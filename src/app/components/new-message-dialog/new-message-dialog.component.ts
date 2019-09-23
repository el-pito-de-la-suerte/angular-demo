import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import * as actions from '../../actions/outage-actions';
import * as fromRoot from '../../reducers';


@Component({
    selector: 'new-message-dialog',
    templateUrl: 'new-message-dialog.component.html',
    styleUrls: ['./new-message-dialog.component.scss']

  })
  export class NewMessageDialog {
    message = '';
    closeOutage = false;

    constructor(
      private dialogRef: MatDialogRef<NewMessageDialog>,
      private store$: Store<fromRoot.State>,
      @Inject(MAT_DIALOG_DATA) public outageId: number
    ) {}

    // Events
    onAddMessage() {
      this.store$.dispatch(actions.addMessage({outageId: this.outageId,  message: this.message}));
      if (this.closeOutage) {
        this.store$.dispatch(actions.closeOutage({outageId: this.outageId}));
      }
      this.dialogRef.close();

    }
    onAddOutage() {
      this.store$.dispatch(actions.addOutage({message: this.message}));
      this.dialogRef.close();
    }
    onCancel() {
      this.dialogRef.close();
    }
  }
  