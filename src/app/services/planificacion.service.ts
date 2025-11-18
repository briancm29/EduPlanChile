import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';

// Interface para una planificación
export interface Planificacion {
  id: string;
  titulo: string;
  asignatura: string;
  nivel: string;
  unidad: string;
  objetivos: string[];
  fechaCreacion: Date;
  estado: 'borrador' | 'completada' | 'revisada';
}

@Injectable({
  providedIn: 'root'
})
export class PlanificacionService {
  private planificacionesSubject: BehaviorSubject<Planificacion[]>;
  public planificaciones: Observable<Planificacion[]>;
  private readonly STORAGE_KEY = 'planificaciones';

  constructor(private storageService: StorageService) {
    this.planificacionesSubject = new BehaviorSubject<Planificacion[]>([]);
    this.planificaciones = this.planificacionesSubject.asObservable();
    this.loadPlanificaciones();
  }

  // Carga planificaciones desde storage
  private async loadPlanificaciones(): Promise<void> {
    const planificaciones = await this.storageService.get(this.STORAGE_KEY) || [];
    this.planificacionesSubject.next(planificaciones);
  }

  // Guarda planificaciones en storage
  private async savePlanificaciones(): Promise<void> {
    await this.storageService.set(this.STORAGE_KEY, this.planificacionesSubject.value);
  }

  // Obtiene todas las planificaciones
  getPlanificaciones(): Observable<Planificacion[]> {
    return this.planificaciones;
  }

  // Obtiene una planificación por ID
  getPlanificacionById(id: string): Planificacion | undefined {
    return this.planificacionesSubject.value.find(p => p.id === id);
  }

  // Crea nueva planificación
  async createPlanificacion(planificacion: Omit<Planificacion, 'id' | 'fechaCreacion'>): Promise<void> {
    const nuevaPlanificacion: Planificacion = {
      ...planificacion,
      id: Date.now().toString(),
      fechaCreacion: new Date()
    };

    const planificaciones = [...this.planificacionesSubject.value, nuevaPlanificacion];
    this.planificacionesSubject.next(planificaciones);
    await this.savePlanificaciones();
  }

  // Actualiza planificación existente
  async updatePlanificacion(id: string, planificacion: Partial<Planificacion>): Promise<void> {
    const planificaciones = this.planificacionesSubject.value.map(p =>
      p.id === id ? { ...p, ...planificacion } : p
    );
    this.planificacionesSubject.next(planificaciones);
    await this.savePlanificaciones();
  }

  // Elimina planificación
  async deletePlanificacion(id: string): Promise<void> {
    const planificaciones = this.planificacionesSubject.value.filter(p => p.id !== id);
    this.planificacionesSubject.next(planificaciones);
    await this.savePlanificaciones();
  }
}