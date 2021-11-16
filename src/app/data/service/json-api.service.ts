import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import dummy from './json/dummy.json';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JsonApiService {

  constructor(private router: Router) {}

  get(id?: string): Observable<any> {
    switch (id) {
      case '/invoices':
        return of(dummy.invoices);
      default:
        const invoice = dummy.invoices.find(
          (invoice) => invoice.id === id?.toLocaleUpperCase()
        );
        if (!invoice) { return this.handleError() }
        return of(invoice);
    }
  }

  private handleError = () => {
    this.router.navigate(['']);
    return of([]);
 }
}
