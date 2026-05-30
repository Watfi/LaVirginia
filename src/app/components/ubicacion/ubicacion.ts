import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PointOfInterest {
  id: string;
  name: string;
  coords: { x: number; y: number }; // Percentage coords for SVG schematic map
  description: string;
  category: 'Historia' | 'Naturaleza' | 'Cultura' | 'Culinaria';
  icon: string;
  highlights: string[];
}

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-fade-in py-12 px-4 max-w-6xl mx-auto">
      <!-- HEADER -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">
          Geografía y Destinos
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white mt-4 font-heading">
          Ubicación y Guía Turística
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        <p class="text-slate-600 dark:text-slate-400 mt-5 leading-relaxed">
          Ubicado estratégicamente a orillas del río Cauca, La Virginia conecta el occidente de Risaralda. Explora nuestro mapa interactivo de atracciones y planifica tu visita.
        </p>
      </div>

      <!-- GEOGRAPHIC INFO -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3 font-heading flex items-center gap-2">
            🧭 Límites Municipales
          </h3>
          <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Limita al norte con Belén de Umbría y Anserma (Caldas), al sur con Pereira y Cartago (Valle del Cauca), al oriente con Marsella y Pereira, y al occidente con Balboa y Santuario.
          </p>
        </div>
        
        <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3 font-heading flex items-center gap-2">
            🛣️ Accesibilidad Vial
          </h3>
          <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Se encuentra a solo 30 minutos de Pereira circulando por una excelente carretera de doble calzada. Es el paso obligatorio para viajar hacia Chocó y el norte de Caldas.
          </p>
        </div>

        <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3 font-heading flex items-center gap-2">
            🗻 Orografía y Valles
          </h3>
          <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Su relieve es plano en su mayoría, correspondiente al hermoso valle del río Cauca, rodeado por las estribaciones de la cordillera Occidental y bañado por el río Risaralda.
          </p>
        </div>
      </section>

      <!-- INTERACTIVE MAP IMPLEMENTED IN ANGULAR UI -->
      <section class="mb-20">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white font-heading">
            Mapa Interactivo de Puntos de Interés
          </h2>
          <p class="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1">
            Haz clic en los círculos del mapa para explorar la descripción y actividades recomendadas de cada lugar.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <!-- The Visual Schematic Map -->
          <div class="lg:col-span-8 bg-gradient-to-br from-sky-100 to-emerald-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center min-h-[400px] shadow-inner">
            
            <!-- Map Rivers Graphic Background SVG -->
            <svg class="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <!-- Cauca River -->
              <path d="M 100 0 Q 300 150 400 300 T 500 600" fill="none" stroke="#0284C7" stroke-width="48" stroke-linecap="round"/>
              <!-- Risaralda River conjoining -->
              <path d="M 800 100 Q 550 200 400 300" fill="none" stroke="#38BDF8" stroke-width="24" stroke-linecap="round"/>
            </svg>

            <!-- Guide grid indicator (simulating coordinates) -->
            <div class="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
              <div *ngFor="let i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]" 
                   class="border border-slate-400 dark:border-slate-600"></div>
            </div>

            <!-- Compass / Legend -->
            <div class="absolute bottom-4 left-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-3 rounded-xl border border-slate-250/50 dark:border-slate-800 text-[10px] space-y-1 z-10">
              <div class="font-bold uppercase text-slate-500">Norte &uarr;</div>
              <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> Historia</div>
              <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span> Naturaleza</div>
              <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block"></span> Cultura</div>
              <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span> Gastronomía</div>
            </div>

            <!-- Interactive Hotspots -->
            <div class="relative w-full h-96">
              <button *ngFor="let point of points"
                      (click)="selectPoint(point.id)"
                      class="absolute w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 shadow-lg focus:outline-none focus:ring-4 hover:scale-115 active:scale-95"
                      [style.left.%]="point.coords.x"
                      [style.top.%]="point.coords.y"
                      [ngClass]="[
                        selectedPointId === point.id ? 'scale-115 ring-4 ring-white/50 z-30' : 'z-20',
                        point.category === 'Historia' ? 'bg-amber-500 text-slate-950 focus:ring-amber-500/50' : 
                        point.category === 'Naturaleza' ? 'bg-emerald-500 text-white focus:ring-emerald-500/50' : 
                        point.category === 'Cultura' ? 'bg-sky-500 text-white focus:ring-sky-500/50' : 
                        'bg-red-500 text-white focus:ring-red-500/50'
                      ]">
                <span class="text-sm font-bold">{{ point.icon }}</span>
                <!-- Pulse effect -->
                <span class="absolute inset-0 rounded-full animate-ping opacity-25" 
                      [ngClass]="point.category === 'Historia' ? 'bg-amber-400' : point.category === 'Naturaleza' ? 'bg-emerald-400' : point.category === 'Cultura' ? 'bg-sky-400' : 'bg-red-400'"></span>
              </button>

              <!-- Map River Labels -->
              <span class="absolute left-[38%] top-[18%] font-heading font-bold text-[10px] md:text-xs text-sky-700/80 dark:text-sky-400/60 uppercase tracking-widest -rotate-12 pointer-events-none">Río Risaralda</span>
              <span class="absolute left-[15%] top-[70%] font-heading font-bold text-[11px] md:text-sm text-blue-700/80 dark:text-blue-400/60 uppercase tracking-widest rotate-45 pointer-events-none">Río Cauca</span>
              <span class="absolute left-[35%] top-[45%] font-bold text-xs bg-slate-900 text-amber-300 px-2 py-0.5 rounded border border-white/10 pointer-events-none shadow-md">Zona Urbana</span>
            </div>
          </div>

          <!-- Description Panel of the Active Point -->
          <div class="lg:col-span-4 flex flex-col">
            <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex-1 flex flex-col justify-between shadow-lg">
              
              <div *ngIf="selectedPoint" class="animate-fade-in-quick space-y-4">
                <span class="inline-block px-2.5 py-1 text-[10px] font-bold uppercase rounded-lg tracking-wider"
                      [ngClass]="selectedPoint.category === 'Historia' ? 'bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400' : 
                                selectedPoint.category === 'Naturaleza' ? 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400' : 
                                selectedPoint.category === 'Cultura' ? 'bg-sky-100 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400' : 
                                'bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400'">
                  {{ selectedPoint.category }}
                </span>
                
                <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
                  {{ selectedPoint.name }}
                </h3>
                
                <p class="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {{ selectedPoint.description }}
                </p>
                
                <div>
                  <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">⭐ Destacado:</h4>
                  <ul class="space-y-1">
                    <li *ngFor="let highlight of selectedPoint.highlights" 
                        class="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {{ highlight }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Default view if no point selected -->
              <div *ngIf="!selectedPoint" class="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <span class="text-4xl animate-bounce">📍</span>
                <h3 class="font-bold text-slate-700 dark:text-slate-300">Explorar Sitios</h3>
                <p class="text-xs text-slate-400 max-w-[200px]">
                  Haz clic en cualquier pin del mapa para cargar la información histórica y turística.
                </p>
              </div>

              <div class="mt-6 border-t border-slate-100 dark:border-slate-800/80 pt-4 text-center">
                <p class="text-[10px] text-slate-400">La Virginia, Risaralda &copy; Guía Oficial</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- GOOGLE MAPS EMBED SECTION -->
      <section class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-3xl shadow-md">
        <h2 class="text-2xl font-bold text-slate-950 dark:text-white mb-6 font-heading text-center">
          Ubicación Georeferenciada
        </h2>
        
        <!-- Google Map Iframe Container -->
        <div class="relative bg-slate-100 dark:bg-slate-950 p-2 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-inner overflow-hidden">
          <div class="h-96 w-full rounded-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15911.758836569106!2d-75.89270634620023!3d4.900994196417726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388147d3910c63%3A0xe543e8d2e858db14!2sLa%20Virginia%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1716942183182!5m2!1ses!2sco" 
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="grayscale dark:invert-[0.9] dark:hue-rotate-180 hover:grayscale-0 transition duration-500">
            </iframe>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2 text-xs text-slate-400">
          <span>Coordenadas: 4°53'57"N 75°52'57"O</span>
          <span>Altitud: 890 m.s.n.m. (Valle Cálido)</span>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .animate-fade-in-quick {
      animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class UbicacionComponent implements OnInit {
  protected selectedPointId: string | null = null;
  protected selectedPoint: PointOfInterest | null = null;

  protected points: PointOfInterest[] = [
    {
      id: 'puente-bernardo',
      name: 'Puente Bernardo Arango',
      coords: { x: 38, y: 35 }, // Center over the main river intersection
      description: 'El mayor monumento histórico de La Virginia. Inaugurado en 1928, esta estructura metálica colgante cruza el río Cauca para unir al municipio con Caimalito. Es un mirador excepcional para fotografiar atardeceres y la pesca tradicional.',
      category: 'Historia',
      icon: '🌉',
      highlights: [
        'Declarado Monumento Nacional de Colombia',
        'Longitud de 164 metros sobre el Río Cauca',
        'Paso 100% peatonal y turístico para selfis'
      ]
    },
    {
      id: 'el-guasimo',
      name: 'Reserva Forestal El Guásimo',
      coords: { x: 80, y: 22 }, // Upper right hills/valleys
      description: 'Una joya ecoturística de Risaralda. Comprende hectáreas protegidas de Bosque Seco Tropical, uno de los ecosistemas más amenazados del país. Es un santuario de biodiversidad ideal para el avistamiento de aves endémicas y senderismo ecológico.',
      category: 'Naturaleza',
      icon: '🌳',
      highlights: [
        'Hogar del Saltarín Cuellidorado (ave insigne)',
        'Senderos guiados de educación ambiental',
        'Bosque seco tropical virgen'
      ]
    },
    {
      id: 'parque-sopinga',
      name: 'Parque Lineal Sopinga',
      coords: { x: 28, y: 55 }, // Closer to the river bank
      description: 'Hermosa zona verde urbana y recreacional a orillas del río Cauca. Ideal para caminatas familiares, deportes y pícnic. Cuenta con miradores hacia el paso de canoas y zonas de esparcimiento infantil.',
      category: 'Cultura',
      icon: '🏞️',
      highlights: [
        'Ruta de ciclorruta y senderos peatonales',
        'Zonas de comidas típicas al aire libre',
        'Monumento al cacique Sopinga'
      ]
    },
    {
      id: 'parque-iguanas',
      name: 'Parque de las Iguanas',
      coords: { x: 48, y: 48 }, // Downtown central park
      description: 'Ubicado en el parque principal del municipio, es un curioso refugio donde decenas de iguanas verdes gigantes conviven libremente en las copas de los árboles, convirtiéndose en un atractivo turístico obligado.',
      category: 'Naturaleza',
      icon: '🦎',
      highlights: [
        'Iguanas de hasta 1.5 metros de largo',
        'Interacción pacífica y segura para niños',
        'Ubicado frente a la parroquia de La Virginia'
      ]
    },
    {
      id: 'plaza-pescado',
      name: 'Plaza de la Ruta del Pescado',
      coords: { x: 32, y: 22 }, // Upper left riverside
      description: 'El epicentro de la gastronomía fluvial. Esta plaza reúne los restaurantes tradicionales donde las matronas cocinan los pescados más frescos traídos directamente del río Cauca en la jornada de pesca diaria.',
      category: 'Culinaria',
      icon: '🍲',
      highlights: [
        'Prueba el auténtico Viudo de Pescado',
        'Restaurantes tradicionales frente al río',
        'Precios accesibles y hospitalidad hogareña'
      ]
    }
  ];

  ngOnInit(): void {
    // Select the historic bridge by default so the panel starts with info
    this.selectPoint('puente-bernardo');
  }

  protected selectPoint(id: string): void {
    this.selectedPointId = id;
    const found = this.points.find(p => p.id === id);
    this.selectedPoint = found ? found : null;
  }
}
