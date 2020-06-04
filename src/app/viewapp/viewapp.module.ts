import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewappComponent } from './viewapp.component';
import { OrganizerModule } from '../organizer/organaizer.module';
import { SelectorModule } from '../selector/selector.module';
import { CalendarModule } from '../calendar/calendar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ViewappComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [
    ViewappComponent
  ]
})
export class ViewappModule { }
