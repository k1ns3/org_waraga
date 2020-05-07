import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import moment from 'moment';

export interface Task {
    id?: string;
    title: string;
    date?: string;
}

interface CreateResponse {
    name: string;
}

@Injectable({ providedIn: 'root' })
export class TasksService {
    static url = 'https://angular-kursovick.firebaseio.com/tasks';

    constructor(private http: HttpClient) {
    }

    load(date: moment.Moment): Observable<Task[]> { // загрузка данных
        return this.http
            .get<Task[]>(`${TasksService.url}/${date.format('DD-MM-YYYY')}.json`)
            .pipe(map(tasks => {
                if (!tasks) {
                    return [];
                }
                return Object.keys(tasks).map(key => ({ ...tasks[key], id: key }));
            }));
    }

    create(task: Task): Observable<Task> { // создание тасок в таблицу
        return this.http
            .post<CreateResponse>(`${TasksService.url}/${task.date}.json`, task)
            .pipe(map(res => {
                return { ...task, id: res.name };
            }));
    }

    remove(task: Task): Observable<void> { // удаление
        return this.http
            .delete<void>(`${TasksService.url}/${task.date}/${task.id}.json`);
    }

}
