export class SelectedDay {
    static readonly type = '[DAY] Selected Day';

    constructor(public payload: any) { }
}


export class TaskChanges {
    static readonly type = '[Task] Change Task';

    constructor(public payload: string) { }
}


// export class Validator {
//     static readonly type = '[Bool] Validator value';

//     constructor(public payload: boolean) { }
// }
