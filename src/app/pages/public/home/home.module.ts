import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    ServiciosComponent,
    ContactenosComponent,
    InicioComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
