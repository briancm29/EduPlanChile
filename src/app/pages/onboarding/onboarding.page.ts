import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnboardingPage implements AfterViewInit {
  @ViewChild('swiper') swiperRef: any;
  currentSlide = 0;

  slides = [
    {
      title: 'Bienvenido a EduPlan Chile',
      description: 'Planifica tus clases alineadas con el currículum MINEDUC',
      icon: 'school-outline'
    },
    {
      title: 'Ahorra Tiempo',
      description: 'Genera planificaciones automáticas basadas en objetivos de aprendizaje',
      icon: 'time-outline'
    },
    {
      title: 'Comparte y Colabora',
      description: 'Accede a una comunidad de docentes y comparte recursos',
      icon: 'people-outline'
    }
  ];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Espera a que Swiper esté listo
    if (this.swiperRef?.nativeElement) {
      const swiper = this.swiperRef.nativeElement.swiper;
      swiper.on('slideChange', () => {
        this.currentSlide = swiper.activeIndex;
      });
    }
  }

  /* Guardado por si acaso
  finish() {
    console.log('Navegando a /tabs/dashboard');
    this.router.navigate(['/tabs/dashboard']);
  }

  skip() {
    console.log('Saltando a /tabs/dashboard');
    this.router.navigate(['/tabs/dashboard']);
  } */

  finish() {
    this.router.navigate(['/tabs/dashboard']);
  }

  skip() {
    this.router.navigate(['/tabs/dashboard']);
  }

  next() {
    if (this.swiperRef?.nativeElement?.swiper) {
      this.swiperRef.nativeElement.swiper.slideNext();
    }
  }
}
