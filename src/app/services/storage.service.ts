import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Guarda cualquier dato con una clave
  async set(key: string, value: any): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error guardando en storage:', error);
    }
  }

  // Obtiene un dato por su clave
  async get(key: string): Promise<any> {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error obteniendo de storage:', error);
      return null;
    }
  }

  // Elimina un dato específico
  async remove(key: string): Promise<void> {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error eliminando de storage:', error);
    }
  }

  // Limpia todo el storage
  async clear(): Promise<void> {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error limpiando storage:', error);
    }
  }

  // Obtiene todas las claves guardadas
  async keys(): Promise<string[]> {
    return Object.keys(localStorage);
  }
}