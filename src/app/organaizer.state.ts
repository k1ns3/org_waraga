import { Action, Selector, State, StateContext } from "@ngxs/store";
import {
    SelectedDay,
    TaskChanges,
    // Validator
} from './organaizer.actions'

interface OrganaizerStateModel {
    Day: any;
    Task: string;
    // Valid: boolean;
}


@State<OrganaizerStateModel>({
    name: "Organaizer",
    defaults: {
        Day: '',
        Task: '',
        // Valid: false
    }
})
export class OrganaizerState {
    @Action(SelectedDay)
    selectedDay({ getState, setState }: StateContext<OrganaizerStateModel>, { payload }: SelectedDay) {
        const state = getState();
        setState(({
            ...state,
            Day: payload
        }));
    }

    @Action(TaskChanges)
    taskChanges({ getState, setState }: StateContext<OrganaizerStateModel>, { payload }: TaskChanges) {
        const state = getState();
        setState(({
            ...state,
            Task: payload
        }));
    }

    // @Action(Validator)
    // validator({ getState, setState }: StateContext<OrganaizerStateModel>, { payload }: Validator) {
    //     const state = getState();
    //     setState(({
    //         ...state,
    //         Valid: payload
    //     }));
    // }
}
