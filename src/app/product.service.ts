import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    // Aquí se simula la obtención de productos desde un servidor o una API
    return [
      {
        id: 1,
        name: 'Carne de res',
        description: 'Deliciosa carne de res para asar',
        price: 15.99,
        imageUrl: 'assets/carne-res.jpg',
      },
      {
        id: 2,
        name: 'Pollo',
        description: 'Pollo fresco listo para asar',
        price: 10.99,
        imageUrl: 'assets/pollo.jpg',
      },
      {
        id: 3,
        name: 'Salsas BBQ',
        description: 'Variedad de salsas BBQ para acompañar tus asados',
        price: 5.99,
        imageUrl: 'assets/salsas-bbq.jpg',
      },
      // Agrega más productos según sea necesario
    ];
  }
}
