import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanificacionService, Planificacion } from '../../services/planificacion.service';

@Component({
  selector: 'app-mis-planificaciones',
  templateUrl: './mis-planificaciones.page.html',
  styleUrls: ['./mis-planificaciones.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MisPlanificacionesPage implements OnInit {
  planificaciones: Planificacion[] = [];
  filtro: string = 'todas';
  
  // NUEVO: Para búsqueda
  terminoBusqueda: string = '';

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

  // NUEVO: Método para refresh (pull to refresh)
  async handleRefresh(event: any) {
    console.log('Actualizando planificaciones...');
    
    // Simular carga de datos (en producción llamarías al servicio)
    setTimeout(() => {
      this.loadPlanificaciones();
      event.target.complete();
      console.log('Planificaciones actualizadas');
    }, 1500);
  }

  // MEJORADO: Filtrar por estado Y por búsqueda
  get planificacionesFiltradas() {
    let resultado = this.planificaciones;

    // Filtrar por estado
    if (this.filtro !== 'todas') {
      resultado = resultado.filter(p => p.estado === this.filtro);
    }

    // NUEVO: Filtrar por término de búsqueda
    if (this.terminoBusqueda.trim() !== '') {
      const termino = this.terminoBusqueda.toLowerCase();
      resultado = resultado.filter(p => 
        p.titulo.toLowerCase().includes(termino) ||
        p.asignatura.toLowerCase().includes(termino) ||
        p.nivel.toLowerCase().includes(termino) ||
        p.unidad.toLowerCase().includes(termino)
      );
    }

    return resultado;
  }

  // NUEVO: Handler para el searchbar
  handleSearch(event: any) {
    this.terminoBusqueda = event.target.value || '';
  }

  // NUEVO: Limpiar búsqueda
  limpiarBusqueda() {
    this.terminoBusqueda = '';
  }

  crearNueva() {
    this.router.navigate(['/crear-planificacion']);
  }

  verDetalle(id: string) {
    console.log('Ver planificación:', id);
    // Aquí podrías navegar a una página de detalle
    // this.router.navigate(['/detalle-planificacion', id]);
  }

  // NUEVO: Obtener color según estado
  getColorEstado(estado: string): string {
    switch(estado) {
      case 'completada':
        return 'success';
      case 'borrador':
        return 'warning';
      case 'revision':
        return 'tertiary';
      default:
        return 'medium';
    }
  }

  // NUEVO: Obtener icono según estado
  getIconoEstado(estado: string): string {
    switch(estado) {
      case 'completada':
        return 'checkmark-circle';
      case 'borrador':
        return 'create-outline';
      case 'revision':
        return 'time-outline';
      default:
        return 'document-text-outline';
    }
  }
}
