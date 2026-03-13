
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {

  @Output() close = new EventEmitter();
  @Input({ required: true }) userId!: string;
  enteredTitle = ""
  enteredSummary = ""
  enteredDate = ""
  private tasksService = inject(TasksService)
  // enteredTitle = signal("")
  // enteredSummary = signal("")
  // enteredDate = signal("")


  closeTask(){
    this.close.emit()
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },this.userId)
     this.close.emit()
  }

}
