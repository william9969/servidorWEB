import { CoreSchemaRegistry } from '@angular-devkit/core/src/json/schema';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { serviceVenta } from '../services/esbservice.service';


@Component({
  selector: 'app-validar-cliente',
  templateUrl: './validar-cliente.page.html',
  styleUrls: ['./validar-cliente.page.scss'],
})
export class ValidarClientePage implements OnInit {
  private id: any
  private cedulaBuscar:string
  private nombres:string
  private direccion:string
  private correo: string
  private contrasenia: string
  private responseData: any

  constructor(private ventas: serviceVenta) { }

  ngOnInit() {
  }
  async searchPersona() {
      await new Promise(resolve=>{this.ventas.editPerson(this.cedulaBuscar).subscribe(async data=>{
        resolve(data);
        this.responseData= data;
        this.nombres= data.nombres;
        this.direccion = data.direccion;
        this.correo = data.correo
        this.contrasenia = data.contrasenia
      },error=>{
        console.log(error);
        this.cedulaBuscar = "No existe el cliente"
      });
    });
    console.log(this.responseData)
  }
}
