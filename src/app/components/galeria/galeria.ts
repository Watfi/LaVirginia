import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
  title: string;
  category: 'Naturaleza' | 'Arquitectura' | 'Río' | 'Cultura';
  description: string;
  url: string;
  fallbackUrl: string;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-fade-in py-12 px-4 max-w-6xl mx-auto">
      <!-- HEADER -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="px-3 py-1 bg-amber-500/10 text-amber-600  text-xs font-bold rounded-full uppercase tracking-wider">
          Registro Visual
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-950  mt-4 font-heading">
          Galería Fotográfica
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        <p class="text-slate-600  mt-5 leading-relaxed">
          Un recorrido en imágenes por los rincones del Puerto Dulce. Admira el Puente Bernardo Arango, los ríos Cauca y Risaralda, y la majestuosidad verde de sus paisajes.
        </p>
      </div>

      <!-- FILTER BAR -->
      <div class="flex flex-wrap gap-2 justify-center mb-10">
        <button *ngFor="let cat of categories" 
                (click)="selectedCategory = cat"
                class="px-5 py-2 rounded-full text-xs md:text-sm font-bold transition duration-300 border focus:outline-none"
                [ngClass]="selectedCategory === cat 
                  ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-md' 
                  : 'bg-white  border-slate-200  text-slate-600  hover:bg-slate-50 :bg-slate-800'">
          {{ cat }}
        </button>
      </div>

      <!-- IMAGES GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let img of filteredImages" 
             (click)="openLightbox(img.id)"
             class="group bg-white  border border-slate-100  rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
          
          <!-- Image Container -->
          <div class="relative h-64 bg-slate-950 overflow-hidden">
            <!-- Overlay and zoom on hover -->
            <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <span class="px-4 py-2 bg-white/90  backdrop-blur-sm text-xs font-bold text-slate-850  rounded-xl shadow-md border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                🔍 Ampliar Imagen
              </span>
            </div>
            
            <img [src]="img.url" 
                 [alt]="img.title" 
                 class="w-full h-full object-cover group-hover:scale-104 transition duration-500" 
                 (error)="handleImageError($event, img.fallbackUrl)">
          </div>

          <!-- Description -->
          <div class="p-5">
            <span class="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600  font-bold uppercase tracking-wider">
              {{ img.category }}
            </span>
            <h3 class="text-base font-bold text-slate-900  font-heading mt-2 mb-1">
              {{ img.title }}
            </h3>
            <p class="text-xs text-slate-500  leading-relaxed line-clamp-2">
              {{ img.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- LIGHTBOX MODAL (Premium Full-screen Viewer) -->
      <div *ngIf="activeImage" 
           class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-fade-in-quick"
           (click)="closeLightbox()">
        
        <!-- Close Button (X) -->
        <button (click)="closeLightbox()" 
                class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/10 text-2xl transition duration-200 z-50 focus:outline-none">
          ✕
        </button>

        <!-- Previous Button -->
        <button (click)="prevImage($event)" 
                class="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/10 text-xl transition duration-200 z-50 focus:outline-none">
          ‹
        </button>

        <!-- Image Content and Metadata Panel -->
        <div class="max-w-4xl w-full flex flex-col items-center justify-center" (click)="$event.stopPropagation()">
          <div class="relative bg-slate-900 p-2 rounded-2xl border border-white/10 shadow-2xl max-h-[75vh] overflow-hidden flex items-center justify-center">
            <img [src]="activeImage.url" 
                 [alt]="activeImage.title" 
                 class="max-w-full max-h-[70vh] object-contain rounded-lg animate-scale-up"
                 (error)="handleImageError($event, activeImage.fallbackUrl)">
          </div>

          <!-- Metadata -->
          <div class="mt-4 text-center text-white max-w-2xl px-4">
            <span class="inline-block px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider mb-2">
              {{ activeImage.category }}
            </span>
            <h2 class="text-xl md:text-2xl font-bold font-heading mb-1.5">{{ activeImage.title }}</h2>
            <p class="text-xs md:text-sm text-slate-350 leading-relaxed">{{ activeImage.description }}</p>
          </div>
        </div>

        <!-- Next Button -->
        <button (click)="nextImage($event)" 
                class="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center border border-white/10 text-xl transition duration-200 z-50 focus:outline-none">
          ›
        </button>

      </div>
    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .animate-fade-in-quick {
      animation: fadeInQuick 0.25s ease-out forwards;
    }
    .animate-scale-up {
      animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInQuick {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleUp {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `]
})
export class GaleriaComponent {
  protected selectedCategory = 'Todos';
  protected activeImageId: number | null = null;
  protected activeImage: GalleryImage | null = null;

  protected categories: string[] = ['Todos', 'Naturaleza', 'Arquitectura', 'Río', 'Cultura'];

  protected images: GalleryImage[] = [
    {
      id: 1,
      title: 'Vista Aérea Puente Bernardo Arango',
      category: 'Arquitectura',
      description: 'Perspectiva cenital del icónico puente colgante de 1928, patrimonio histórico que cruza el río Cauca conectando La Virginia con Caimalito.',
      url: 'assets/Visuales/Vista Cielo Puente bernardo.jpeg',
      fallbackUrl: ''
    },
    {
      id: 2,
      title: 'Puente Bernardo Arango al Atardecer',
      category: 'Arquitectura',
      description: 'El puente colgante bañado por la luz dorada del atardecer risaraldense, reflejo del alma fluvial de La Virginia.',
      url: 'assets/Visuales/Atardecer puente bernardo.jpeg',
      fallbackUrl: ''
    },
    {
      id: 3,
      title: 'Puente Francisco sobre el Río',
      category: 'Arquitectura',
      description: 'Estructura vial que conecta el municipio con el departamento, testigo del flujo humano y comercial de la región.',
      url: 'assets/Visuales/Puente fransisco.jpeg',
      fallbackUrl: ''
    },
    {
      id: 4,
      title: 'Río Cauca al Atardecer',
      category: 'Río',
      description: 'Las aguas del Cauca teñidas de naranja y oro en las horas del ocaso. El pulso vital que le da vida al Puerto Dulce.',
      url: 'assets/Visuales/Rio cauca atardecer.jpeg',
      fallbackUrl: ''
    },
    {
      id: 5,
      title: 'El Caballero Gaucho',
      category: 'Cultura',
      description: 'Monumento símbolo de la identidad virgeniana que rinde homenaje al espíritu libre y trabajador de sus gentes.',
      url: 'assets/Visuales/Estatua Caballero gaucho.jpeg',
      fallbackUrl: ''
    },
    {
      id: 6,
      title: 'Iglesia La Capilla',
      category: 'Cultura',
      description: 'Joya arquitectónica religiosa del municipio, testigo de generaciones de fe y celebraciones que forman el alma espiritual de La Virginia.',
      url: 'assets/Visuales/Iglesia La Capilla.jpeg',
      fallbackUrl: ''
    },
    {
      id: 7,
      title: 'Cementerio Municipal',
      category: 'Cultura',
      description: 'Espacio de historia, arte funerario y memoria colectiva donde descansan las familias fundadoras del municipio.',
      url: 'assets/Visuales/Cementerio.jpeg',
      fallbackUrl: ''
    },
    {
      id: 8,
      title: 'Letrero Bienvenida La Virginia',
      category: 'Cultura',
      description: 'El letrero de bienvenida, primer saludo que recibe cada visitante al ingresar al Puerto Dulce de Colombia.',
      url: 'assets/Visuales/Letrero La Virginia.jpeg',
      fallbackUrl: ''
    }
  ];

  protected get filteredImages(): GalleryImage[] {
    if (this.selectedCategory === 'Todos') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }

  protected openLightbox(id: number): void {
    this.activeImageId = id;
    const found = this.images.find(img => img.id === id);
    this.activeImage = found ? found : null;
  }

  protected closeLightbox(): void {
    this.activeImageId = null;
    this.activeImage = null;
  }

  protected prevImage(event: Event): void {
    event.stopPropagation();
    if (this.activeImageId === null) return;
    
    const currentList = this.filteredImages;
    const currentIndex = currentList.findIndex(img => img.id === this.activeImageId);
    
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = currentList.length - 1;
    }
    
    this.openLightbox(currentList[prevIndex].id);
  }

  protected nextImage(event: Event): void {
    event.stopPropagation();
    if (this.activeImageId === null) return;
    
    const currentList = this.filteredImages;
    const currentIndex = currentList.findIndex(img => img.id === this.activeImageId);
    
    let nextIndex = currentIndex + 1;
    if (nextIndex >= currentList.length) {
      nextIndex = 0;
    }
    
    this.openLightbox(currentList[nextIndex].id);
  }

  protected handleImageError(event: any, fallback: string): void {
    event.target.src = fallback;
  }
}
