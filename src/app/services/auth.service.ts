import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Interface para definir la estructura de un usuario
export interface User {
  id: string;
  email: string;
  nombre: string;
  apellido: string;
  rol: 'docente' | 'coordinador';
}

@Injectable({
  providedIn: 'root'  // Disponible en toda la app
})
export class AuthService {
  // BehaviorSubject: guarda el estado actual y notifica cambios
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor() {
    // Intenta cargar usuario guardado en localStorage
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Obtiene el valor actual del usuario
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  // Verifica si hay un usuario autenticado
  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  // Simula login (en producción, conectarías con API)
  login(email: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      // Simulación: cualquier email/password es válido
      if (email && password) {
        const user: User = {
          id: '1',
          email: email,
          nombre: 'Profesor',
          apellido: 'Demo',
          rol: 'docente'
        };
        
        // Guarda en localStorage para persistencia
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        
        observer.next(true);
        observer.complete();
      } else {
        observer.next(false);
        observer.complete();
      }
    });
  }

  // Cierra sesión
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}