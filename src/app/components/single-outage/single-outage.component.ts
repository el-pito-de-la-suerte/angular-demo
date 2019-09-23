import { Component, Input, Inject } from '@angular/core';
import { Outage, OutageStatus } from 'src/app/models';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { ViewMessagesDialog } from '../view-messages-dialog/view-messages-dialog.component';
import { NewMessageDialog } from '../new-message-dialog/new-message-dialog.component';

import * as actions from '../../actions/outage-actions';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'single-outage',
  templateUrl: './single-outage.component.html',
  styleUrls: ['./single-outage.component.scss']
})
export class SingleOutageComponent {

  @Input() outage: Outage;

  // expose the OutageStatus enum in this component's template
  outageStatus = OutageStatus;

  constructor(
    private store$: Store<fromRoot.State>,
    private dialog: MatDialog
  ) {
  }

  // Events
  onRemoveOutage() {
    this.store$.dispatch(actions.removeOutage({outageId: this.outage.outageId}));
  }
  onViewMessages() {
    this.dialog.open(ViewMessagesDialog, {
      width: '450px',
      data: this.outage.messages
    });
  }
  onAddMessage() {
    this.dialog.open(NewMessageDialog, {
      width: '450px',
      data: this.outage.outageId
    });
  }
}
