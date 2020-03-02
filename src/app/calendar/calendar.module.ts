import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MomentPipeModule } from '../shared/moment-pipe.module';
import { DateServiceModule } from '../shared/date-service.module';

import { CalendarComponent } from './calendar.component';

import { DateService } from '../shared/date.service';
import { CalendarService } from './calendar.service';

import { CALENDAR_CONFIG_TOKEN } from './calendar-config-token';


@NgModule({
    declarations: [CalendarComponent],
    exports: [CalendarComponent],
    imports: [
        BrowserModule,
        MomentPipeModule,
        DateServiceModule
    ]
})
export class CalendarRootModule { }


@NgModule()
export class CalendarModule {
    static forRoot(config: { a: number, b: number }): ModuleWithProviders {
        return {
            ngModule: CalendarRootModule,
            providers: [DateService,
                CalendarService,
                {
                    provide: CALENDAR_CONFIG_TOKEN,
                    useValue: config
                }]
        };
    }
}
