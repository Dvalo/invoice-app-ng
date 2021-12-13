import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DrawerService } from '../../services/drawer.service';
import { InvoiceService } from 'src/app/data/service/invoice.service';
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
    private invoiceService: InvoiceService,
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
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      clientName: ['', Validators.required],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientAddress: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      invoiceDate: [
        new Date().toISOString().substring(0, 10),
        Validators.required,
      ],
      paymentTerms: [7, Validators.required],
      description: ['', [Validators.required, Validators.minLength(4)]],
      items: this.formBuilder.array([this.newItem()]),
    });
  }

  onSubmit() {
    let formValues = this.invoiceForm.value;
    if (this.invoiceForm.invalid) {
      this.invoiceForm.markAllAsTouched();
      // return;
    }
    formValues.createdAt = new Date();
    console.log('form status : ', this.invoiceForm.valid);
    console.log('form data : ', formValues);
  }

  closeDrawer() {
    this.drawerService.closeDrawer();
  }

  newItem(): FormGroup {
    return this.formBuilder.group({
      itemName: ['Item Name', Validators.required],
      quantity: ['1', [Validators.required, Validators.pattern('^[0-9]*$')]],
      price: [
        '25',
        [Validators.required, Validators.pattern('[0-9]+(.[0-9]{1,2})?$')],
      ],
    });
  }

  addItem() {
    this.items.push(this.newItem());
  }

  removeItem(i: number) {
    this.items.removeAt(i);
  }

  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }
}
