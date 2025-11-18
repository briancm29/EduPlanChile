import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.page.html',
  styleUrls: ['./repositorio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RepositorioPage {
  recursos = [
    { titulo: 'Plantillas de Planificación', icon: 'document-text', color: 'primary' },
    { titulo: 'Objetivos de Aprendizaje', icon: 'list', color: 'secondary' },
    { titulo: 'Indicadores de Evaluación', icon: 'checkmark-circle', color: 'success' },
    { titulo: 'Recursos Didácticos', icon: 'book', color: 'tertiary' }
  ];
}