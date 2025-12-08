# EduPlan Chile - Aplicación Móvil Educativa

![Ionic](https://img.shields.io/badge/Ionic-7.2.0-blue)
![Angular](https://img.shields.io/badge/Angular-17-red)
![Estado](https://img.shields.io/badge/Estado-Parte%20A%20Completada-success)

## Descripción del Proyecto

**EduPlan Chile** es una aplicación móvil educativa desarrollada con Ionic/Angular, diseñada para ayudar a profesores chilenos a crear y gestionar planificaciones educativas alineadas con el currículum nacional del MINEDUC y el Marco de la Buena Enseñanza.

Este proyecto es parte del **Taller de Dispositivos Móviles** de UNIACC, desarrollado en etapas para demostrar el dominio progresivo de componentes Ionic y patrones de desarrollo móvil.

---

## Objetivos del Desarrollo (Parte A)

### Objetivos Cumplidos:

1. **Implementar al menos 2 componentes nuevos de Ionic** - Implementados 4 componentes nuevos
2. **Utilizar correctamente los componentes en la aplicación** - Todos funcionando correctamente
3. **Alcanzar el 50% del contenido de la aplicación** - 55% completado (5/9 páginas)
4. **Documentar el proceso y problemas enfrentados** - Documentación completa
5. **Código instalable sin dependencias adicionales** - Solo requiere npm install

---

## Funcionalidades Implementadas

### Páginas Completadas (5/9 = 55%)

#### 1. Login

- Autenticación de usuarios con validación
- Navegación condicional según estado de autenticación
- Persistencia de sesión
- **Componentes:** ion-input, ion-button, ion-card

#### 2. Onboarding

- Presentación de la app (3 slides informativos)
- Introducción a funcionalidades principales
- Skip y navegación entre slides
- **Componentes:** ion-slides, ion-button

#### 3. Dashboard

- Panel principal con resumen de actividades
- Acceso rápido a funcionalidades clave
- Vista general del estado del usuario
- **Componentes:** ion-card, ion-grid, ion-button

#### 4. Mis Planificaciones (MEJORADA en Parte A)

- Lista completa de planificaciones del usuario
- **Búsqueda en tiempo real** por título, asignatura, nivel o unidad
- **Pull to refresh** para actualizar datos
- Filtros por estado (Todas, Borradores, Completadas)
- Estados visuales con chips de color
- Navegación a creación de nueva planificación vía FAB
- Contador de resultados dinámico
- **Componentes:** ion-card, ion-fab, ion-chip, ion-segment
- **Componentes nuevos:** ion-searchbar, ion-refresher

#### 5. Perfil (AMPLIADA en Parte A)

- Información personal completa del usuario
- Datos del establecimiento educacional (RBD, región, comuna)
- **6 configuraciones con toggles interactivos:**
  - Notificaciones generales
  - Notificaciones push
  - Modo oscuro
  - Sincronización automática
  - Descarga solo con WiFi
  - Recordatorios
- Gestión de cuenta (cambiar contraseña, ayuda, acerca de)
- Cerrar sesión con confirmación visual
- Persistencia de configuraciones en LocalStorage
- **Componentes:** ion-list, ion-item, ion-avatar, ion-chip
- **Componentes nuevos:** ion-toggle, ion-list-header

---

## Componentes Ionic Implementados

### Componentes de Unidades Anteriores:

- ion-input - Campos de entrada de texto (Login)
- ion-button - Botones de acción (múltiples páginas)
- ion-card - Tarjetas de contenido (Dashboard, Mis Planificaciones)
- ion-slides - Carrusel de slides (Onboarding)
- ion-toolbar - Barras de herramientas (headers)
- ion-header - Encabezados de página
- ion-content - Contenedor principal
- ion-segment - Filtros por pestañas (Mis Planificaciones)
- ion-fab - Botón flotante (Mis Planificaciones)
- ion-chip - Etiquetas de estado
- ion-avatar - Avatar del usuario (Perfil)
- ion-list / ion-item - Listas básicas

### Componentes NUEVOS (Parte A):

#### 1. ion-searchbar

- **Ubicación:** Mis Planificaciones (toolbar)
- **Funcionalidad:** Búsqueda en tiempo real con debounce
- **Implementación:** 
  - Búsqueda por título, asignatura, nivel y unidad
  - Placeholder descriptivo
  - Botón de limpiar búsqueda
  - Debounce de 300ms para optimizar performance
- **Ventaja:** Permite encontrar planificaciones rápidamente sin scroll infinito

#### 2. ion-refresher

- **Ubicación:** Mis Planificaciones (contenido)
- **Funcionalidad:** Pull to refresh para actualizar datos
- **Implementación:**
  - Icono y texto personalizado
  - Spinner de carga
  - Simulación de actualización de datos
- **Ventaja:** UX moderna y familiar para usuarios móviles

#### 3. ion-toggle

- **Ubicación:** Perfil (sección de configuraciones)
- **Funcionalidad:** 6 switches interactivos para configuraciones
- **Implementación:**
  - Two-way data binding con [(ngModel)]
  - Persistencia en LocalStorage
  - Estado deshabilitado condicional (notificaciones push)
  - Callbacks individuales para cada toggle
- **Ventaja:** Control intuitivo de configuraciones de la app

#### 4. ion-list-header

- **Ubicación:** Perfil (múltiples secciones)
- **Funcionalidad:** Organización visual de secciones
- **Implementación:**
  - 4 headers diferentes:
    - Información Personal
    - Establecimiento
    - Configuraciones de la App
    - Cuenta y Seguridad
  - Estilo uppercase con mayor peso visual
- **Ventaja:** Mejora la jerarquía visual y navegabilidad

**Total de componentes nuevos: 4** (supera el requisito de 2+)

---

## Arquitectura del Proyecto

```
EduPlanChile/
├── src/
│   ├── app/
│   │   ├── pages/                  # Páginas de la aplicación
│   │   │   ├── login/              # Completada (Unidad Anterior)
│   │   │   ├── onboarding/         # Completada (Unidad Anterior)
│   │   │   ├── dashboard/          # Completada (Unidad Anterior)
│   │   │   ├── mis-planificaciones/# MEJORADA (Parte A)
│   │   │   │   ├── .page.ts        #    + Búsqueda + Refresh
│   │   │   │   ├── .page.html      #    + ion-searchbar + ion-refresher
│   │   │   │   └── .page.scss      #    Estilos mejorados
│   │   │   ├── perfil/             # AMPLIADA (Parte A)
│   │   │   │   ├── .page.ts        #    + 6 toggles + persistencia
│   │   │   │   ├── .page.html      #    + ion-toggle + ion-list-header
│   │   │   │   └── .page.scss      #    + Tema oscuro
│   │   │   ├── crear-planificacion/# Base creada (Parte B)
│   │   │   ├── repositorio/        # Pendiente (Parte B)
│   │   │   ├── comunidad/          # Pendiente (Parte B)
│   │   │   └── tabs/               # Pendiente (Parte B)
│   │   │
│   │   ├── services/               # Servicios de la aplicación
│   │   │   ├── auth.service.ts     # Autenticación completa
│   │   │   ├── storage.service.ts  # Almacenamiento local
│   │   │   └── planificacion.service.ts # Gestión de planificaciones
│   │   │
│   │   ├── guards/                 # Guards de navegación
│   │   │   └── auth.guard.ts       # Protección de rutas privadas
│   │   │
│   │   └── app-routing.module.ts   # Configuración de rutas
│   │
│   └── theme/
│       └── variables.css           # Colores MINEDUC (#1976D2)
│
├── package.json                    # Dependencias del proyecto
├── ionic.config.json               # Configuración de Ionic
└── README.md                       # Este archivo
```

---

## Tecnologías Utilizadas

- **Framework:** Ionic 7.2.0
- **Frontend:** Angular 17 (Standalone Components)
- **Lenguaje:** TypeScript 5.x
- **Estilos:** SCSS
- **Capacitor:** Para funcionalidades nativas futuras
- **Routing:** Lazy Loading para optimización de carga
- **Almacenamiento:** LocalStorage para persistencia de configuraciones

---

## Instalación y Ejecución

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

1. **Node.js** (v18 o superior)
   ```powershell
   node --version
   # Debe mostrar v18.x.x o superior
   ```

2. **npm** (v9 o superior - viene con Node.js)
   ```powershell
   npm --version
   # Debe mostrar v9.x.x o superior
   ```

3. **Ionic CLI** (v7 o superior)
   ```powershell
   npm install -g @ionic/cli
   ionic --version
   # Debe mostrar 7.x.x o superior
   ```

### Pasos de Instalación

#### 1. Clonar el repositorio

```powershell
git clone https://github.com/TU_USUARIO/EduPlanChile.git
cd EduPlanChile
```

#### 2. Instalar dependencias

```powershell
npm install
```

Tiempo estimado: 2-3 minutos

**Nota:** Este comando instalará todas las dependencias necesarias listadas en package.json. No se requiere instalación adicional.

#### 3. Verificar la instalación

```powershell
# Verificar que no haya errores
npm list --depth=0
```

#### 4. Ejecutar la aplicación

```powershell
ionic serve
```

**La aplicación se abrirá automáticamente en:**
- URL: http://localhost:8100
- Puerto: 8100 (por defecto)
- Hot Reload: Activado (los cambios se reflejan automáticamente)

### Credenciales de Prueba

Para acceder a la aplicación, usa:

- **Email:** profesor@eduplan.cl
- **Contraseña:** 123456

**Nota:** Las credenciales son validadas en el servicio de autenticación mock.

---

## Probando la Aplicación

### Flujo Completo de Prueba

#### 1. Login

- Ingresa las credenciales de prueba
- Verifica que la validación funcione
- Confirma redirección al Dashboard

#### 2. Onboarding (si es primera vez)

- Desliza entre los 3 slides
- Prueba el botón "Skip"
- Avanza con "Siguiente" y "Comenzar"

#### 3. Dashboard

- Verifica que cargue correctamente
- Observa las tarjetas de acceso rápido
- Navega a "Mis Planificaciones"

#### 4. Mis Planificaciones (MEJORADA)

- Verifica que se muestren las planificaciones
- **NUEVO:** Usa la barra de búsqueda para filtrar
  - Busca por "Matemáticas"
  - Busca por "3° Básico"
  - Limpia la búsqueda con la X
- **NUEVO:** Desliza hacia abajo para actualizar (Pull to Refresh)
  - Observa el spinner de carga
  - Espera la confirmación de actualización
- Cambia entre filtros (Todas/Borradores/Completadas)
- Observa los estados con chips de color
- Prueba el botón flotante "+" (navega a crear)
- Click en una planificación (mensaje en consola)
- Verifica el contador de resultados

#### 5. Perfil (AMPLIADA)

- Navega desde Dashboard
- Revisa la información personal completa
- Verifica datos del establecimiento
- **NUEVO:** Prueba los 6 toggles de configuración:
  - Activa/desactiva "Notificaciones"
  - Nota que "Notificaciones Push" se deshabilita si desactivas "Notificaciones"
  - Prueba "Modo Oscuro" (verás cambios visuales)
  - Prueba "Sincronización Automática"
  - Prueba "Descarga solo con WiFi"
  - Prueba "Recordatorios"
- Abre la consola del navegador (F12) y observa los logs de cada toggle
- **NUEVO:** Recarga la página - verifica que las configuraciones persisten
- Observa las secciones organizadas con headers
- Prueba "Cerrar Sesión"

### Verificación de Componentes Nuevos

- **ion-searchbar:** Barra de búsqueda en Mis Planificaciones  
- **ion-refresher:** Pull to refresh en Mis Planificaciones  
- **ion-toggle:** 6 switches en Perfil - Configuraciones  
- **ion-list-header:** 4 headers de sección en Perfil  

### Verificación de Persistencia

1. Configura los toggles en Perfil
2. Navega a Dashboard
3. Vuelve a Perfil
4. Verifica que los toggles mantienen su estado

---

## Problemas Enfrentados y Soluciones

### Problema 1: Standalone Components vs Modules

**Descripción:**  
El proyecto usa standalone components (patrón moderno de Angular 17), pero algunos tutoriales antiguos de Ionic usan NgModules tradicionales, causando confusión inicial.

**Solución:**  
Se adoptó completamente el patrón standalone:
```typescript
@Component({
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
```

**Lección aprendida:** Los standalone components simplifican la arquitectura y reducen el boilerplate. Siempre revisar la versión de Angular del proyecto antes de seguir tutoriales.

---

### Problema 2: FormsModule no Importado para ngModel

**Descripción:**  
Al agregar [(ngModel)] en los toggles y searchbar, aparecía el error:
```
Can't bind to 'ngModel' since it isn't a known property
```

**Solución:**  
Se agregó FormsModule a los imports del componente standalone:
```typescript
imports: [IonicModule, CommonModule, FormsModule]
```

**Lección aprendida:** En standalone components, cada módulo necesario debe importarse explícitamente en el componente, no hay imports globales como en NgModules.

---

### Problema 3: Persistencia de Configuraciones

**Descripción:**  
Las configuraciones de los toggles se perdían al navegar entre páginas o recargar la app.

**Solución:**  
Se implementó persistencia usando LocalStorage:
```typescript
// Guardar
guardarConfiguraciones() {
  localStorage.setItem('app-configuraciones', JSON.stringify(this.configuraciones));
}

// Cargar
cargarConfiguraciones() {
  const config = localStorage.getItem('app-configuraciones');
  if (config) {
    this.configuraciones = JSON.parse(config);
  }
}
```

**Lección aprendida:** Para datos de configuración del usuario, LocalStorage es suficiente y más rápido que soluciones más complejas como IndexedDB.

---

### Problema 4: Debounce en Searchbar

**Descripción:**  
Al escribir en el searchbar, se ejecutaba el filtrado en cada tecla presionada, causando lentitud con muchos resultados.

**Solución:**  
Se agregó debounce de 300ms en el ion-searchbar:
```html
<ion-searchbar 
  [debounce]="300"
  (ionInput)="handleSearch($event)">
</ion-searchbar>
```

**Lección aprendida:** El debounce es esencial para búsquedas en tiempo real. 300ms es un buen balance entre responsividad y performance.

---

### Problema 5: Refresher No se Completaba

**Descripción:**  
Al implementar el pull to refresh inicialmente, el spinner quedaba cargando infinitamente.

**Solución:**  
Se debe llamar a event.target.complete() cuando termina la carga:
```typescript
async handleRefresh(event: any) {
  this.loadPlanificaciones();
  event.target.complete(); // CRUCIAL
}
```

**Lección aprendida:** Todos los eventos de Ionic requieren confirmación explícita de completado, especialmente los gestos de usuario como refresh.

---

### Problema 6: Toggles Deshabilitados Condicionalmente

**Descripción:**  
Se necesitaba que "Notificaciones Push" se deshabilitara si "Notificaciones" generales estaba apagada.

**Solución:**  
Se usó el atributo [disabled] con binding condicional:
```html
<ion-toggle 
  [(ngModel)]="configuraciones.notificacionesPush"
  [disabled]="!configuraciones.notificaciones">
</ion-toggle>
```

**Lección aprendida:** Los atributos dinámicos de Ionic se bindean con [atributo]="condicion", permitiendo lógica condicional en el template.

---

### Problema 7: Iconos de Ionicons no se Mostraban

**Descripción:**  
Algunos iconos no aparecían correctamente al usar nombres incorrectos o desactualizados.

**Solución:**  
Se consultó la documentación oficial de Ionicons v7:
- Sitio web: https://ionic.io/ionicons
- Se usaron nombres exactos: name="search-outline", name="chevron-forward"

**Lección aprendida:** Ionicons se actualiza frecuentemente. Siempre verificar en la documentación oficial la versión compatible con tu versión de Ionic.

---

### Problema 8: Estados de Planificaciones Inconsistentes

**Descripción:**  
Los colores y nombres de estados no coincidían entre el servicio y la vista.

**Solución:**  
Se crearon métodos helper centralizados:
```typescript
getColorEstado(estado: string): string {
  switch(estado) {
    case 'completada': return 'success';
    case 'borrador': return 'warning';
    default: return 'medium';
  }
}
```

**Lección aprendida:** Centralizar la lógica de presentación en métodos del componente mejora la mantenibilidad y evita inconsistencias.

---

## Guía de Estilo

### Colores Principales

El proyecto utiliza la paleta de colores oficial del MINEDUC:

```css
:root {
  --ion-color-primary: #1976D2;
  --ion-color-primary-rgb: 25, 118, 210;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-shade: #1565C0;
  --ion-color-primary-tint: #42A5F5;
}
```

### Convenciones de Código

**TypeScript:** 
- Variables y métodos: camelCase (ej: terminoBusqueda, handleRefresh())
- Clases de componentes: PascalCase (ej: MisPlanificacionesPage)
- Interfaces: PascalCase (ej: Planificacion, User)

**Archivos:** 
- Kebab case (ej: mis-planificaciones.page.ts)
- Extensiones: .page.ts, .page.html, .page.scss

**Estructura de Componentes:**
- Properties primero
- Constructor
- Lifecycle hooks (ngOnInit, etc.)
- Métodos públicos
- Métodos privados/helpers

---

## Recursos de Aprendizaje

### Documentación Oficial

- Documentación de Ionic: https://ionicframework.com/docs
- Guía de Angular: https://angular.io/docs
- Ionicons: https://ionic.io/ionicons
- TypeScript Handbook: https://www.typescriptlang.org/docs/

### Componentes Ionic Usados

- ion-searchbar: https://ionicframework.com/docs/api/searchbar
- ion-refresher: https://ionicframework.com/docs/api/refresher
- ion-toggle: https://ionicframework.com/docs/api/toggle
- ion-list-header: https://ionicframework.com/docs/api/list-header

---

## Detalles Técnicos de Implementación

### Búsqueda en Tiempo Real

```typescript
get planificacionesFiltradas() {
  let resultado = this.planificaciones;

  // Filtrar por estado
  if (this.filtro !== 'todas') {
    resultado = resultado.filter(p => p.estado === this.filtro);
  }

  // Filtrar por búsqueda
  if (this.terminoBusqueda.trim() !== '') {
    const termino = this.terminoBusqueda.toLowerCase();
    resultado = resultado.filter(p => 
      p.titulo.toLowerCase().includes(termino) ||
      p.asignatura.toLowerCase().includes(termino) ||
      p.nivel.toLowerCase().includes(termino) ||
      p.unidad.toLowerCase().includes(termino)
    );
  }

  return resultado;
}
```

### Persistencia de Configuraciones

```typescript
// Guardar en LocalStorage
guardarConfiguraciones() {
  localStorage.setItem('app-configuraciones', 
    JSON.stringify(this.configuraciones)
  );
}

// Cargar al inicializar
ngOnInit() {
  const config = localStorage.getItem('app-configuraciones');
  if (config) {
    this.configuraciones = JSON.parse(config);
  }
}
```

### Pull to Refresh

```html
<ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
  <ion-refresher-content
    pullingIcon="chevron-down-circle-outline"
    pullingText="Desliza para actualizar"
    refreshingSpinner="circles"
    refreshingText="Actualizando...">
  </ion-refresher-content>
</ion-refresher>
```

---

## Información del Autor

**Nombre:** Brian CM
**Universidad:** UNIACC  
**Curso:** Taller de Dispositivos Móviles 
**Profesor** José Luis Pino Cofre 
**Proyecto:** EduPlan Chile  
**Periodo:** 2025  
**Versión Actual:** 1.0.1 - Parte A

---

## Licencia

Derechos reservados a nombre de BrianCM

---

## Agradecimientos

- A los profesores de UNIACC por la guía en el desarrollo móvil, en especial a José Luis Pino Cofre y Felipe Montenegro
- A mi madre P.M. y mi novia G.G.
- A la comunidad de Ionic por la excelente documentación
- Al MINEDUC por proporcionar el marco curricular educativo chileno
- A los compañeros de curso por el feedback y apoyo

---

## Soporte y Contacto

### Si encuentras algún problema:

1. Revisa la sección "Problemas Enfrentados" más arriba
2. Consulta la documentación oficial de Ionic/Angular
3. Verifica la consola del navegador (F12) para errores específicos
4. Abre un issue en GitHub (si aplica)

### Errores Comunes y Soluciones Rápidas:

**Error:** Can't bind to 'ngModel'  
**Solución:** Asegúrate de importar FormsModule en el componente

**Error:** No provider for...  
**Solución:** Verifica que el servicio esté en providers de app.config.ts

**Error:** La app no carga  
**Solución:** Ejecuta npm install y luego ionic serve nuevamente

**Error:** Los toggles no persisten  
**Solución:** Abre la consola y verifica que no haya errores de LocalStorage

---

## Estadísticas del Proyecto

- Páginas completadas: 5/9 (55%)
- Componentes Ionic usados: 15+
- Componentes nuevos (Parte A): 4
- Servicios implementados: 3
- Guards: 1
- Líneas de código: Aprox. 1,000
- Tiempo de desarrollo: Aprox. 18 horas

---

## Checklist de Entrega

---

**Última actualización:** Diciembre 2025  
**Versión:** 1.0.1 - Parte A Completada  

---

## Resumen Ejecutivo

### Innovaciones Destacadas:

- Búsqueda en tiempo real multi-criterio
- Persistencia de configuraciones de usuario
- Pull to refresh con feedback visual
- 6 configuraciones interactivas con toggles
- Organización mejorada con list-headers
- Código limpio y bien documentado

