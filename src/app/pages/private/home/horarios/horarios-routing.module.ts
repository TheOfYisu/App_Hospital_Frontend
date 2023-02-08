import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HorariosMainComponent} from "./horarios-main/horarios-main.component";

const routes: Routes = [
  {path:'',component:HorariosMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorariosRoutingModule { }
