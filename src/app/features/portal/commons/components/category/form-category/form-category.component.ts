import { Component, OnInit } from '@angular/core';
import {Categorias} from '../../../../models/categorias.model';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  categoria: Categorias = {
    nombre: null,
    description: null
  };
  id: any;
  editing = false;
  categorias: Categorias[];


  constructor(private categoryServices: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    if (this.id){
      this.editing = true;
      this.categoryServices.obtenerCategoria().subscribe( (data: Categorias[]) => {
        this.categorias = data;
        this.categoria = this.categorias.find( (m) => m.id == this.id);
        console.log(this.categoria);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }
  }

  ngOnInit(): void {
  }

  saveCategoria(): any {
    if (this.editing) {
      this.categoryServices.put(this.categoria).subscribe( (data) => {
        Swal.fire({
          title: this.categoria.nombre,
          text: 'Se actualizo correctamente',
          icon: 'success'
        });
        this.router.navigateByUrl('/admin/category');
      }, (error) => {
        console.log(error);
        alert('Ocurrio un errror');
      });
    } else {
      this.categoryServices.guardarCategoria(this.categoria).subscribe( (data) => {
        Swal.fire({
          title: 'Se ha registrado con exito',
          text: 'El cliente se registro a la base de datos exitosamente',
          icon: 'success',
        });
        this.router.navigateByUrl('/admin/category');
      }, (error) => {
        console.log(error);
        alert('Ocurrio un errror');
      });
    }

  }

}
