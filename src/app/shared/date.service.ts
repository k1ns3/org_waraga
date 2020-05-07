import { Injectable } from '@angular/core';
import moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DateService {
    public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());

    changeMonth(dir: number) { // смена месяца
        const value = this.date.value.add(dir, 'month');
        this.date.next(value);
    }

    changeDate(date: moment.Moment) { // перестановка даты в календаре
        const value = this.date.value.set({
            date: date.date(),
            month: date.month()
        });
        this.date.next(value);
    }
}
