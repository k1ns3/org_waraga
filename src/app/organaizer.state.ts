import { Action, Selector, State, StateContext } from "@ngxs/store";
import {
    SelectedDay,
    TaskChanges
} from './organaizer.actions'

interface OrganaizerStateModel {
    Day: any;
    Task: string;
}


@State<OrganaizerStateModel>({
    name: "Organaizer",
    defaults: {
        Day: '',
        Task: ''
    }
})
export class OrganaizerState {
    @Action(SelectedDay)
    selectedDay(ctx: StateContext<OrganaizerStateModel>, { payload }: SelectedDay) {
        ctx.setState((state) => ({ ...state, Day: payload }));
    }

    @Action(TaskChanges)
    taskChanges({ getState, setState }: StateContext<OrganaizerStateModel>, { payload }: TaskChanges) {
        const state = getState();
        setState(({
            ...state,
            Task: payload
        }));
    }
}
