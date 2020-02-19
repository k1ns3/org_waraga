export class SelectedDay {
    static readonly type = '[DAY] Selected Day';

    constructor(public payload: any) { }
}


export class SelectedMonth {
    static readonly type = '[Month] Change Month';

    constructor(public payload: any) { }
}
