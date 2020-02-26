import { Component, OnInit } from '@angular/core';

import { TaskChanges } from '../organaizer.actions';
import { Store, Select } from '@ngxs/store';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
export class OrganizerComponent implements OnInit {
    private _pattern: object;

    form: FormGroup
    tasks: Task[] = []

    @Select(OrganaizerState) form$: Observable<any>;


    constructor(private dateService: DateService,
        private tasksService: TasksService,
        private store: Store) {
        this._pattern = /[a-zA-Z]/g;

        this.form = new FormGroup({
            title: new FormControl('', [Validators.required, stringValidator(this._pattern)])
        });
    }

    ngOnInit() {
        this.dateService.date.pipe(
            switchMap(value => this.tasksService.load(value))
        ).subscribe(tasks => {
            this.tasks = tasks
        })
    }

    isControlInvalid(controlName: string): boolean {
        const control = this.form.controls[controlName];
        return control.value && control.errors && control.errors.isInvalidString;
    }

    onSubmit() {
        const { title } = this.form.value

        const task: Task = {
            title,
            date: this.dateService.date.value.format('DD-MM-YYYY')
        }

        this.tasksService.create(task).subscribe(task => {
            this.tasks.push(task)
            this.form.reset()
        }, err => console.error(err))
    }

    remove(task: Task) {
        this.tasksService.remove(task).subscribe(() => {
            this.tasks = this.tasks.filter(t => t.id !== task.id)
        }, err => console.error(err))
    }

    onTaskChanges($event) {
        this.store.dispatch(new TaskChanges($event));
    }

}
