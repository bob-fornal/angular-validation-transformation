import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Array<any> = [
    { first: 'Bob', last: 'Fornal' },
    { first: 'Jenny', last: 'Fornal' },
    { first: 'Patrick', last: 'Fornal' },
    { first: 'Anne', last: 'Fornal' }
  ];

  getData = (): Array<any> => this.data;

  validate = (item: any): boolean => item.hasOwnProperty('first') && item.hasOwnProperty('last');

  transform = (item: any): any => {
    let transformed: any = Object.assign({}, item);
    if (!transformed.hasOwnProperty('fullname')) {
      transformed.fullname = item.last + ', ' + item.first;
    }
    if (!transformed.hasOwnProperty('checked')) {
      transformed.checked = false;
    }
    console.log(item, transformed);
    return transformed;
  }

}
