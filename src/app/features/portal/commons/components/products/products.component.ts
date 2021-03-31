import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Productos} from '../../../models/productos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos: Productos[];
  cargando = false;

  constructor(private productsServices: ProductsService) {
  }

  ngOnInit(): void {
    this.cargando = true;
    this.productsServices.obtenerProducto()
      .subscribe( resp => {
        this.productos = resp;
        setTimeout( () => {
          this.cargando = false;
        }, 1000);

      } );
  }

  obtenerProductos(): any {
    this.productsServices
      .obtenerProducto().subscribe( (data: Productos[]) => {
      this.productos = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }

  borrarProducto(id): any {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro de eliminar a este cliente`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if (resp.value ) {
        this.productsServices
          .elminiarProducto(id).subscribe( (data) => {
          this.obtenerProductos();
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
