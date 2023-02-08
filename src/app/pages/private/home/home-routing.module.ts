import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../../public/home/home.component";

const routes: Routes = [
  {path:'',component:HomeComponent,
    children:[
      {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
      {path:'horarios',loadChildren:()=>import('./horarios/horarios.module').then(m=>m.HorariosModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
