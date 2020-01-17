import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Task[], value:string){
    if(value==undefined)
    value='';

    return tasks.filter(task =>{
      return task.header.toLowerCase().indexOf(value.toLowerCase()) !=-1 ||
      task.description.toLowerCase().indexOf(value.toLowerCase())!=-1;
    });
  }

}
