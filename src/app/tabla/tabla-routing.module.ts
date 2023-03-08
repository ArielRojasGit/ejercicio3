import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: 'tablaUsuario', component: TablaUsuarioComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TablaRoutingModule { }