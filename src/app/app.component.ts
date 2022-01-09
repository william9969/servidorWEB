import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Agregar Cliente', url: '/addcliente', icon: 'mail' },
   // { title: 'Editar Cliente', url: '/editarcliente', icon: 'paper-plane' },
    { title: 'Listar Cliente', url: '/listar-cliente', icon: 'heart' },
    { title: 'Buscar Cliente', url: '/validar-cliente', icon: 'archive' },
    { title: 'Listar Producto Bodega', url: '/l-prod-bodega', icon: 'trash' },
    { title: 'Listar Producto Categoria', url: '/l-prod-cat', icon: 'warning' },
   
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
