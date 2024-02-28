import { Pipe, PipeTransform } from '@angular/core';

/* a pipe that converts first letter to upper case(just for presentation purposes really) */

@Pipe({
  name: 'shorten',
  pure: true
})
export class ShortenPipe implements PipeTransform {
  limit = 100;

  transform(value: any): string {
    if (value.length < this.limit) return value;

    if (value.endsWith('.')) {
      return value.substring(0, this.limit).slice(0, -1).trimEnd() + '...';
    } else {
      return value.substring(0, this.limit).trimEnd() + '...';
    }
  }

}
