# EduPlan Chile - Aplicación Móvil de Planificación Curricular

## 📱 Descripción del Proyecto

**EduPlan Chile** es una aplicación móvil desarrollada con Ionic/Angular que permite a los docentes chilenos crear, gestionar y compartir planificaciones curriculares alineadas con los estándares del MINEDUC (Ministerio de Educación de Chile).

Este proyecto corresponde al desarrollo de la **cáscara de navegación** de la aplicación, implementando toda la estructura de navegación, páginas principales y flujo de usuario sin contenido dinámico complejo.

---

## 🎓 Información Académica

- **Institución:** Universidad UNIACC
- **Asignatura:** Taller de Dispositivos Móviles
- **Estudiante:** Brian Castro Morales
- **Profesor:** Jose Luis Pino Cofre
- **Fecha:** Noviembre 2025

---

## 🎯 Objetivos Cumplidos

### ✅ Requisitos Implementados

1. **Cáscara de Navegación Completa**
   - Sistema de navegación con 9 páginas funcionales
   - Flujo de autenticación (Login → Onboarding → Dashboard)
   - Navegación por tabs con 5 secciones principales

2. **Estructura de Ionic/Angular**
   - Arquitectura standalone components (moderna)
   - Lazy loading para optimización de carga
   - Routing anidado correctamente implementado

3. **Páginas Implementadas**
   - Login con validación básica
   - Onboarding con 3 slides informativos
   - Dashboard con estadísticas visuales
   - Mis Planificaciones (lista de planificaciones)
   - Crear Planificación (preparado para formulario)
   - Repositorio de recursos
   - Comunidad de docentes
   - Perfil de usuario
   - Tabs (contenedor de navegación)

4. **Servicios Core**
   - AuthService: Gestión de autenticación
   - StorageService: Persistencia local
   - PlanificacionService: Gestión de planificaciones

5. **Guards de Seguridad**
   - AuthGuard: Protección de rutas privadas

---

## 🏗️ Arquitectura del Proyecto

```
EduPlanChile/
├── src/
│   ├── app/
│   │   ├── guards/              # Guards de autenticación
│   │   │   └── auth.guard.ts
│   │   ├── pages/               # Páginas de la aplicación
│   │   │   ├── login/
│   │   │   ├── onboarding/
│   │   │   ├── tabs/
│   │   │   ├── dashboard/
│   │   │   ├── mis-planificaciones/
│   │   │   ├── crear-planificacion/
│   │   │   ├── repositorio/
│   │   │   ├── comunidad/
│   │   │   └── perfil/
│   │   ├── services/            # Servicios compartidos
│   │   │   ├── auth.service.ts
│   │   │   ├── storage.service.ts
│   │   │   └── planificacion.service.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/                  # Recursos estáticos
│   ├── theme/                   # Estilos globales
│   └── global.scss             # Estilos globales de la app
├── angular.json
├── ionic.config.json
├── package.json
└── README.md
```

---

## 🗺️ Mapa de Navegación

```
┌─────────────┐
│   Login     │ (Pública)
└─────┬───────┘
      │
      ▼
┌─────────────┐
│ Onboarding  │ (Pública, 3 slides)
└─────┬───────┘
      │
      ▼
┌─────────────────────────────────────────┐
│              Tabs                        │ (Privada, requiere auth)
├─────────┬──────────┬──────────┬─────────┤
│Dashboard│Mis Planes│Repositorio│Comunidad│Perfil
└─────────┴──────────┴──────────┴─────────┘
```

---

## 🚀 Instalación y Ejecución

### Requisitos Previos

Asegúrate de tener instalado:

1. **Node.js** (versión 18 o superior)
   - Descarga: https://nodejs.org/
   - Verifica: `node --version`

2. **npm** (viene con Node.js)
   - Verifica: `npm --version`

3. **Ionic CLI** (instalación global)
   ```bash
   npm install -g @ionic/cli
   ```

### Pasos de Instalación

#### 1. Clonar el repositorio

```bash
git clone [URL_DEL_REPOSITORIO]
cd EduPlanChile
```

#### 2. Instalar dependencias

```bash
npm install
```

Este comando instalará automáticamente todas las dependencias necesarias especificadas en `package.json`:
- @angular/core ~18.x
- @ionic/angular ~8.x
- swiper (para slides modernos)
- rxjs (para programación reactiva)
- Y todas sus dependencias transitivas

#### 3. Ejecutar la aplicación

**Modo desarrollo (con hot-reload):**
```bash
ionic serve
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:8100`

**Modo desarrollo con logs detallados:**
```bash
ionic serve --verbose
```

#### 4. Construir para producción (opcional)

```bash
ionic build --prod
```

Los archivos compilados estarán en la carpeta `www/`

---

## 🔑 Credenciales de Prueba

La aplicación utiliza autenticación simulada para propósitos académicos.

**Puedes usar cualquier combinación de email/contraseña**, por ejemplo:

- **Email:** `profesor@liceo.cl`
- **Contraseña:** `123456`

El sistema validará que ambos campos no estén vacíos y permitirá el acceso.

---

## 🎨 Diseño y Estilos

### Paleta de Colores

La aplicación utiliza los colores oficiales del MINEDUC:

- **Primario:** `#1976D2` (Azul MINEDUC)
- **Success:** Verde para estados completados
- **Warning:** Amarillo para borradores
- **Danger:** Rojo para errores/cerrar sesión

### Componentes Ionic Utilizados

- `ion-header`, `ion-toolbar`, `ion-title`
- `ion-content`, `ion-padding`
- `ion-button`, `ion-icon`
- `ion-input`, `ion-item`, `ion-label`
- `ion-card`, `ion-card-header`, `ion-card-content`
- `ion-tabs`, `ion-tab-bar`, `ion-tab-button`
- `ion-chip`, `ion-segment`
- `ion-avatar`, `ion-list`
- `ion-fab`, `ion-fab-button`
- `ion-alert`, `ion-loading`
- `swiper-container`, `swiper-slide` (reemplazo moderno de ion-slides)

---

## 📱 Funcionalidades Implementadas

### 1. Sistema de Autenticación
- Login con validación de campos
- Persistencia de sesión en localStorage
- Guard que protege rutas privadas
- Logout funcional

### 2. Onboarding
- 3 slides informativos sobre la aplicación
- Navegación por swipe o botones
- Opción de saltar directamente al dashboard

### 3. Dashboard
- Saludo personalizado con nombre del usuario
- 3 tarjetas de estadísticas:
  - Total de planificaciones
  - Planificaciones completadas
  - Planificaciones en borrador
- Botón de acción rápida para crear nueva planificación
- Lista de planificaciones recientes (vacía inicialmente)
- Estado vacío amigable cuando no hay datos

### 4. Mis Planificaciones
- Filtros por estado (Todas/Borradores/Completadas)
- Lista de planificaciones con información resumida
- Indicadores visuales de estado con chips de colores
- Botón FAB para crear nueva planificación
- Estado vacío con call-to-action

### 5. Repositorio
- Lista de recursos disponibles
- Categorías: Plantillas, Objetivos, Indicadores, Recursos Didácticos
- Preparado para integración futura con contenido MINEDUC

### 6. Comunidad
- Vista de foro simplificada
- Publicaciones de ejemplo de otros docentes
- Preparado para sistema de comentarios y likes

### 7. Perfil
- Información del usuario (nombre, email, rol)
- Avatar personalizable
- Opciones de configuración
- Botón de cerrar sesión funcional

### 8. Navegación por Tabs
- 5 tabs en la parte inferior
- Iconos intuitivos para cada sección
- Indicador visual de tab activo
- Navegación fluida entre secciones

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Ionic | 8.x | Framework móvil híbrido |
| Angular | 18.x | Framework frontend |
| TypeScript | 5.x | Lenguaje de programación |
| Capacitor | Incluido | Para funcionalidades nativas |
| Swiper | Latest | Carrusel de slides moderno |
| RxJS | 7.x | Programación reactiva |
| SCSS | - | Preprocesador CSS |

---

## 🐛 Problemas Enfrentados y Soluciones

### 1. **Componentes Standalone vs NgModules**

**Problema:** El CLI de Ionic generaba componentes con configuración standalone implícita, causando conflictos con la arquitectura de módulos tradicional.

**Solución:** 
- Se optó por adoptar la arquitectura **standalone components** (moderna en Angular 14+)
- Se eliminó el uso de `declarations: []` en módulos
- Se utilizó `imports: []` para incluir componentes standalone
- Cada página mantiene su módulo wrapper para lazy loading

**Código aplicado:**
```typescript
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage { }
```

---

### 2. **Deprecación de ion-slides**

**Problema:** `ion-slides` fue eliminado en Ionic 6+, causando errores de compilación en la página de Onboarding.

**Solución:**
- Instalación de Swiper: `npm install swiper`
- Reemplazo de `<ion-slides>` por `<swiper-container>`
- Registro de Web Components con `register()` de swiper
- Uso de `CUSTOM_ELEMENTS_SCHEMA` para permitir elementos personalizados

**Código aplicado:**
```typescript
import { register } from 'swiper/element/bundle';
register();

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

---

### 3. **Binding de ngModel en componentes standalone**

**Problema:** Error `Can't bind to 'ngModel'` en ion-segment de Mis Planificaciones.

**Solución:**
- Importar explícitamente `FormsModule` en el decorador del componente standalone
- Angular requiere FormsModule para directivas como `[(ngModel)]`

**Código aplicado:**
```typescript
@Component({
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
```

---

### 4. **Rutas anidadas en Tabs**

**Problema:** La navegación `/tabs/dashboard` no se resolvía correctamente.

**Solución:**
- Configuración correcta de rutas hijas en `tabs-routing.module.ts`
- Uso de `children: []` para definir subrutas
- Ruta por defecto con `redirectTo: 'dashboard'`

**Código aplicado:**
```typescript
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'dashboard', loadChildren: ... },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
```

---

### 5. **Warnings de Sass @import**

**Problema:** Warnings de deprecación al usar `@import` para estilos de Swiper.

**Solución:**
- Mantener `@import` ya que `@use` requiere estar al inicio del archivo
- Los warnings no afectan la funcionalidad
- Solución definitiva: migrar a `@use` en versión futura de Sass

---

### 6. **Persistencia de autenticación**

**Problema:** Al recargar la página, la sesión se perdía.

**Solución:**
- Uso de `localStorage` para guardar token de usuario
- Inicialización del `BehaviorSubject` desde localStorage en el constructor
- Verificación de sesión en el `AuthGuard`

**Código aplicado:**
```typescript
constructor() {
  const storedUser = localStorage.getItem('currentUser');
  this.currentUserSubject = new BehaviorSubject<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );
}
```

---

### 7. **Hot Reload en desarrollo**

**Problema:** Algunos cambios no se reflejaban automáticamente.

**Solución:**
- Reiniciar servidor con `Ctrl+C` y `ionic serve`
- Limpiar caché con `Remove-Item -Recurse -Force .angular`
- Usar `ionic serve --verbose` para debugging

---

## 💭 Consideraciones del Desarrollo

### Contexto del Proyecto

Este proyecto se desarrolló como primera experiencia práctica con Ionic Framework y arquitectura móvil híbrida. El objetivo académico era crear una **cáscara de navegación funcional** que implementara el mapa de navegación diseñado previamente, sin necesidad de lógica de negocio compleja.

### Decisiones Técnicas Tomadas

#### 1. Arquitectura: Standalone Components vs NgModules

**Decisión:** Optar por Standalone Components (Angular 14+)

**Contexto:** Durante la creación inicial del proyecto, el CLI de Ionic generaba componentes con una configuración implícita de standalone que causaba conflictos con la arquitectura tradicional de NgModules.

**Razonamiento:**
- Standalone components es la dirección futura de Angular
- Menos boilerplate y código más limpio
- Imports explícitos facilitan el entendimiento
- Mejor preparado para actualizaciones futuras del framework

**Impacto:** Cambió la estructura de cada página, requiriendo imports explícitos en el decorador `@Component` en lugar de declarations en módulos.

**Aprendizaje:** La arquitectura moderna de Angular simplifica el desarrollo pero requiere un cambio de mentalidad sobre cómo se organizan los componentes.

---

#### 2. Manejo de Slides: Migración de ion-slides a Swiper

**Decisión:** Usar Swiper.js en lugar de ion-slides

**Contexto:** La página de Onboarding originalmente usaba `<ion-slides>` que fue deprecado en Ionic 6.

**Desafío:** Error de compilación: `'ion-slides' is not a known element`

**Proceso de solución:**
1. Investigación en documentación oficial de Ionic
2. Descubrimiento de que ion-slides fue removido
3. Instalación de Swiper: `npm install swiper`
4. Implementación con Web Components
5. Registro de Swiper: `register()` from 'swiper/element/bundle'
6. Uso de `CUSTOM_ELEMENTS_SCHEMA` para elementos custom

**Código implementado:**
```typescript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register(); // Registra componentes Swiper globalmente

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

**Aprendizaje:** Las tecnologías web evolucionan rápidamente. Es importante consultar documentación actualizada y estar preparado para migraciones.

---

#### 3. Gestión de Estado: BehaviorSubject vs Simple Variables

**Decisión:** Usar RxJS BehaviorSubject para estado reactivo

**Contexto:** Necesidad de compartir el estado de autenticación entre componentes y mantener la UI sincronizada.

**Razonamiento:**
- Patrón observable permite suscripciones reactivas
- BehaviorSubject mantiene el valor actual accesible síncronamente
- Facilita la implementación futura de features como notificaciones en tiempo real

**Implementación:**
```typescript
private currentUserSubject: BehaviorSubject<User | null>;
public currentUser: Observable<User | null>;

constructor() {
  const storedUser = localStorage.getItem('currentUser');
  this.currentUserSubject = new BehaviorSubject<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );
  this.currentUser = this.currentUserSubject.asObservable();
}
```

**Aprendizaje:** La programación reactiva con RxJS es poderosa pero requiere comprender conceptos como observables, subjects y suscripciones.

---

#### 4. Persistencia: localStorage vs Capacitor Storage

**Decisión:** Usar localStorage con abstracción en StorageService

**Contexto:** Necesidad de persistir sesión del usuario entre recargas.

**Razonamiento:**
- localStorage es suficiente para la fase de cáscara
- StorageService provee abstracción que facilita migración futura
- Capacitor Storage puede implementarse después sin cambiar la interfaz

**Ventajas:**
- Implementación inmediata sin configuración adicional
- Compatible con navegador para desarrollo
- Fácil de probar y debuggear

**Preparado para el futuro:**
```typescript
// Actual
localStorage.setItem(key, value);

// Futuro (mismo código del servicio)
await Preferences.set({ key, value }); // Capacitor
```

**Aprendizaje:** Abstraer dependencias desde el inicio facilita migraciones futuras sin refactoring masivo.

---

#### 5. Routing: Lazy Loading para Optimización

**Decisión:** Implementar lazy loading en todas las rutas

**Contexto:** Ionic recomienda lazy loading para aplicaciones escalables.

**Implementación:**
```typescript
{
  path: 'dashboard',
  loadChildren: () => import('./pages/dashboard/dashboard.module')
    .then(m => m.DashboardPageModule)
}
```

**Beneficios medidos:**
- Bundle inicial: 4.98 MB
- Páginas individuales: 13-18 KB cada una
- Carga inicial más rápida al cargar solo lo necesario

**Aprendizaje:** El lazy loading es esencial para aplicaciones móviles donde el rendimiento y el uso de datos son críticos.

---

### Desafíos Técnicos Superados

#### Desafío 1: Configuración Inicial del Entorno

**Problema:** Primera vez trabajando con Ionic CLI y su ecosistema.

**Manifestación:**
- Confusión entre Ionic, Angular, Capacitor y Cordova
- Dudas sobre cuál template usar (blank, tabs, sidemenu)
- Incertidumbre sobre standalone vs módulos

**Solución:**
1. Lectura de documentación oficial de Ionic
2. Comparación de templates disponibles
3. Elección de "blank" para control total
4. Iteración y aprendizaje progresivo

**Tiempo invertido:** ~2 horas de setup y comprensión

**Lección:** Invertir tiempo en setup correcto ahorra horas de refactoring posterior.

---

#### Desafío 2: Errores de Compilación con Standalone

**Problema:** `Component is standalone, and cannot be declared in an NgModule`

**Contexto:** El CLI generaba componentes standalone implícitamente pero los módulos intentaban declararlos.

**Intentos de solución:**
1. ❌ Intentar forzar NgModules tradicionales
2. ❌ Eliminar decorador `@Component`
3. ✅ Adoptar arquitectura standalone completamente

**Solución final:**
```typescript
// En módulos, importar en lugar de declarar
@NgModule({
  imports: [
    LoginPageRoutingModule,
    LoginPage  // Importado, no declarado
  ]
})
```

**Tiempo invertido:** ~3 horas de debugging

**Lección:** A veces es mejor adoptar el patrón que el framework sugiere que luchar contra él.

---

#### Desafío 3: Binding de ngModel en Componentes Standalone

**Problema:** `Can't bind to 'ngModel' since it isn't a known property`

**Contexto:** FormsModule no estaba disponible en componente standalone.

**Diagnóstico:**
- Componentes standalone no heredan módulos del padre
- Cada componente debe importar sus dependencias explícitamente

**Solución:**
```typescript
@Component({
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]  // ← Explícito
})
```

**Tiempo invertido:** ~30 minutos

**Lección:** Con standalone, cada componente es autocontenido. Los imports deben ser explícitos.

---

#### Desafío 4: Navegación Anidada con Tabs

**Problema:** `Cannot match any routes. URL Segment: 'tabs/dashboard'`

**Contexto:** La estructura de tabs con rutas hijas no estaba configurada correctamente.

**Diagnóstico:**
1. Verificación de que todas las páginas existían
2. Revisión de paths en routing modules
3. Identificación de error en configuración de children

**Solución:**
```typescript
{
  path: '',
  component: TabsPage,
  children: [  // ← Rutas hijas necesarias
    {
      path: 'dashboard',
      loadChildren: () => import(...)
    },
    {
      path: '',
      redirectTo: 'dashboard',  // ← Ruta por defecto
      pathMatch: 'full'
    }
  ]
}
```

**Tiempo invertido:** ~1 hora

**Lección:** El routing anidado requiere configuración explícita de children y rutas por defecto.

---

#### Desafío 5: Persistencia de Sesión

**Problema:** Al recargar el navegador, la sesión se perdía y redirigía a login.

**Contexto:** El estado del usuario solo existía en memoria.

**Solución implementada:**

**1. Guardar en localStorage al hacer login:**
```typescript
login(email: string, password: string): Observable<boolean> {
  const user = { id: '1', email, nombre: 'Profesor', ... };
  localStorage.setItem('currentUser', JSON.stringify(user));
  this.currentUserSubject.next(user);
  return of(true);
}
```

**2. Recuperar al inicializar el servicio:**
```typescript
constructor() {
  const storedUser = localStorage.getItem('currentUser');
  this.currentUserSubject = new BehaviorSubject<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );
}
```

**3. Verificar en el guard:**
```typescript
canActivate(): boolean {
  return this.authService.isAuthenticated();
}
```

**Tiempo invertido:** ~45 minutos

**Lección:** La persistencia de estado es crucial para UX. localStorage es simple y efectivo para MVP.

---

### Estrategias de Debugging Utilizadas

#### 1. Console Logs Estratégicos

Usados para trazar el flujo de navegación:
```typescript
console.log('🔑 Login attempt:', email);
console.log('✅ User authenticated:', user);
console.log('🚀 Navigating to:', route);
```

#### 2. Chrome DevTools

**Network tab:**
- Verificar carga de lazy-loaded chunks
- Identificar archivos faltantes

**Console tab:**
- Errores de compilación Angular
- Warnings de Ionic

**Application tab:**
- Inspeccionar localStorage
- Verificar persistencia de datos

#### 3. Ionic DevTools

**ionic serve --verbose:**
- Logs detallados de compilación
- Identificación de módulos faltantes

**Hot Reload:**
- Desarrollo iterativo rápido
- Feedback inmediato de cambios

#### 4. Approach Sistemático

Al enfrentar errores:
1. **Leer el error completo** (no solo la primera línea)
2. **Identificar el archivo y línea exacta**
3. **Googlear el código de error** (ej: NG8002)
4. **Consultar documentación oficial**
5. **Probar solución incremental**
6. **Verificar que no rompe otras partes**

---

### Lecciones Aprendidas

#### Técnicas

1. **Standalone components simplifican el código** pero requieren imports explícitos en cada componente.

2. **Lazy loading es esencial** para aplicaciones móviles escalables, aunque agrega complejidad en la configuración inicial.

3. **RxJS y observables** son poderosos para estado reactivo pero tienen curva de aprendizaje.

4. **Ionic evoluciona rápido**: Componentes como ion-slides se deprecan. Importante mantenerse actualizado.

5. **TypeScript estricto ayuda**: Los tipos previenen errores antes de ejecutar.

#### Metodológicas

1. **Leer documentación oficial primero** ahorra tiempo vs. depender solo de tutoriales externos.

2. **Desarrollo incremental**: Crear una página, probar, luego siguiente. No todo a la vez.

3. **Git commits frecuentes**: Permiten revertir si algo se rompe.

4. **Abstracciones tempranas** (como StorageService) facilitan cambios futuros.

5. **Testing manual sistemático**: Probar cada flujo después de cada cambio importante.

#### De Proceso

1. **El setup inicial toma tiempo** pero vale la pena hacerlo bien.

2. **Los errores son oportunidades de aprendizaje**: Cada error resuelto profundiza el entendimiento.

3. **La iteración es natural**: No esperaba usar standalone components al inicio, pero resultó ser la mejor decisión.

4. **Documentar mientras desarrollas** es más fácil que documentar al final.

5. **Pedir ayuda está bien**: Consultar documentación, foros y recursos es parte del desarrollo profesional.

---

### Métricas del Desarrollo

**Tiempo total invertido:** ~12 horas

**Desglose:**
- Setup inicial y aprendizaje: 2 horas
- Creación de servicios y guards: 1 hora
- Desarrollo de páginas: 4 horas
- Debugging y resolución de errores: 3 horas
- Documentación: 2 horas

**Líneas de código:**
- TypeScript: ~1,500 líneas
- HTML: ~800 líneas
- SCSS: ~600 líneas
- Total: ~2,900 líneas

**Archivos creados:** 45+ archivos

**Commits realizados:** 1 commit principal (entrega final)

---

### Reflexión Final

Este proyecto fue una excelente introducción al desarrollo móvil híbrido con Ionic/Angular. Los principales desafíos no fueron técnicos en sí, sino conceptuales: entender la arquitectura de componentes standalone, el flujo de routing anidado, y la programación reactiva con RxJS.

La decisión de adoptar standalone components, aunque inicialmente confusa, resultó ser acertada ya que:
- Es el futuro de Angular
- El código es más limpio y mantenible
- Los imports explícitos hacen el código más autodocumentado

El uso de servicios con observables preparó la aplicación para ser escalable, permitiendo agregar funcionalidades complejas en el futuro sin refactoring mayor.

La experiencia de enfrentar y resolver errores de compilación, routing, y configuración fortaleció la capacidad de debugging y búsqueda de soluciones, habilidades esenciales para cualquier desarrollador.

El proyecto cumple exitosamente con el objetivo de crear una **cáscara de navegación completa y funcional**, lista para ser poblada con lógica de negocio y contenido en iteraciones futuras.

---

## 📂 Estructura de Archivos Clave

### Configuración Principal

- **`package.json`**: Dependencias y scripts del proyecto
- **`angular.json`**: Configuración de Angular CLI
- **`ionic.config.json`**: Configuración de Ionic
- **`tsconfig.json`**: Configuración de TypeScript

### Servicios Core

- **`auth.service.ts`**: Gestión de autenticación, login, logout, estado de usuario
- **`storage.service.ts`**: Abstracción de localStorage para persistencia
- **`planificacion.service.ts`**: CRUD de planificaciones con RxJS

### Guards

- **`auth.guard.ts`**: Protección de rutas privadas, redirección a login

### Páginas

Cada página sigue la estructura:
```
nombre-pagina/
├── nombre-pagina.page.ts        # Lógica del componente
├── nombre-pagina.page.html      # Template
├── nombre-pagina.page.scss      # Estilos
├── nombre-pagina-routing.module.ts  # Rutas
└── nombre-pagina.module.ts      # Módulo wrapper
```

---

## 🧪 Testing

### Pruebas Manuales Realizadas

1. **Flujo de Autenticación**
   - ✅ Login con campos vacíos muestra alerta
   - ✅ Login exitoso redirige a Onboarding
   - ✅ Sesión persiste al recargar navegador
   - ✅ Logout cierra sesión correctamente

2. **Navegación**
   - ✅ Todos los tabs son accesibles
   - ✅ El tab activo se resalta visualmente
   - ✅ Transiciones son fluidas
   - ✅ Botón atrás del navegador funciona correctamente

3. **Responsive Design**
   - ✅ Funciona en móvil (simulado)
   - ✅ Funciona en tablet
   - ✅ Funciona en escritorio

### Cómo Probar

```bash
# Ejecutar en navegador
ionic serve

# Probar en modo móvil
# 1. Abre DevTools (F12)
# 2. Toggle device toolbar (Ctrl+Shift+M)
# 3. Selecciona un dispositivo móvil
```

---

## 📱 Próximos Pasos (Futuras Iteraciones)

### Funcionalidades Planeadas

1. **Crear Planificación (Completa)**
   - Formulario con validaciones
   - Selector de asignatura y nivel
   - Selector de objetivos de aprendizaje (OA)
   - Generación automática basada en currículum MINEDUC

2. **Integración con API**
   - Backend con base de datos real
   - Autenticación JWT
   - CRUD completo de planificaciones

3. **Repositorio de Contenido**
   - Descarga de documentos PDF
   - Plantillas editables
   - Búsqueda y filtros avanzados

4. **Comunidad**
   - Sistema de publicaciones completo
   - Comentarios y likes
   - Compartir planificaciones

5. **Sincronización en la nube**
   - Firebase/Supabase para backend
   - Sincronización offline-first
   - Notificaciones push

6. **Exportación**
   - Generar PDF de planificaciones
   - Exportar a Word
   - Compartir por email

---

## 📄 Licencia

Este proyecto es de uso académico para la Universidad UNIACC.

---

## 👨‍💻 Autor

**Brian Hernández**
- GitHub: [tu-usuario]
- Email: [tu-email]
- LinkedIn: [tu-perfil]

---

## 🙏 Agradecimientos

- Profesor [Nombre] por la guía y retroalimentación
- Comunidad de Ionic Framework
- Documentación oficial de Angular
- MINEDUC por los estándares curriculares

---

## 📞 Soporte

Si tienes problemas para ejecutar el proyecto:

1. Verifica que tengas Node.js 18+ instalado
2. Elimina `node_modules` y ejecuta `npm install` nuevamente
3. Limpia caché: `npm cache clean --force`
4. Revisa la sección "Problemas Enfrentados" de este README

---

## 📚 Referencias

- [Ionic Documentation](https://ionicframework.com/docs)
- [Angular Documentation](https://angular.io/docs)
- [Swiper Documentation](https://swiperjs.com/)
- [Currículum Nacional MINEDUC](https://www.curriculumnacional.cl/)

---

**Versión:** 1.0.0  
**Última actualización:** Noviembre 2025  
**Estado:** ✅ Cáscara de navegación completa y funcional
