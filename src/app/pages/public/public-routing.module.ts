import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'login',loadChildren:()=>import('./home/login/login.module').then(m=>m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
