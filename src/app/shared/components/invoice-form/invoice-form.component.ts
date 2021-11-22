import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DrawerService } from '../../services/drawer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  isVisible!: boolean;
  invoiceForm!: FormGroup;
  subscription!: Subscription;
  paymentTermsProps = {
    options: [
      { label: 'Net 1 Day', value: 1 },
      { label: 'Net 7 Days', value: 7 },
      { label: 'Net 14 Days', value: 14 },
      { label: 'Net 30 Days', value: 30 },
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private drawerService: DrawerService
  ) {
    this.isVisible = drawerService.isToggled;
    this.createInvoiceForm();
  }

  ngOnInit(): void {
    this.drawerService.drawerToggle.subscribe(
      (value) => (this.isVisible = value)
    );
  }

  createInvoiceForm() {
    this.invoiceForm = this.formBuilder.group({
      senderAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        postCode: [''],
        country: [''],
      }),
      clientName: [''],
      clientEmail: [''],
      clientAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        postCode: [''],
        country: [''],
      }),
      invoiceDate: [''],
      paymentTerms: [''],
      description: [''],
    });
  }

  onSubmit() {
    console.log('form data : ', this.invoiceForm.value);
  }

  closeDrawer() {
    this.drawerService.closeDrawer();
  }
}
