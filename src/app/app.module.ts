import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { OktaAuthModule } from '@okta/okta-angular';

import { CalendarModule } from './calendar/calendar.module';
import { OrganizerModule } from './organizer/organaizer.module';
import { SelectorModule } from './selector/selector.module';

import { AppComponent } from './app.component';

import { OrganaizerState } from './organaizer.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewappComponent } from './viewapp/viewapp.component';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule, MatTableModule, MatDividerModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        ViewappComponent,
        LoginComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        NgxsModule.forRoot([OrganaizerState]),
        NgxsStoragePluginModule.forRoot(),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsFormPluginModule.forRoot(),
        OrganizerModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatDividerModule,
        AppRoutingModule,
        SelectorModule,
        CalendarModule.forRoot({ a: 1, b: 2 }),
        BrowserAnimationsModule,
        OktaAuthModule.initAuth({
            issuer: 'https://dev-360290.okta.com/oauth2/default',
            redirectUri: 'http://localhost:4200/implicit/callback',
            clientId: '0oae0qrkcdPWRUWLR4x6'
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
