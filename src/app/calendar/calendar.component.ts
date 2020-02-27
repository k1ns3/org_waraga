import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngxs/store';
import * as moment from 'moment';

import { DateService } from '../shared/date.service';

import { SelectedDay } from '../organaizer.actions';

import { CalendarService } from './calendar.service';
import { CALENDAR_CONFIG_TOKEN } from './calendar-config-token';

interface Day {
    value: moment.Moment
    active: boolean
    disabled: boolean
    selected: boolean
}

interface Week {
    days: Day[]
}

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    calendar: Week[];

    constructor(
        @Inject(CALENDAR_CONFIG_TOKEN) private readonly _config: { a: number, b: number },
        private calendarService: CalendarService,
        private dateService: DateService,
        private store: Store
    ) {
        console.log(`config`, this._config);
    }

    ngOnInit() {
        this.dateService.date.subscribe(this.generate.bind(this));
        this.calendarService.getConfig();
    }

    generate(now: moment.Moment) {
        const startDay = now.clone().startOf('month').startOf('week')
        const endDay = now.clone().endOf('month').endOf('week')

        const date = startDay.clone().subtract(1, 'day')

        const calendar = []

        while (date.isBefore(endDay, 'day')) {
            calendar.push({
                days: Array(7)
                    .fill(0)
                    .map(() => {
                        const value = date.add(1, 'day').clone()
                        const active = moment().isSame(value, 'date')
                        const disabled = !now.isSame(value, 'month')
                        const selected = now.isSame(value, 'date')
                        return {
                            value, active, disabled, selected
                        }
                    })
            })
        }

        this.calendar = calendar
    }

    select(day: moment.Moment) {
        this.dateService.changeDate(day)
        this.store.dispatch(new SelectedDay(day));
    }
}
