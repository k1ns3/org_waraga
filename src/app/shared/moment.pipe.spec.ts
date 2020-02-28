import { MomentPipe } from './moment.pipe';

describe('Pipe: MomentPipe', () => {
    let pipe: MomentPipe;

    beforeEach(() => {
        pipe = new MomentPipe();
    });

    it('should be create', () => {
        expect(pipe.transform).toBeTruthy();
    });
});
