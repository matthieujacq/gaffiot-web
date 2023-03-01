import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
})
export class TrimPipe implements PipeTransform {
  transform(value: string, trimmedChars: string): string {
    return value.replace(
      new RegExp(`^${trimmedChars}+|${trimmedChars}+$`, 'g'),
      ''
    );
  }
}
