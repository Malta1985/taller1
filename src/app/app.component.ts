import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: any[] = [];
  // Define la propiedad 'title'
  title: string = 'Tienda de Asados';
}
