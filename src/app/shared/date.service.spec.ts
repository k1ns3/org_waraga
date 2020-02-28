import { DateService } from './date.service'

describe('Service: DateService', () => {
    let service: DateService

    beforeEach(() => {
        service = new DateService();
    });

    afterEach(() => {
        service = null;
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });
});
