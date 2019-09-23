import { Injectable } from '@angular/core';
import { OutageInterface, mockLoadData } from '../models';
import { Observable, of } from 'rxjs';

@Injectable()
export class OutageService {

  load(): Observable<OutageInterface[]> {
    return of(mockLoadData);
  }
}
