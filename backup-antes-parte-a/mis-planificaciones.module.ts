import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MisPlanificacionesPageRoutingModule } from './mis-planificaciones-routing.module';
import { MisPlanificacionesPage } from './mis-planificaciones.page';

@NgModule({
  imports: [
    FormsModule,
    MisPlanificacionesPageRoutingModule,
    MisPlanificacionesPage
  ]
})
export class MisPlanificacionesPageModule {}