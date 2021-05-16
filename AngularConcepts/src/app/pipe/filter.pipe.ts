import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    console.log(`Inside Pipe:  ${value}`);
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
        if (item[propName].indexOf(filterString) !== -1 ) {
        resultArray.push(item);
      }
    } 
    return resultArray;
  }
}
