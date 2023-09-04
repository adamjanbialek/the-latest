import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  pure: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value; // Handle empty value

    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}