import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewListComponent } from './view-list/view-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewAllComponent } from './view-all/view-all.component';


const routes: Routes = [
  {path:'', component:ViewAllComponent},
  {path:'add', component:AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
