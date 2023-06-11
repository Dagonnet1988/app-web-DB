import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/Users';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {

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
  edit:boolean = false

  constructor (private usersService : UsersService, private route: Router, private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['cc']){

      this.usersService.getUser(params['cc']).subscribe(
        res => {
          this.usuario = res
          this.user = this.usuario['usuario']
          this.edit = true

        },
        error => {
          console.error(error);
        }
      );
      };
    };

  newUser (){
    this.usersService.saveUser(this.user)
    .subscribe(
      res=> {
        console.log(res);
        this.route.navigate(['/consult']);
      },
      err => {
        console.error(err);
      }
    )
  }

  updateUser(){
    this.usersService.updateUser(this.user.cedula, this.user).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/consult']);

      },

      err => console.error(err)

    )
  }



}
