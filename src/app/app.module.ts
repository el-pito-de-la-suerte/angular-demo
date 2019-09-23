import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './containers/app/app.component';
import { SingleOutageComponent } from './components/single-outage/single-outage.component';
import { ViewMessagesDialog } from './components/view-messages-dialog/view-messages-dialog.component';
import { NewMessageDialog } from './components/new-message-dialog/new-message-dialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromRoot from './reducers';
import * as effects from './effects/outage-effects';
import { OutageService } from './services/outage-service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule}  from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    SingleOutageComponent,
    ViewMessagesDialog,
    NewMessageDialog,
  ],
  entryComponents: [
    ViewMessagesDialog,
    NewMessageDialog
  ],
  exports: [
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,

    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([
      effects.OutageEffects
    ]),
  ],
  providers: [
    OutageService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
