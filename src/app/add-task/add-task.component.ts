import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { DataService } from '../shared/service/data.service';
import { Router } from '@angular/router';
import { Task } from '../shared/models/task.model';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTask: FormGroup;

  constructor(private dataService:DataService, private router: Router) {
    this.addTask = new FormGroup({
      header: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      date:new FormControl(null,Validators.required),
      createDate:new FormControl(new Date(), Validators.required)
    });
  }

  ngOnInit() {
  }

  async addCard(tasks:Task)
  {
    try{

      await this.dataService.addCard(this.addTask.value);
      this.router.navigate(['/'])
    }
    catch(err)
    {
      console.log(err);
    }
  }

}
