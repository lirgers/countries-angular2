import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
  pure: false
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  tmp = [];
    transform(items: any[], field: string, value: string): any[] {
      this.tmp.length = 0;
      if (!items) return [];
      let arr = items.filter(it => it[field] == value);
      this.tmp.push(...arr);
      return this.tmp;
    }
}