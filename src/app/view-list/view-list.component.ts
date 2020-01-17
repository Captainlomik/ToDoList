import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { NgModule, Pipe } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  @Input() tasks: Task;
  @Output() delete = new EventEmitter<null>();
  @Output() ch = new EventEmitter<Task>();
  changeModule = false;
  label = 0;
  constructor() { }

  ngOnInit() {
    this.date();
  }

  del() {
    this.delete.emit();
  }

  onSave() {
    console.log(this.tasks.id);
    this.ch.emit(this.tasks);
    this.changeModule = false;
  }

  date() {
    let dateEnd = new Date(this.tasks.date);
    let now = new Date();
    let dateEndms = dateEnd.getTime();
    let nowms = now.getTime();

    if ((dateEndms - nowms) < 0) {
      this.label = 1;
    }
  }

  

}
