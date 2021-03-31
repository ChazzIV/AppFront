import { Component, OnInit } from '@angular/core';
import {Usuarios} from '../../../models/usuarios.model';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: Usuarios[];
  cargando = false;

  constructor(private usersServices: UsersService) {
    this.obtenerUsuarios();
  }

  ngOnInit(): void {
    this.cargando = true;
    this.usersServices.obtenerUsuarios()
      .subscribe( resp => {
        this.usuarios = resp;
        this.cargando = false;
      } );
  }

  obtenerUsuarios(): any {
    this.usersServices.obtenerUsuarios().subscribe( (data: Usuarios[]) => {
      this.usuarios = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }


}
