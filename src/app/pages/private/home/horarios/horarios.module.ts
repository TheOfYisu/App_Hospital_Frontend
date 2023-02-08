import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosRoutingModule } from './horarios-routing.module';
import { HorariosMainComponent } from './horarios-main/horarios-main.component';


@NgModule({
  declarations: [
    HorariosMainComponent
  ],
  imports: [
    CommonModule,
    HorariosRoutingModule
  ]
})
export class HorariosModule { }
