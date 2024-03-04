import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RouterLink, RouterModule
  ],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent {

  public formRegistro!: FormGroup;

  showPassword: boolean = false;

  private fb = inject(FormBuilder);

  public validators = {
    minlength: (min: number) => `Los caracteres minimos son ${min}!`,
    required: () => `El campo es requerido!`,
  };

  constructor(){
    this.formRegistro = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(5),]],
      username: ['', [Validators.required] ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required,]],
    });
  }

  toggleShowPassword(): void {
    this.showPassword =!this.showPassword;
  }


register(){
  if(this.formRegistro.invalid) return;
}

public validateController(inputField: string) {
  const input = this.formRegistro.get(inputField);
  if (input?.touched) {
    if (input?.hasError('required')) {
      return this.validators.required();
    } else if (input?.hasError('minlength')) {
      const requiredLength = input.getError('minlength')?.requiredLength;
      return this.validators.minlength(requiredLength);
    }
  }
  return null;
}


}
