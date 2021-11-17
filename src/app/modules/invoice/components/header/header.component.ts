import { Component, Input, OnInit } from '@angular/core';
import { Invoice } from 'src/app/data/schema/invoice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() invoice!: Invoice;
  
  constructor() {}

  ngOnInit(): void {}
}
