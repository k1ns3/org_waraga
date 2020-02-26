import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { OrganizerComponent } from './organizer.component';



describe('OrganizerComponent', () => {
    let component: OrganizerComponent;
    let fixture: ComponentFixture<OrganizerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrganizerComponent]
        })
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
