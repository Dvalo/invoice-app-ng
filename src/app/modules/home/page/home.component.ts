import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JsonApiService } from 'src/app/data/service/json-api.service';
import { Invoice } from 'src/app/data/schema/invoice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  invoices: Invoice[] = [];

  constructor(
    private jsonApiService: JsonApiService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.jsonApiService.get('/invoices').subscribe((data) => {
      this.invoices = data;
    });
    this.titleService.setTitle('Invoice App');
  }
}
