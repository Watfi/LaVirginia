import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { 
    path: 'inicio', 
    loadComponent: () => import('./components/inicio/inicio').then(m => m.InicioComponent) 
  },
  { 
    path: 'historia', 
    loadComponent: () => import('./components/historia/historia').then(m => m.HistoriaComponent) 
  },
  { 
    path: 'gastronomia', 
    loadComponent: () => import('./components/gastronomia/gastronomia').then(m => m.GastronomiaComponent) 
  },
  { 
    path: 'ubicacion', 
    loadComponent: () => import('./components/ubicacion/ubicacion').then(m => m.UbicacionComponent) 
  },
  { 
    path: 'territorio', 
    loadComponent: () => import('./components/proyecto/proyecto').then(m => m.ProyectoComponent) 
  },
  { 
    path: 'galeria', 
    loadComponent: () => import('./components/galeria/galeria').then(m => m.GaleriaComponent) 
  },
  { 
    path: 'interactivo', 
    loadComponent: () => import('./components/interactivo/interactivo').then(m => m.InteractivoComponent) 
  },
  { path: '**', redirectTo: 'inicio' }
];


