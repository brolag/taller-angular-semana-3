import { Component, OnInit, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.scss']
})
export class CreateTaskFormComponent implements OnInit, AfterViewInit {

  public newTaskTitle: string;
  @Output() taskTitle: EventEmitter<string>;

  @ViewChild('taskInput', {static: false}) taskInput: ElementRef;

  constructor() {
    this.newTaskTitle = '';
    this.taskTitle = new EventEmitter();
  }

  ngOnInit() {
    console.log('onInit', this.taskInput)
  }

  ngAfterViewInit() {
    console.log('afterViewInit', this.taskInput)
  }

  public submitForm(): void {
    if (!this.isInputEmpty()) {
      this.taskTitle.emit(this.newTaskTitle);
      this.newTaskTitle = '';
      this.taskInput.nativeElement.focus();
    }
  }

  public keyDown(event): void {
    if(event.keyCode === 13) {
      this.submitForm();
    }
  }

  public isInputEmpty(): boolean {
    return this.newTaskTitle === '';
  }

}
