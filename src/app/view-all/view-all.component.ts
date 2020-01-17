import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { isNullOrUndefined } from 'util';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  tasks: Task[] = [];
  sortType = 0;
  flag2 = true;



  constructor(private dataServise: DataService) { }

  async ngOnInit() {
    this.show(this.sortType, this.flag2);
  }

  async show(sortType: number, flag2: boolean) {
    try {
      let tasks = this.dataServise.getCards();
      this.tasks = (isNullOrUndefined(await tasks)) ? [] : this.sort(await tasks, sortType, flag2);
      //console.log(flag)
    }
    catch (err) {
      console.log(err);
    }

  }

  async delete(task: Task) {
    try {
      await this.dataServise.deleteCard(task.id);
      this.ngOnInit();
    }
    catch (err) {
      console.log(err);
    }
  }

  async change(task: Task) {
    try {
      await this.dataServise.changeCard(task.id, task);
      this.ngOnInit();
    }
    catch (eror) { console.log(eror) }
  }



  sort(task: Task[], sortType: number, flag2: boolean) {
    task.sort(function (a, b) {
      console.log(flag2);
      if (sortType == 1 && flag2 == false)
        return new Date(a.createDate).getTime() - new Date(b.createDate).getTime();
      if (sortType == 1 && flag2 == true)
        return new Date(b.createDate).getTime() - new Date(a.createDate).getTime();
      if (sortType == 2 && flag2 == false)
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortType == 2 && flag2 == true)
        return new Date(a.date).getTime() - new Date(b.date).getTime()

    });
    return task;
  }
}
