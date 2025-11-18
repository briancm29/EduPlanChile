import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ComunidadPage {
  publicaciones = [
    { autor: 'María González', asignatura: 'Matemáticas', texto: 'Compartiendo estrategias para enseñar fracciones', fecha: new Date() },
    { autor: 'Juan Pérez', asignatura: 'Lenguaje', texto: 'Nuevas técnicas de comprensión lectora', fecha: new Date() }
  ];
}