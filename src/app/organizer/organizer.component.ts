import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { TaskChanges } from '../organaizer.actions';

import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import moment from 'moment';

import { DateService } from '../shared/date.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task, TasksService } from '../shared/tasks.service';

import { stringValidator } from './validators/lat-string';
import { OrganaizerState } from '../organaizer.state';

@Component({
    selector: 'app-organizer',
    templateUrl: './organizer.component.html',
    styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit, OnDestroy {

    private readonly _destroy$: Subject<any>;

    private readonly _destroyStore$: Subject<any>;
    private _pattern: object;

    form: FormGroup;
    tasks: Task[] = [];

    @Select(OrganaizerState) organaizerState$: Observable<any>;

    constructor(
        private readonly tasksService: TasksService,
        private readonly store: Store,
        public readonly dateService: DateService,
    ) {
        this._destroyStore$ = new Subject();

        this._pattern = /[a-zA-Z]/g;

        this.form = new FormGroup({
            title: new FormControl('', [Validators.required, stringValidator(this._pattern)])
        });
    }

    ngOnInit() {
        this.organaizerState$
            .pipe(takeUntil(this._destroyStore$))
            .subscribe(organaizerState => {
                this.dateService.date.next(moment(organaizerState.Day ? organaizerState.Day : new Date()));
                this.form.setValue({
                    title: organaizerState.Task
                });
            });
        this.dateService.date
            .pipe(switchMap(value => this.tasksService.load(value)))
            .subscribe(tasks => this.tasks = tasks),
            takeUntil(this._destroy$);
    }

    ngOnDestroy() {
        // this._destroy$.next(true);
        this._destroyStore$.next();
    }

    isControlInvalid(controlName: string): boolean {
        const control = this.form.controls[controlName];
        return control.value && control.errors && control.errors.isInvalidString;
    }

    onSubmit() {
        const { title } = this.form.value;

        const task: Task = {
            title,
            date: this.dateService.date.value.format('DD-MM-YYYY')
        };

        this.tasksService.create(task)
            .subscribe(_task => {
                this.tasks.push(_task);
                this.form.reset();
            }, err => console.error(err));
    }

    remove(task: Task) {
        this.tasksService.remove(task)
            .subscribe(() => {
                this.tasks = this.tasks.filter(t => t.id !== task.id);
            }, err => console.error(err));
    }

    onTaskChanges($event) {
        this.store.dispatch(new TaskChanges($event));
    }
}
