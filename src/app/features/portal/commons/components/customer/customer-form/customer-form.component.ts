import { Component, OnInit } from '@angular/core';
import {Clientes} from '../../../../models/clientes.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../../services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  clientes: Clientes = {
    nombre: null,
    tel: null,
    email: null,
  };

  id: any;
  editing = false;
  cliente: Clientes[];


  constructor(private customerServices: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    if (this.id){
      this.editing = true;
      this.customerServices.obtenerCliente().subscribe( (data: Clientes[]) => {
        this.cliente = data;
        this.clientes = this.cliente.find( (m) => m.id == this.id);
        console.log(this.cliente);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }
  }

  ngOnInit(): void {
  }


  saveCliente(): any {
    if (this.editing) {
      this.customerServices.put(this.clientes).subscribe( (data) => {
        Swal.fire({
          title: this.clientes.nombre,
          text: 'Se actualizo correctamente',
          icon: 'success'
        });
        this.router.navigateByUrl('/admin/customer');
      }, (error) => {
        console.log(error);
        alert('Ocurrio un errror');
      });
    } else {
      this.customerServices.guardar(this.clientes).subscribe( (data) => {
        Swal.fire({
          title: 'Se ha registrado con exito',
          text: 'El cliente se registro a la base de datos exitosamente',
          icon: 'success',
        });
        this.router.navigateByUrl('/admin/customer');
      }, (error) => {
        console.log(error);
        alert('Ocurrio un errror');
      });
    }

  }
}
