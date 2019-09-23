import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule}  from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SingleOutageComponent } from 'src/app/components/single-outage/single-outage.component';
import { StoreModule } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as effects from '../../effects/outage-effects';
import { EffectsModule } from '@ngrx/effects';
import { OutageService } from 'src/app/services/outage-service';
import { isObservable } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SingleOutageComponent,
      ],
      imports: [
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
        OutageService
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    console.log(app);
    expect(app).toBeTruthy();
  });

  it(`should have a Store Observable'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(isObservable(app.store$)).toBeTruthy();
  });
});
