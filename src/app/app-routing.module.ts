import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)},
 { path: '', loadChildren: () => import('./tabla/tabla.module').then(m => m.TablaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
