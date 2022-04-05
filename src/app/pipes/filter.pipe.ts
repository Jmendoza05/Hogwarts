import { NgProbeToken, Pipe, PipeTransform } from '@angular/core';
import { persons } from '../models/person.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: persons[], page: number = 0, search:string =''): persons[] {
    if(search.length === 0){
      return value.slice(page,page + 5);  
    }
    const filterPerson = value.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    
    return filterPerson.slice(page,page + 5);
  }

}
