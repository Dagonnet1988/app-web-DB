import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/Users';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-consult-user',
  templateUrl: './consult-user.component.html',
})
export class ConsultUserComponent implements OnInit{

  filterPost = '';
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

  usuarios: any = [];
  usuario: any= []


  searchForConsult( cc: string ): void {
    this.usersService.getUser(cc).subscribe(
      res=> {
        this.usuario = res
        this.user = this.usuario['usuario']
      }
    )


  }



  constructor(private usersService: UsersService) {

  }
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers (){
    this.usersService.getUsers().subscribe(

      res => {
        this.usuarios =  res
      },

    );
  }


  deleteUser(cc: string) {
    this.usersService.deleteUser(cc)
    .subscribe(
      res => {
        console.log(res);
        this.getUsers()
      },
      err => {
        console.error(err);
      }
    )
  }
}

