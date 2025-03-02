import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ages',
  standalone: true
})
export class AgesPipe implements PipeTransform {

  transform(value:Date): number {
    const today =new Date () ;
    const dob =today.getFullYear() - value .getFullYear()
    return dob
  }

}
