import { AbstractControl, ValidationErrors } from "@angular/forms";


export function passwordMatchValidator (control: AbstractControl): ValidationErrors | null {

    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
        // Appliquer l'erreur sur le champ spécifique
        confirmPassword.setErrors({ 'passwordMatch': true });

        // Erreur sur le formulaire entier
        return { 'passwordMatch': true };
    }
    return null;
}