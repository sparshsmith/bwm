import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name:'upper'
})
export class UpperCase implements PipeTransform{
  transform(value:string) : string {
    const transformedValue = value.toUpperCase();
    return transformedValue;
  }
}
