import { Action, Selector, State, StateContext } from "@ngxs/store";
import {
    SelectedDay,
    SelectedMonth
} from './organaizer.actions'

interface OrganaizerStateModel { 
    Day: string;
    Month: string;
    Task: any;
}


@State<OrganaizerStateModel>({
    name: "Organaizer",
    defaults: {
        Day: '',
        Month: '',
        Task: ''
    }
})
export class OrganaizerState {


}
