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
  invoiceStatus: string = 'Pending';
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
      paymentDue: [
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
      return;
    }
    formValues.createdAt = new Date().toISOString();
    formValues.status = this.invoiceStatus;
    let total = 0;
    formValues.items.map((item: any) => {
      total += item.total;
    });
    formValues.total = parseFloat((total).toFixed(2));
    this.invoiceService.createInvoice(formValues).subscribe({
      next: (data) => {
        // console.log('Success ', data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  closeDrawer() {
    this.drawerService.closeDrawer();
  }

  newItem(): FormGroup {
    return this.formBuilder.group({
      name: ['Item Name', Validators.required],
      quantity: [1, [Validators.required, Validators.pattern('^[0-9]*$')]],
      price: [
        25,
        [Validators.required, Validators.pattern('[0-9]+(.[0-9]{1,2})?$')],
      ],
      total: [25.00],
    });
  }

  addItem() {
    this.items.push(this.newItem());
  }

  calculateTotal(item: any) {
    let qnt = item.get('quantity').value;
    let prc = item.get('price').value;
    item.get('total').setValue(parseFloat((qnt * prc).toFixed(2)));
  }

  removeItem(i: number) {
    this.items.removeAt(i);
  }

  get items(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }
}
