import { NgModule } from '@angular/core';
import { DateService } from './date.service';
import { MomentPipe } from './moment.pipe';

@NgModule({
    declarations: [DateService],
    providers: [DateService, MomentPipe],
    exports: [DateService]
})
export class DateServiceModule { } 
