import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SelectorComponent } from './selector.component';
import { MomentPipe } from '../shared/moment.pipe';
import { DateService } from '../shared/date.service';
import { NgxsModule } from '@ngxs/store';
import { OrganaizerState } from '../organaizer.state';



describe('SelectorComponent', () => {
    let component: SelectorComponent;
    let fixture: ComponentFixture<SelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([OrganaizerState])],
            declarations: [SelectorComponent, MomentPipe],
            providers: [DateService]
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
