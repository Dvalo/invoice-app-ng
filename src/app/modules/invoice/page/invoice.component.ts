import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { JsonApiService } from 'src/app/data/service/json-api.service';
import { Invoice } from 'src/app/data/schema/invoice';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(
    private jsonApiService: JsonApiService,
    private router: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.jsonApiService
      .get(this.router.snapshot.paramMap.get('id')!)
      .subscribe((data) => {
        this.invoice = data;
      });
    this.titleService.setTitle(`Invoice ${this.invoice.id} | Invoice App`);
  }
}
