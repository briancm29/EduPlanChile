import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ← AGREGAR ESTO
import { PlanificacionService, Planificacion } from '../../services/planificacion.service';

@Component({
  selector: 'app-mis-planificaciones',
  templateUrl: './mis-planificaciones.page.html',
  styleUrls: ['./mis-planificaciones.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]  // ← AGREGAR FormsModule
})
export class MisPlanificacionesPage implements OnInit {
  planificaciones: Planificacion[] = [];
  filtro: string = 'todas';

  constructor(
    private planificacionService: PlanificacionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPlanificaciones();
  }

  loadPlanificaciones() {
    this.planificacionService.getPlanificaciones().subscribe(data => {
      this.planificaciones = data;
    });
  }

  get planificacionesFiltradas() {
    if (this.filtro === 'todas') {
      return this.planificaciones;
    }
    return this.planificaciones.filter(p => p.estado === this.filtro);
  }

  crearNueva() {
    this.router.navigate(['/crear-planificacion']);
  }

  verDetalle(id: string) {
    console.log('Ver planificación:', id);
  }
}