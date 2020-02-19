import { Action, Selector, State, StateContext } from "@ngxs/store";
import {
    SelectedDay,
    SelectedMonth
} from './organaizer.actions'

interface OrganaizerStateModel {
    Day: any;
    Month: any;
}


@State<OrganaizerStateModel>({
    name: "Organaizer",
    defaults: {
        Day: '',
        Month: ''
    }
})
export class OrganaizerState {
    @Action(SelectedDay)
    selectedDay(ctx: StateContext<OrganaizerStateModel>, { payload }: SelectedDay) {
        ctx.setState((state) => ({ ...state, Day: payload }));
    }
}
