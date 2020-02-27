import { NgModule } from '@angular/core';
import { MomentPipe } from '../shared/moment.pipe';

@NgModule({
    declarations: [MomentPipe],
    exports: [MomentPipe]
})
export class MomentPipeModule { }
