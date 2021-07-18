import { CitasComponent } from './citas/citas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'citas',
    pathMatch: 'full'
  },
  {
    path: 'citas',
    component: CitasComponent
  },
  {
    path:'**',
    redirectTo:'citas'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
