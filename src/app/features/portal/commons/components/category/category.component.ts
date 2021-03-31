import { Component, OnInit } from '@angular/core';
import {Categorias} from '../../../models/categorias.model';
import {CategoryService} from '../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorias: Categorias[];
  cargando = false;

  constructor(private categoryService: CategoryService) {
    this.obtenerCategorias();
  }

  ngOnInit(): void {
    this.cargando = true;
    this.categoryService.obtenerCategoria()
      .subscribe( resp => {
        this.categorias = resp;
        this.cargando = false;
      } );
  }

  obtenerCategorias(): any {
    this.categoryService.obtenerCategoria().subscribe( (data: Categorias[]) => {
      this.categorias = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }

  borrarCategoria(id): any {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro de eliminar a este cliente`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if (resp.value ) {
        this.categoryService.elminiarCategoria(id).subscribe( (data) => {
          this.obtenerCategorias();
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
