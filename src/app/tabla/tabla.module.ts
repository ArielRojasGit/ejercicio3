import { MatPaginatorModule } from '@angular/material/paginator';
import { TablaRoutingModule } from './tabla-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, NgModel } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';






@NgModule({
  declarations: [
    TablaUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    TablaRoutingModule,
    MatPaginatorModule
  ],
exports:[
  TablaUsuarioComponent

]
})
export class TablaModule { }
