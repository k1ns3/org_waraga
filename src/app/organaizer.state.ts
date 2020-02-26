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
    taskChanges(ctx: StateContext<OrganaizerStateModel>, { payload }: TaskChanges) {
        ctx.setState((state) => ({ ...state, Task: payload }));
    }
}
