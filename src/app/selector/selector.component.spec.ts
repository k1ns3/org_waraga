import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SelectorComponent } from './selector.component';



describe('SelectorComponent', () => {
    let component: SelectorComponent;
    let fixture: ComponentFixture<SelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectorComponent]
        })
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
