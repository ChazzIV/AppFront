import { Component, OnInit } from '@angular/core';
import {Clientes} from '../../../models/clientes.model';
import {CustomerService} from '../../services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  clientes: Clientes[];
  cargando = false;

  constructor( public customerServices: CustomerService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.customerServices.obtenerCliente()
      .subscribe( resp => {
        this.clientes = resp;
        this.cargando = false;
      } );
  }


  obtenerClientes(): any {
    this.customerServices.obtenerCliente().subscribe( (data: Clientes[]) => {
      this.clientes = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }

  borrarCliente(id): any {
    // if (confirm('Seguro que deses eliminarlo ?')){
    //   this.clientesServices.elminiarCliente(id).subscribe( (data) => {
    //     alert('Eliminado con exito');
    //     this.obtenerClientes();
    //   }, (error) => {
    //     console.log(error);
    //     alert('Ocurrio un error');
    //   });

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro de eliminar a este cliente`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if (resp.value ) {
        this.customerServices.elminiarCliente(id).subscribe( (data) => {
          this.obtenerClientes();
          Swal.fire({
            title: 'Eliminado correctamente',
            text: 'Se elimino correctamente de la base de datos',
            icon: 'success'
          });
        });
      }
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }

}
