import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, TaskStatus } from '../models/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() deletedTask: EventEmitter<string>;
  @Output() completedTask: EventEmitter<string>;

  constructor() { 
    this.deletedTask = new EventEmitter();
    this.completedTask = new EventEmitter();
  }

  ngOnInit() {
  }

  public isInProgress(): boolean {
    return this.task.status === TaskStatus.IN_PROGRESS;
  }

  public getBorderColor(): string {
    return this.isInProgress() ? 'gray 1px solid' : 'green 1px solid';
  }

  public completeTask(): void {
    this.completedTask.emit(this.task.id);
  }

  public deleteTask(): void {
    this.deletedTask.emit(this.task.id);
  }

}
