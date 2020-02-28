import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { CalendarModule } from './calendar/calendar.module';
import { OrganizerModule } from './organizer/organaizer.module';
import { SelectorModule } from './selector/selector.module';

import { AppComponent } from './app.component';

import { OrganaizerState } from './organaizer.state';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NgxsModule.forRoot([OrganaizerState]),
        NgxsStoragePluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsFormPluginModule.forRoot(),
        OrganizerModule,
        SelectorModule,
        CalendarModule.forRoot({ a: 1, b: 2 }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
