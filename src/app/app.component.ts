import { Component } from '@angular/core';

type Product = {
  name: String,
  costs: String
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'entregaAngular';
  show : boolean = true;
 

  products : Product[] = [
    { name: 'Producto 1', costs: '100' },
    { name: 'Producto 2', costs: '200' },
    { name: 'Producto 3', costs: '300' },
    { name: 'Producto 4', costs: '400' },
    { name: 'Producto 5', costs: '500' },
    { name: 'Producto 6', costs: '600' },
    { name: 'Producto 7', costs: '700' },
    { name: 'Producto 8', costs: '800' },
    { name: 'Producto 9', costs: '900' },
    { name: 'Producto 10', costs: '1000' }
  ]

  showTable(){
    this.show = !this.show; 
  }


}
