export class SelectedDay {
    static readonly type = '[DAY] Selected Day';

    constructor(public payload: string) { }
}


export class SelectedMonth {
    static readonly type = '[Month] Change Month';

    constructor(public payload: Array<Object>) { }
}
