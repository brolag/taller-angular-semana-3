import { Component } from '@angular/core';
import { TaskStatus, Task } from '../models/task.interface';
import * as uuid from 'uuid';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  
  public newTask: any = {};
  public taskList: Array<Task> = [];
  
  constructor() { }

  public updateList(taskTitle: string): void {
    this.newTask = this.createTask(taskTitle, new Date());
    this.taskList = this.addTask(this.taskList, this.newTask);
    this.cleanForm();
  }

  private createTask(title: string, date: Date): Task {
    return { id: uuid.v1(), title, date, status: TaskStatus.IN_PROGRESS };
  }

  private addTask(taskList: Array<Task>, task: Task): Array<Task> {
    return [...taskList, task];
  }

  public deleteTask(id: string) {
    this.taskList = this.taskList.filter(task => task.id !== id);
  }

  public completeTask(id: string) {
    this.taskList = this.taskList.map(task => {
      if (task.id === id) task.status = TaskStatus.DONE;
      return task;
    })
  }
  
  private cleanForm(): void {
    this.newTask = {};
  }

}
