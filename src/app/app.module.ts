import { TablaModule } from './tabla/tabla.module';
import { InicioModule } from './inicio/inicio.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InicioModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    TablaModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    MatPaginatorModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
