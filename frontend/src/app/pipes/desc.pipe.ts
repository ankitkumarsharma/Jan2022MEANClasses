import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value: string, args:string): string {
    return `This is your name ${value} and your family name is ${args}`;
  }

}
