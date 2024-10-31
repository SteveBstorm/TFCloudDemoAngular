import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ageValidator } from './birthdate.validator';

@Component({
  selector: 'app-exo-forms',
  templateUrl: './exo-forms.component.html',
  styleUrl: './exo-forms.component.scss'
})
export class ExoFormsComponent {

  fg: FormGroup;

  constructor (private fb: FormBuilder) {
    this.fg = this.fb.group({
      birthdate: [null, [Validators.required, ageValidator]]
    });
  }

  onSubmit () {

    if (!this.fg.valid) return;

    console.log('this.fg.value :>> ', this.fg.value);

  }

}
