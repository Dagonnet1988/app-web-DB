import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';



@Component({
  selector: 'app-consult-user',
  templateUrl: './consult-user.component.html',
})
export class ConsultUserComponent implements OnInit{
  searchForConsult( cc: string ): void {
    console.log('Consultar por cédula ');
    console.log({cc});
  }

  usuarios: any = [];


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
      err => {

      }
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

