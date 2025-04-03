import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword',
  standalone: false
})
export class HidePasswordPipe implements PipeTransform {

  transform(value: string, sign: string, showCharsNo: number = 0): unknown {
    const valueArray: string[] = value.split('')
    return showCharsNo ? valueArray.slice(0, showCharsNo).join('') + valueArray.slice(showCharsNo).fill(sign).join('') : valueArray.fill(sign).join('')
  }

}
