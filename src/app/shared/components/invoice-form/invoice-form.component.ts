import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm!: FormGroup;
  paymentTermsProps = {
    options: [
      { label: 'Net 1 Day', value: 1 },
      { label: 'Net 7 Days', value: 7 },
      { label: 'Net 14 Days', value: 14 },
      { label: 'Net 30 Days', value: 30 },
    ],
  };

  constructor(private formBuilder: FormBuilder) {
    this.createInvoiceForm();
  }

  ngOnInit(): void {}

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
    console.log('Your form data : ', this.invoiceForm.value);
  }
}
