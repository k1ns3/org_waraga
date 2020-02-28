import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';

import { OrganizerComponent } from './organizer.component';
import { MomentPipe } from '../shared/moment.pipe';

import { DateService } from '../shared/date.service';
import { TasksService } from '../shared/tasks.service';

import { OrganaizerState } from '../organaizer.state';
import { HttpClientModule } from '@angular/common/http';


describe('OrganizerComponent', () => {
    let component: OrganizerComponent;
    let fixture: ComponentFixture<OrganizerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                NgxsModule.forRoot([OrganaizerState])
            ],
            declarations: [OrganizerComponent, MomentPipe],
            providers: [DateService, TasksService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrganizerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
