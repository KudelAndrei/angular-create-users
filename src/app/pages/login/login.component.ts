import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  messageError = '';
  result = '';
  constructor(private userService: UsersService) { }

  ngOnInit() { }

  onSignIn(){
    this.userService.signin(this.email, this.password).subscribe(res => {
      this.result = 'ok';
      this.messageError = '';
    }, 
    err => {
      this.messageError = err._body;
      this.result = '';
    })
  }

}
