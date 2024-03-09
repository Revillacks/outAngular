import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validateSoldPrice(control: AbstractControl): ValidationErrors | null {
  const precio = control.get('precio')?.value;
  const precioventa = control.get('precioventa')?.value;

  if ( precioventa <= precio && precioventa >= 0 ) {
    control.get('precioventa')?.setErrors({'isMinor': true});
  }
  return (null);
}
