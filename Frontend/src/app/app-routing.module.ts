import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeScreenComponent} from "./screen/home/home-screen.component";

const routes: Routes = [
  {path:'',component:HomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
