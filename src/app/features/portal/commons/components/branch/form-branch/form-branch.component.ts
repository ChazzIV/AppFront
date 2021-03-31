import { Component, OnInit } from '@angular/core';
import {Sucursal} from '../../../../models/sucursal.model';
import {BranchService} from '../../../services/branch.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-branch',
  templateUrl: './form-branch.component.html',
  styleUrls: ['./form-branch.component.css']
})
export class FormBranchComponent implements OnInit {

  sucursales: Sucursal = {
    nombre: null,
    rfc: null,
    direccion: null,
    tel: null,
  };

  id: any;
  editing = false;
  sucursal: Sucursal[];

  constructor(private branchServices: BranchService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    if (this.id){
      this.editing = true;
      this.branchServices.obtenerSucursal().subscribe( (data: Sucursal[]) => {
        this.sucursal = data;
        this.sucursales = this.sucursal.find( (m) => m.id == this.id);
        console.log(this.sucursal);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }
  }


  ngOnInit(): void {
  }

  saveSucursal(): any {
    if (this.editing) {
      this.branchServices.putSucursal(this.sucursales).subscribe( (data) => {
        Swal.fire({
          title: this.sucursales.nombre,
          text: 'Se actualizo correctamente',
          icon: 'success'
        });
        this.router.navigateByUrl('/admin/branch');
        console.log(data);
      }, (error) => {
        console.log(error);
        alert('Ocurrio un errror');
      });
    } else {
      this.branchServices.guardarSucursal(this.sucursales).subscribe( (data) => {
        Swal.fire({
          title: 'Se ha registrado con exito',
          text: 'El cliente se registro a la base de datos exitosamente',
          icon: 'success',
        });
        this.router.navigateByUrl('/admin/branch');
      }, (error) => {
        console.log(error);
        alert('Ocurrio un errror');
      });
    }
  }

}
