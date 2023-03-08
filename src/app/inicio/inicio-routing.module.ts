import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '', component: InicioSesionComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InicioRoutingModule { }