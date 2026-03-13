import { Injectable } from "@angular/core";
import { NewTask } from "./new-task/new-task.model"

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: "Learn all the basic",
      dueDate: '09-02-2025',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: "Learn all the basic",
      dueDate: '03-05-2025',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary: "Learn all the basic",
      dueDate: '06-04-2025',
    }
  ]

  getUserTasks(userId: string){
    return this.tasks.filter(task => task.userId == userId)
  }

  addTask(task: NewTask, userId: string){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date
    })
  }

  removeTask(taskId: string){
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }
}