import { Routes } from '@angular/router';



export const routes: Routes = [
  {
  path:'auth',
  children: [
    {
      path:'login',
      loadComponent:() => import('./Feature/Auth/login/login.component')
    },
    {
      path:'register',
      loadComponent: () => import ('./Feature/Auth/register/register.component')
    }
  ]
  },
  /* {
    path:'home',
    loadComponent: () => import ('./Feature/home/home.component'),
  }, */
  {
    path:'**',
    pathMatch: 'full',
    redirectTo:'home',
  }
];

