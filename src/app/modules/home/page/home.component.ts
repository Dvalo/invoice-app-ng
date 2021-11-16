import { Component, OnInit } from '@angular/core';
import { JsonApiService } from 'src/app/data/service/json-api.service';
import { Subscription } from 'rxjs';
import { Invoice } from 'src/app/data/schema/invoice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  subscription!: Subscription;
  invoices: Invoice[] = [];

  constructor(private jsonApiService: JsonApiService) {}

  ngOnInit(): void {
    this.jsonApiService.get().subscribe((data) => {
      this.invoices = data;
    });
  }
}
