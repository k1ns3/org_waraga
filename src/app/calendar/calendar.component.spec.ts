import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { CalendarComponent } from './calendar.component';
import { OrganaizerState } from '../organaizer.state';
import { MomentPipe } from '../shared/moment.pipe';
import { DateService } from '../shared/date.service';
import { CalendarService } from './calendar.service';
import { CALENDAR_CONFIG_TOKEN } from './calendar-config-token';


describe('CalendarComponent', () => {
    let component: CalendarComponent;
    let fixture: ComponentFixture<CalendarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([OrganaizerState])],
            declarations: [CalendarComponent, MomentPipe],
            // providers: [DateService, CalendarService, { provide: CALENDAR_CONFIG_TOKEN, useValue: { a: 1, b: 2 } }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
