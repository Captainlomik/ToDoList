import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewListComponent } from './view-list/view-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HttpClientModule }   from '@angular/common/http';
import { ViewAllComponent } from './view-all/view-all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewListComponent,
    AddTaskComponent,
    ViewAllComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
