import { Injectable, Inject } from '@angular/core';

import { CALENDAR_CONFIG_TOKEN } from './calendar-config-token';

@Injectable()
export class CalendarService {
    constructor(
        @Inject(CALENDAR_CONFIG_TOKEN) private readonly _config: { a: number, b: number }
    ) {
        console.log(this._config);
    }


    getConfig() {
        console.log(this._config);
    }
}
