import { AbstractControl, ValidatorFn } from '@angular/forms';

export function stringValidator(pattern?: object): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        const currentPattern = pattern || /[a-zA-Z]/g;
        const str = control.value;

        return str.match(currentPattern) ? { isInvalidString: true } : null;
    };
}
