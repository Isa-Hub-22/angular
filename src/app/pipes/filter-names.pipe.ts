import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'priorityName' })
export class PriorityNamePipe implements PipeTransform {
  transform(list: any[], filter: number = 0) {
    const listPaginate = list.slice(filter * 25, 25 + (filter * 25))  
    return listPaginate;
  }
}

