import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string, start=0, end=100): unknown {
    return value.substr(start, end) + '...';
  }

}
