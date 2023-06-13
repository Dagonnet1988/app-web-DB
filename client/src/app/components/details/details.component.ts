import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/Users';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit{

  user: User ={
    nombre: '',
    apellido: '',
    cedula: 0,
    fnacimiento: new Date(),
    nacionalidad:'',
    direccion:'',
    ciudad:'',
    telefono: 0,
    experienciaAnos: 0,
    correo: '',
    perfil: '',
    tecnologias: '',
    profesion: '',
    empleado: false,
    fingreso: new Date(1111/11/11),
    fretiro: new Date(1111/11/11),
    salario: 0,
    }
    usuario: any = [];

    constructor (private usersService : UsersService, private route: Router, private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['cc']){

      this.usersService.getUser(params['cc']).subscribe(
        res => {
          this.usuario = res
          this.user = this.usuario['usuario']

        },
        error => {
          console.error(error);
        }
      );
      };
    };


}
