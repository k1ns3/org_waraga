export class SelectedDay {
    static readonly type = '[DAY] Selected Day';

    constructor(public payload: any) { }
}


export class TaskChanges {
    static readonly type = '[Task] Change Task';

    constructor(public payload: string) { }
}
