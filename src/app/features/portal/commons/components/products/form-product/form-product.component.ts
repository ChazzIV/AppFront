import { Component, OnInit } from '@angular/core';
import {Productos} from '../../../../models/productos.model';
import {Categorias} from '../../../../models/categorias.model';
import {ProductsService} from '../../../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  producto: Productos = {
    categoria_id: null,
    nombre: null,
    precio: null,
  };

  id: any;
  editing = false;
  productos: Productos[];
  categorias: Categorias[];

  constructor(private productsServices: ProductsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    // console.log(this.id);
    if (this.id){
      this.editing = true;
      this.productsServices.obtenerProducto().subscribe( (data: Productos[]) => {
        this.productos = data;
        this.producto = this.productos.find( (m) => m.id == this.id);
        // console.log(this.producto);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }
  }

  ngOnInit(): void {
    this.productsServices.obtenerCategorias().subscribe( res => {
      this.categorias = res;
      console.log(this.categorias);
    });
  }


  saveProducto(): any {
    if (this.editing) {
      this.productsServices.putProducto(this.producto).subscribe( (data) => {
        Swal.fire({
          title: this.producto.nombre,
          text: 'Se actualizo correctamente',
          icon: 'success'
        });
        this.router.navigateByUrl('/admin/products');
      }, (error) => {
        console.log(error);
        alert('Ocurrio un errror');
      });
    } else {
      this.productsServices.guardarProducto(this.producto).subscribe( (data) => {
        Swal.fire({
          title: 'Se ha registrado con exito',
          text: 'El cliente se registro a la base de datos exitosamente',
          icon: 'success',
        });
        this.router.navigateByUrl('/admin/products');
      }, (error) => {
        console.log(error);
        alert('Ocurrio un errror');
      });
    }

  }

  compararCategoria(o1: Categorias, o2: Categorias): boolean {
    return o1 == null || o2 == null ? false : o1.id === o2.id;
  }

}
