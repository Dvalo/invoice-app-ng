import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../schema/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(private http: HttpClient) {}

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>('http://localhost:3500/invoices');
  }

  getInvoice(id: string): Observable<Invoice> {
    return this.http.get<Invoice>(`http://localhost:3500/invoices/${id}`);
  }

  createInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>('http://localhost:3500/invoices', invoice);
  }
}
