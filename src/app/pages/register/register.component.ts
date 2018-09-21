import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  messageError = '';
  result = '';
  constructor(private usersService: UsersService) { }

  ngOnInit() { }

  onSignUp(){
    this.usersService.signup(this.email, this.password).subscribe(res => {
      this.result = 'ok';
      this.messageError = '';
    }, 
    err => {
      this.messageError = err._body;
      this.result = '';
    })
  }

}
