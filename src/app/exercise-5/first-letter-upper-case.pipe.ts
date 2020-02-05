import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpperCasePipe'
})
export class FirstLetterUpperCasePipe implements PipeTransform {

  transform(value: String) {
    let title: string = "";
    if (value) {
      title  = value.split(" ").map(
        word => word.length >= 2 ? word[0].toUpperCase() + word.substring(1) : word
      ).join(" ");
    }
    return title;
  }

}
