import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customName'
})
export class CustomNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let todayDate = new Date();
    return `Mr. Rahul ${value} ${todayDate}`;
  }

}
