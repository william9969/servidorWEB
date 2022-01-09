import { Component, OnInit } from '@angular/core';
import { Persona } from '../class/request';
import { serviceVenta } from '../services/esbservice.service';
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.page.html',
  styleUrls: ['./listar-cliente.page.scss'],
})
export class ListarClientePage implements OnInit {
  private listClientes: Persona[];

  constructor( private ventas: serviceVenta ) { }

  ngOnInit() {
    this.listarClientes();
    
  }
 async listarClientes () {
  await new Promise(resolve=>{this.ventas.listPerson().subscribe(async data=>{
    resolve(data);
    this.listClientes=data;
    },error=>{
      console.log(error);
    });
  });
 }
  async eliminarCliente(cedula:any){
    await new Promise(resolve=>{this.ventas.deletePerson(cedula).subscribe(async data=>{
      resolve(data);
      console.log(data)
      },error=>{
        console.log(error);
      });
    });
  }

}
