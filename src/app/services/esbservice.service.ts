import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Persona } from '../class/request';

@Injectable({
  providedIn: 'root'
})
export class serviceVenta {

  constructor(private http: HttpClient ) { }

  public data:any    
  addPerson(params: Persona):any  {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };  
    const body = "cedula=" +params.cedula+ "&nombres="+ params.nombres+"&direccion="+ params.direccion+"&correo="+params.correo+"&contrasenia="+params.contrasenia
    return this.http.post(environment.WS_PATH, body, config)
 }
  editPerson(param: any): any  {
    let url = "http://10.98.2.145:8080/Practica03EJB-JPA-JSF/rest/cliente/validarCliente/"+ param
    return this.http.get(url)
  }
  listPerson():any{
    let url = "http://10.98.2.145:8080/Practica03EJB-JPA-JSF/rest/cliente/listarClientes/"
    return this.http.get(url)

  }
  deletePerson(cedula: any): any{
    console.log(cedula)
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };  
    const body = "cedula=" + cedula
    return this.http.post(environment.WS_PATHDEL,body,config)
  }
}
