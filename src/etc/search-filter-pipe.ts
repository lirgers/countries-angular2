import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchfilter',
    pure: false
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
    tmp = [];
    lastId;

    transform(items: any[], field: string, value: string): any[] {
        if (this.lastId !== undefined) {
            let prevLast = items.find(item => {
                return item.id === this.lastId;
            });
            if (prevLast) prevLast.last = undefined;
        }
        this.tmp.length = 0;
        if (!items) return [];
        let arr = items.filter(it => it[field] == value);
        this.tmp.push(...arr);
        if(this.tmp.length) {
            this.tmp[this.tmp.length - 1].last = true;
            this.lastId = this.tmp[this.tmp.length - 1].id;
        }
        return this.tmp;
    }
}