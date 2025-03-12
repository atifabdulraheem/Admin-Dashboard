import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  brand: string;
}

const PRODUCT_DATA: Product[] = [
  { id: 1, name: 'Laptop', price: 75000, category: 'Electronics', brand: 'Dell' },
  { id: 2, name: 'Smartphone', price: 50000, category: 'Electronics', brand: 'Samsung' },
  { id: 3, name: 'Tablet', price: 30000, category: 'Electronics', brand: 'Apple' },
  { id: 4, name: 'Headphones', price: 5000, category: 'Accessories', brand: 'Sony' },
  { id: 5, name: 'Smartwatch', price: 15000, category: 'Wearable', brand: 'Garmin' },
  { id: 6, name: 'Gaming Console', price: 40000, category: 'Gaming', brand: 'Microsoft' },
  { id: 7, name: 'Monitor', price: 20000, category: 'Electronics', brand: 'LG' },
  { id: 8, name: 'Keyboard', price: 3000, category: 'Accessories', brand: 'Logitech' },
  { id: 9, name: 'Mouse', price: 2000, category: 'Accessories', brand: 'HP' },
  { id: 10, name: 'External Hard Drive', price: 8000, category: 'Storage', brand: 'Seagate' },
  { id: 11, name: 'Printer', price: 12000, category: 'Office', brand: 'Canon' },
];

@Component({
  selector: 'app-table',
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'category', 'brand'];
  dataSource = PRODUCT_DATA;
}
