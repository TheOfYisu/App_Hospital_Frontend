import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'servicios', loadChildren: () => import('./servicios/servicios.module').then(m => m.ServiciosModule)},
      {path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)},
      {path: 'contactenos', loadChildren: () => import('./contactenos/contactenos.module').then(m => m.ContactenosModule)},
      {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
      {path: 'nosotros', loadChildren: () => import('./nosotros/nosotros.module').then(m => m.NosotrosModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
