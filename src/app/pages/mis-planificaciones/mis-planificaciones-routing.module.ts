import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisPlanificacionesPage } from './mis-planificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisPlanificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisPlanificacionesPageRoutingModule {}