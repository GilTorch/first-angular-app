import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { Card } from '../shared/card/card';



@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {

  
  @Input() selected: boolean = false;
  @Input({ required: true }) user!: User
  @Output() select = new EventEmitter<string>();

   get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectedUser(){
    this.select.emit(this.user.id);
  }

}
