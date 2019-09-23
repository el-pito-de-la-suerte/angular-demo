import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OutageInterface, OutageStatus } from 'src/app/models';
import { Store } from '@ngrx/store';
import { getOpenOutages } from '../../selectors/outage-selectors';
import * as actions from '../../actions/outage-actions';
import * as fromRoot from '../../reducers';
import { MatDialog } from '@angular/material/dialog';
import { NewMessageDialog } from 'src/app/components/new-message-dialog/new-message-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // expose the OutageStatus enum in this component's template
  private outageStatus = OutageStatus;
  private outages$: Observable<OutageInterface[]>;

  
  constructor(
    private store$: Store<fromRoot.State>,
    private dialog: MatDialog
  ) {

  }
  ngOnInit() {
    this.store$.dispatch(actions.load());
    this.outages$ = this.store$.select(getOpenOutages);
  }

  onNewOutage() {
    this.dialog.open(NewMessageDialog, {
      width: '450px',
      data: null
    });
  }
  onFilter(status: OutageStatus) {
    this.store$.dispatch(actions.setFilter({ status: status }));
  }
}
