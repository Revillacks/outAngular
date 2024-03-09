import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { validateSoldPrice } from '../../validators/common.validators';


@Component({
  selector: 'app-bazar',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  templateUrl: './bazar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BazarComponent {

  @Input({required: true}) prodSignal!:any;

  public formBazar!: FormGroup
  private fb = inject(FormBuilder)

  public validators = {
    minlength: (mini: number) => `Los caracteres minimos son ${mini}!`,
    required: () => `El campo es requerido!`,
    isMinor: () => `El precio de Venta tiene que ser mayor que el precio`,
    min: (min: number) => `El valor debe ser mayor a ${min - 1}`
  };

  constructor(){
    this.formBazar = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      urlimg: ['', [Validators.required,]],
      precio: ['', [Validators.required, Validators.min(1)]],
      precioventa: ['', [Validators.required,]]
    }, {validators:[validateSoldPrice]})
  }


  public validateController(inputField: string) {
    const input = this.formBazar.get(inputField);
    if (input?.touched) {
      if (input?.hasError('required')) {
        return this.validators.required();
      } else if (input?.hasError('minlength')) {
        return this.validators.minlength(5);
      } else if(input?.hasError('isMinor')){
        return this.validators.isMinor()
      } else if ( input?.hasError('min') ) {
        return this.validators.min(1);
      }
    }
    return null;
  }

  public save(){
    if (this.formBazar.valid){
    const prods= this.prodSignal();
    this.prodSignal.set([...prods,this.formBazar.value])
  }
}

}
