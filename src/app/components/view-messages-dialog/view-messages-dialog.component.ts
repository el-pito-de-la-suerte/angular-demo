import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'view-messages-dialog',
    templateUrl: 'view-messages-dialog.component.html'
  })
  export class ViewMessagesDialog {
  
    constructor(
        private dialogRef: MatDialogRef<ViewMessagesDialog>,
        @Inject(MAT_DIALOG_DATA) public data: string[]
    ) {}

    onClose() {
        this.dialogRef.close();
    }
  }
  