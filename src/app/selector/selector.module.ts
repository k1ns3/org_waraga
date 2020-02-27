import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MomentPipeModule } from '../shared/moment-pipe.module';
import { DateService } from '../shared/date.service';
import { SelectorComponent } from './selector.component';

@NgModule({
    imports: [BrowserModule, MomentPipeModule],
    declarations: [SelectorComponent],
    exports: [SelectorComponent],
    providers: [DateService]
})
export class SelectorModule { }
