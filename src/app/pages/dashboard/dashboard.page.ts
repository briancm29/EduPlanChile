import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { PlanificacionService, Planificacion } from '../../services/planificacion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DashboardPage implements OnInit {
  userName: string = 'Profesor';
  totalPlanificaciones: number = 0;
  planificacionesRecientes: Planificacion[] = [];

  estadisticas = [
    { icon: 'document-text', label: 'Planificaciones', value: '0', color: 'primary' },
    { icon: 'checkmark-circle', label: 'Completadas', value: '0', color: 'success' },
    { icon: 'create', label: 'En Borrador', value: '0', color: 'warning' }
  ];

  constructor(
    private authService: AuthService,
    private planificacionService: PlanificacionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadUserData();
    this.loadPlanificaciones();
  }

  loadUserData() {
    const user = this.authService.currentUserValue;
    if (user) {
      this.userName = user.nombre;
    }
  }

  loadPlanificaciones() {
    this.planificacionService.getPlanificaciones().subscribe(planificaciones => {
      this.totalPlanificaciones = planificaciones.length;
      this.planificacionesRecientes = planificaciones.slice(0, 3);
      
      // Actualizar estadísticas
      this.estadisticas[0].value = planificaciones.length.toString();
      this.estadisticas[1].value = planificaciones.filter(p => p.estado === 'completada').length.toString();
      this.estadisticas[2].value = planificaciones.filter(p => p.estado === 'borrador').length.toString();
    });
  }

  crearNuevaPlanificacion() {
    this.router.navigate(['/crear-planificacion']);
  }

  verTodasPlanificaciones() {
    this.router.navigate(['/tabs/mis-planificaciones']);
  }
}