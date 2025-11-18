import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'mis-planificaciones',
        loadChildren: () => import('../mis-planificaciones/mis-planificaciones.module').then(m => m.MisPlanificacionesPageModule)
      },
      {
        path: 'repositorio',
        loadChildren: () => import('../repositorio/repositorio.module').then(m => m.RepositorioPageModule)
      },
      {
        path: 'comunidad',
        loadChildren: () => import('../comunidad/comunidad.module').then(m => m.ComunidadPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}