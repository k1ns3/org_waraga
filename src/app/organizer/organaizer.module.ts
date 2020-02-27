import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MomentPipeModule } from '../shared/moment-pipe.module';

import { OrganizerComponent } from './organizer.component';

import { DateService } from '../shared/date.service';
import { TasksService } from '../shared/tasks.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MomentPipeModule],
    declarations: [OrganizerComponent],
    exports: [OrganizerComponent],
    providers: [DateService, TasksService]
})
export class OrganizerModule { }
