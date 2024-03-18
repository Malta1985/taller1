// product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productos: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productos = this.productService.getProducts();
  }
}
