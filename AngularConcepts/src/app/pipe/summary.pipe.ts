import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number,...args: unknown[]): unknown {
    if (!value)
      return null;

    let actualLimit = limit ? limit : 30;
    return value.substring(0, actualLimit) + '...';
  }
}
