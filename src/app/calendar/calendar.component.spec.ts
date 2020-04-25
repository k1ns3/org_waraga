import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';

import { CalendarComponent } from './calendar.component';
import { OrganaizerState } from '../organaizer.state';
import { MomentPipe } from '../shared/moment.pipe';
import { DateService } from '../shared/date.service';
import { CalendarService } from './calendar.service';


describe('CalendarComponent', () => {
    let component: CalendarComponent;
    let fixture: ComponentFixture<CalendarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([OrganaizerState])],
            declarations: [CalendarComponent, MomentPipe],
            providers: [DateService, CalendarService]
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
