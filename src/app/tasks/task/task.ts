import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task

  constructor(private tasksService: TasksService){

  }

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
