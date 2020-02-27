import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MomentPipeModule } from '../shared/moment-pipe.module';
import { DateService } from '../shared/date.service';
import { SelectorComponent } from './selector.component';
import { DateServiceModule } from '../shared/date-service.module';

@NgModule({
    imports: [BrowserModule,
        MomentPipeModule,
        DateServiceModule
    ],
    declarations: [SelectorComponent],
    exports: [SelectorComponent],
    providers: [DateService]
})
export class SelectorModule { }
