import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import dummy from './json/dummy.json';

@Injectable({
  providedIn: 'root',
})
export class JsonApiService {
  get(id?: string): Observable<any> {
    return of(dummy.invoices);
  }
}
