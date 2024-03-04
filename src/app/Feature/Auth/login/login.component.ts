import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RouterLink, RouterModule
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent implements OnInit{

  ngOnInit(): void {

  }

  public formLogin!: FormGroup;

  showPassword: boolean = false;

  private fb = inject(FormBuilder);

  public validators = {
    minlength: (min: number) => `Los caracteres minimos son ${min}!`,
    required: () => `El campo es requerido!`,
  };

  constructor(){
    this.formLogin = this.fb.group({
      username: ['', [Validators.required] ],
      password: ['', [Validators.required]],
    });
  }

  toggleShowPassword(): void {
    this.showPassword =!this.showPassword;
  }

  loginpage(){
    if(this.formLogin.invalid) return;
  }

  public validateController(inputField: string) {
    const input = this.formLogin.get(inputField);
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
