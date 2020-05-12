import { MomentPipe } from './moment.pipe';
import { async, TestBed } from '@angular/core/testing';

describe('Pipe: MomentPipe', () => {
    let pipe: MomentPipe;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [MomentPipe]
        }).compileComponents();
    }));


    beforeEach(() => {
        pipe = new MomentPipe();
    });

    it('should be create', () => {
        expect(pipe.transform).toBeTruty();
    });
});
