import { Component, signal } from '@angular/core';
import HeaderComponent from './header/header';
import {  UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-user';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS
  selectedName = ""
  selectedUserId?: string;
  showTaskForm = false;

  get selectedUser(){
     const selectedUser = DUMMY_USERS.find(u => u.id === this.selectedUserId);
     return selectedUser;
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }

}
