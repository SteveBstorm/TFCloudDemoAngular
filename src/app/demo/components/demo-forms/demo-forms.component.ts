import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordMatchValidator } from './validators/passwordMatch.validator';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrl: './demo-forms.component.scss'
})
export class DemoFormsComponent implements OnInit {

  userForm: FormGroup;

  // Attention, importer le module ReactiveFormsModule
  constructor (private fb: FormBuilder) {
    this.userForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: [null, [Validators.required, Validators.minLength(3)]],
        lastName: [null, [Validators.required, Validators.minLength(2)]],
        email: [null, [Validators.required, Validators.email]],
      }),
      // address: this.fb.group({
      //   street: [null, Validators.required],
      //   city: [null, Validators.required],
      //   postalCode: [null, [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      // }),
      password: [null, [this.createPasswordValidator()]],
      confirmPassword: [null, [Validators.required]],
    }, {
      validator: [passwordMatchValidator]
    });
  }

  ngOnInit (): void {
    console.log('this.userForm.value :>> ', this.userForm.value);
  }

  check () {
    console.log('this.userForm :>> ', this.userForm.controls['password'].errors);
  }

  get personalInfo () {
    return this.userForm.get('personalInfo');
  }

  get f () {
    return this.userForm.controls;
  }

  createPasswordValidator (): ValidatorFn | null {

    return Validators.compose([
      Validators.required,
      Validators.minLength(8),
      // Validators.pattern(/\d/),   // Au moins un chiffre
      // Validators.pattern(/[A-Z]/),   // Au moins une majuscule
      // Validators.pattern(/[a-z]/),   // Au moins une minuscule
      // Validators.pattern(/[&@#=!^]/),   // Au moins un caractère spécial

      (control: AbstractControl): ValidationErrors | null => {
        if (!/\d/.test(control.value))
          return { 'digit': { message: 'Le mot de passe doit contenir un chiffre.' } };
        return null;
      },

      (control: AbstractControl): ValidationErrors | null => {
        if (!/[A-Z]/.test(control.value))
          return { 'uppercase': { message: 'Le mot de passe doit contenir une majuscule.' } };
        return null;
      },

      (control: AbstractControl): ValidationErrors | null => {
        if (!/[a-z]/.test(control.value))
          return { 'lowercase': { message: 'Le mot de passe doit contenir une minuscule.' } };
        return null;
      },

      (control: AbstractControl): ValidationErrors | null => {
        if (!/[&@#=!^]/.test(control.value))
          return { 'specialChar': { message: 'Le mot de passe doit contenir un caractère spécial (&@#=!^).' } };
        return null;
      },

    ]);

  }

  onSubmit () {
    
    if (this.userForm.invalid) return;

    console.log(this.userForm.value);

    // Envoi des données dans le service.

  }

}
