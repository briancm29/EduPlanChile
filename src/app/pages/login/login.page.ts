import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController, LoadingController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

  async onLogin() {
    if (!this.email || !this.password) {
      this.showAlert('Error', 'Por favor complete todos los campos');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
      duration: 2000
    });
    await loading.present();

    this.authService.login(this.email, this.password).subscribe({
      next: async (success: boolean) => {
        await loading.dismiss();
        if (success) {
          this.router.navigate(['/onboarding']);
        } else {
          this.showAlert('Error', 'Credenciales inválidas');
        }
      },
      error: async (error: any) => {
        await loading.dismiss();
        this.showAlert('Error', 'Ocurrió un error al iniciar sesión');
      }
    });
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}