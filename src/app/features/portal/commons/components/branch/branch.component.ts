import { Component, OnInit } from '@angular/core';
import {Sucursal} from '../../../models/sucursal.model';
import {BranchService} from '../../services/branch.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  sucursal: Sucursal[];
  cargando = false;

  constructor(private branchServices: BranchService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.branchServices.obtenerSucursal()
      .subscribe( resp => {
        this.sucursal = resp;
        this.cargando = false;
      } );
  }


  obtenerSucursal(): any {
    this.branchServices.obtenerSucursal().subscribe( (data: Sucursal[]) => {
      this.sucursal = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }

  borrarSucursal(id): any {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro de eliminar a este cliente`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if (resp.value ) {
        this.branchServices.elminiarSucursal(id).subscribe( (data) => {
          this.obtenerSucursal();
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
