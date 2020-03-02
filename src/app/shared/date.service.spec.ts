import { TestBed, async } from '@angular/core/testing';

import { DateService } from './date.service';

describe('Service: DateService', () => {
    let service: DateService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [DateService]
        }).compileComponents();
    }));

    afterEach(() => {
        service = null;
    });

    it('should create', () => {
        service = TestBed.get(DateService);
        expect(service).toBeTruthy();
    });
});
