import { Action, State, StateContext } from '@ngxs/store';
import {
    SelectedDay,
    TaskChanges
} from './organaizer.actions';

interface OrganaizerStateModel {
    Day: any;
    Task: string;
}


@State<OrganaizerStateModel>({
    name: 'Organaizer',
    defaults: {
        Day: '',
        Task: '',
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
}
