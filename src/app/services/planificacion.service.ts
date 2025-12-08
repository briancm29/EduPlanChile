import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Planificacion {
  id: string;
  titulo: string;
  asignatura: string;
  nivel: string;
  unidad: string;
  estado: 'borrador' | 'completada';
  fechaCreacion: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PlanificacionService {

  // Datos mock de planificaciones
  private planificacionesMock: Planificacion[] = [
    {
      id: '1',
      titulo: 'Los Números hasta el 1000',
      asignatura: 'Matemáticas',
      nivel: '3° Básico',
      unidad: 'Unidad 1: Numeración',
      estado: 'completada',
      fechaCreacion: new Date('2024-03-15')
    },
    {
      id: '2',
      titulo: 'Comprensión Lectora de Textos Narrativos',
      asignatura: 'Lenguaje y Comunicación',
      nivel: '4° Básico',
      unidad: 'Unidad 2: Lectura y Escritura',
      estado: 'completada',
      fechaCreacion: new Date('2024-03-18')
    },
    {
      id: '3',
      titulo: 'El Sistema Solar y los Planetas',
      asignatura: 'Ciencias Naturales',
      nivel: '5° Básico',
      unidad: 'Unidad 3: Tierra y Universo',
      estado: 'borrador',
      fechaCreacion: new Date('2024-03-20')
    },
    {
      id: '4',
      titulo: 'Civilizaciones Precolombinas de Chile',
      asignatura: 'Historia y Geografía',
      nivel: '6° Básico',
      unidad: 'Unidad 1: Pueblos Originarios',
      estado: 'borrador',
      fechaCreacion: new Date('2024-03-22')
    },
    {
      id: '5',
      titulo: 'Adición y Sustracción de Fracciones',
      asignatura: 'Matemáticas',
      nivel: '5° Básico',
      unidad: 'Unidad 2: Operaciones con Fracciones',
      estado: 'completada',
      fechaCreacion: new Date('2024-03-25')
    },
    {
      id: '6',
      titulo: 'El Ciclo del Agua',
      asignatura: 'Ciencias Naturales',
      nivel: '3° Básico',
      unidad: 'Unidad 4: Agua en la Naturaleza',
      estado: 'borrador',
      fechaCreacion: new Date('2024-03-28')
    },
    {
      id: '7',
      titulo: 'La Independencia de Chile',
      asignatura: 'Historia y Geografía',
      nivel: '6° Básico',
      unidad: 'Unidad 3: Formación de la República',
      estado: 'completada',
      fechaCreacion: new Date('2024-04-01')
    },
    {
      id: '8',
      titulo: 'Producción de Textos Descriptivos',
      asignatura: 'Lenguaje y Comunicación',
      nivel: '5° Básico',
      unidad: 'Unidad 3: Escritura Creativa',
      estado: 'borrador',
      fechaCreacion: new Date('2024-04-05')
    }
  ];

  constructor() { }

  // Método para obtener todas las planificaciones
  getPlanificaciones(): Observable<Planificacion[]> {
    return of(this.planificacionesMock);
  }

  // Método para obtener una planificación por ID
  getPlanificacionById(id: string): Observable<Planificacion | undefined> {
    const planificacion = this.planificacionesMock.find(p => p.id === id);
    return of(planificacion);
  }

  // Método para agregar una nueva planificación
  addPlanificacion(planificacion: Planificacion): Observable<Planificacion> {
    this.planificacionesMock.push(planificacion);
    return of(planificacion);
  }

  // Método para actualizar una planificación
  updatePlanificacion(planificacion: Planificacion): Observable<Planificacion> {
    const index = this.planificacionesMock.findIndex(p => p.id === planificacion.id);
    if (index !== -1) {
      this.planificacionesMock[index] = planificacion;
    }
    return of(planificacion);
  }

  // Método para eliminar una planificación
  deletePlanificacion(id: string): Observable<boolean> {
    const index = this.planificacionesMock.findIndex(p => p.id === id);
    if (index !== -1) {
      this.planificacionesMock.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}