import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewModule } from './new/new.module';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
