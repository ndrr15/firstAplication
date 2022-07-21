import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { empleadosComponent } from './Empleados/Empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EjemploTirarComponent } from './ejemplo-tirar/ejemplo-tirar.component';

@NgModule({
  declarations: [
    AppComponent, empleadosComponent, EmpleadoComponent, EjemploTirarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
