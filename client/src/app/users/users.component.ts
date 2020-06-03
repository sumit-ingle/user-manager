import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[];
  public userColumns;
  public selectedUser;

  constructor(private usersService: UsersService, private el: ElementRef, private ren: Renderer2) { }

  ngOnInit() {
    this.userColumns = [
      { key: 'name', displayName: 'NAME' },
      { key: 'email', displayName: 'EMAIL' },
      { key: 'roleType', displayName: 'ROLE TYPE' },
      { key: 'status', displayName: 'STATUS' }
    ]
    this.loadUsers();
  }

  loadUsers() {
    this.usersService
      .getAllUsers()
      .subscribe((users: User[]) => {
        if (typeof users === "string" && users === "error") {
          console.log("Error while fetching users");
        } else {
          this.users = users;
        }
      }, (error) => {
        console.log("Error while fetching users", error);
      });
  }

  onUserUpdate(rowData) {
    this.usersService
      .updateUser(rowData.updatedUser)
      .subscribe((response: User) => {
        if (typeof response === "string" && response === "error") {
          console.log("Error while updating user");
        } else {
          this.users[rowData.rowIndex] = rowData.updatedUser;
        }
      }, (error) => {
        console.log("Error while updating user", error);
      });
  }

  onUserAdd(user) {
    this.usersService.addUser(user)
      .subscribe((user: User) => {
        if (typeof user === "string" && user === "error") {
          console.log("Error while adding user");
        } else {
          this.users.push(user);
        }
      }, (error) => {
        console.log("Error while adding user", error);
      })
  }

}
