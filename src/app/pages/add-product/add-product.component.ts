import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [MatCardModule, ReactiveFormsModule,MatInputModule,MatSelectModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  addProductForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addProductForm = this.fb.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    console.log('Form Data:', this.addProductForm.value);
  }
}
