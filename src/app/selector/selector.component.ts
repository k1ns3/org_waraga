import { Component } from '@angular/core';
import { DateService } from '../shared/date.service';
import { Store } from '@ngxs/store';

@Component({
    selector: 'app-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

    constructor(
        private dateService: DateService,
        private store: Store) { }

    go(dir: number) {
        this.dateService.changeMonth(dir);
    }
}
