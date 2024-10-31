import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ageValidator (control: AbstractControl): ValidationErrors | null {

    const today = new Date();
    const birthdate = new Date(control.value);

    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0))
        return age - 1 < 18 ? { age: true } : null;

    return age < 18 ? { age: true } : null;
}

