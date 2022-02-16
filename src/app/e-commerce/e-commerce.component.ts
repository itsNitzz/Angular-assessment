import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css'],
})
export class ECommerceComponent implements OnInit {
  productsList: { name: string; price: number }[] = [];
  isListView = false;

  constructor() {}

  ngOnInit(): void {
    this.productsList = products;
  }

  onFilter(event: any) {
    if (event.value === 'high') {
      this.productsList = products.sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      this.productsList = products.sort((a, b) => {
        return a.price - b.price;
      });
    }
  }

  onView(mode: string) {
    mode === 'list' ? (this.isListView = true) : (this.isListView = false);
  }
}
