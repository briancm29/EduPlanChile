import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Para ngModel en toggles
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]  // Agregar FormsModule
})
export class PerfilPage implements OnInit {
  user: User | null = null;

  // Configuraciones de la app con toggles
  configuraciones = {
    notificaciones: true,
    notificacionesPush: true,
    modoOscuro: false,
    sincronizacionAuto: true,
    descargaWifi: true,
    recordatorios: true
  };

  // Información adicional del usuario
  infoAdicional = {
    establecimiento: 'Escuela Básica República de Chile',
    region: 'Región Metropolitana',
    comuna: 'Santiago',
    rbd: '12345-6',
    especialidad: 'Educación General Básica',
    aniosExperiencia: 8
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.authService.currentUserValue;
    this.cargarConfiguraciones();
  }

  // Cargar configuraciones guardadas
  cargarConfiguraciones() {
    const configGuardada = localStorage.getItem('app-configuraciones');
    if (configGuardada) {
      this.configuraciones = JSON.parse(configGuardada);
    }
  }

  // Guardar configuraciones
  guardarConfiguraciones() {
    localStorage.setItem('app-configuraciones', JSON.stringify(this.configuraciones));
    console.log('Configuraciones guardadas:', this.configuraciones);
  }

  // Handlers para toggles
  toggleNotificaciones(event: any) {
    this.configuraciones.notificaciones = event.detail.checked;
    this.guardarConfiguraciones();
    console.log('Notificaciones:', this.configuraciones.notificaciones);
  }

  toggleNotificacionesPush(event: any) {
    this.configuraciones.notificacionesPush = event.detail.checked;
    this.guardarConfiguraciones();
    console.log('Notificaciones Push:', this.configuraciones.notificacionesPush);
  }

  toggleModoOscuro(event: any) {
    this.configuraciones.modoOscuro = event.detail.checked;
    this.guardarConfiguraciones();
    console.log('Modo Oscuro:', this.configuraciones.modoOscuro);
    // Aquí podrías implementar el cambio de tema real
    this.aplicarTema(this.configuraciones.modoOscuro);
  }

  toggleSincronizacion(event: any) {
    this.configuraciones.sincronizacionAuto = event.detail.checked;
    this.guardarConfiguraciones();
    console.log('Sincronización Auto:', this.configuraciones.sincronizacionAuto);
  }

  toggleDescargaWifi(event: any) {
    this.configuraciones.descargaWifi = event.detail.checked;
    this.guardarConfiguraciones();
    console.log('Descarga WiFi:', this.configuraciones.descargaWifi);
  }

  toggleRecordatorios(event: any) {
    this.configuraciones.recordatorios = event.detail.checked;
    this.guardarConfiguraciones();
    console.log('Recordatorios:', this.configuraciones.recordatorios);
  }

  // Aplicar tema oscuro/claro
  aplicarTema(oscuro: boolean) {
    if (oscuro) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  // Navegar a edición de perfil
  editarPerfil() {
    console.log('Editar perfil');
    // Aquí podrías navegar a una página de edición
    // this.router.navigate(['/editar-perfil']);
  }

  // Cambiar contraseña
  cambiarContrasena() {
    console.log('Cambiar contraseña');
    // Aquí podrías abrir un modal o navegar
  }

  // Ver ayuda
  verAyuda() {
    console.log('Ver ayuda');
    // this.router.navigate(['/ayuda']);
  }

  // Ver acerca de
  verAcercaDe() {
    console.log('Acerca de EduPlan Chile');
    // Aquí podrías mostrar un modal con info de la app
  }

  // Cerrar sesión
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
