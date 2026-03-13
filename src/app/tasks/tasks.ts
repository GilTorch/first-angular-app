import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task'
import { type NewTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  constructor(private tasksService: TasksService){

  }

  isAddingTask = false;


  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onAddTask(taskData: NewTask){
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false
  }

  onCloseTask(){
    this.isAddingTask = false;
  }

}
