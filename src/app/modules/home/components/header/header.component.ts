import { Component, OnInit } from '@angular/core';
import { DrawerService } from 'src/app/shared/services/drawer.service';
import { InvoiceService } from 'src/app/data/service/invoice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  invoiceCount!: number;

  constructor(
    private invoiceService: InvoiceService,
    private drawerSerivce: DrawerService
  ) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((data) => {
      this.invoiceCount = data.length;
    });
  }

  openDrawer() {
    this.drawerSerivce.openDrawer();
  }
}
