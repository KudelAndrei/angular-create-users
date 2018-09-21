import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  err = '';
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    }, 
    err => {
      this.err = err;
    })
  }

  onChangeStatus(user){
    this.userService.changeStatus(user).subscribe(res => {
      const index = this.users.findIndex(element => element.id === user.id);
      this.users[index] = res;
    })
  }

}
