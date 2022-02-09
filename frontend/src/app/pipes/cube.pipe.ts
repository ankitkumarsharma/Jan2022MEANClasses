import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  transform(value: number, args?:any): unknown {
    let per = (value * 100)/args +'%';
    return per;
    // return (value*value*value);
  }

}
