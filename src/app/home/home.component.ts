import { Component } from '@angular/core';
import { ConsumoApiService } from '../services/consumo-api.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productos: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProductos();
  }

  loadProductos() {
    this.productos = this.productService.getProducts();
  }
}
