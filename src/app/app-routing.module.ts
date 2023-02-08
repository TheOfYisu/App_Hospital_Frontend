import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '//home', pathMatch: 'full'},
  {path: '', loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)},
  {path: 'user', loadChildren: () => import('./pages/private/home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
