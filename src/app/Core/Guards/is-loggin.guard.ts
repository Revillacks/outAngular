import { CanActivateFn } from "@angular/router";



export const isLogginGuard: CanActivateFn = (route, state) => {
  return true;
}
