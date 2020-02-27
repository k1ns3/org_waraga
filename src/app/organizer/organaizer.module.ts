import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MomentPipeModule } from '../shared/moment-pipe.module';
import { DateServiceModule } from '../shared/date-service.module';

import { OrganizerComponent } from './organizer.component';

import { TasksService } from '../shared/tasks.service';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MomentPipeModule,
        DateServiceModule
    ],
    declarations: [OrganizerComponent],
    exports: [OrganizerComponent],
    providers: [TasksService]
})
export class OrganizerModule { }
