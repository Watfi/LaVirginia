import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  tag: string;
  color: string;
}

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-fade-in py-12 px-4 max-w-6xl mx-auto">
      <!-- HEADER -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider">
          Patrimonio e Identidad
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white mt-4 font-heading">
          Nuestra Historia
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        <p class="text-slate-600 dark:text-slate-400 mt-5 leading-relaxed">
          Desde las tierras de los indígenas Ansermas hasta consolidarse como el "Puerto Dulce", conoce el transcurrir histórico y los símbolos que definen a los virginianos.
        </p>
      </div>

      <!-- TIMELINE SECTION -->
      <section class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white mb-12 font-heading text-center">
          Línea del Tiempo Histórica
        </h2>

        <!-- Vertical Timeline for Desktop / Stacked for Mobile -->
        <div class="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-1/2 md:left-0 md:transform md:-translate-x-1/2">
          
          <div *ngFor="let event of timeline; let i = index; let last = last" 
               class="mb-12 relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
            
            <!-- Bullet Point on line -->
            <div class="absolute left-[-9px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 shadow-md"
                 [ngClass]="event.color"></div>
            
            <!-- Event Card Container -->
            <div class="w-full md:w-[45%] pl-6 md:pl-0"
                 [ngClass]="{'md:order-1 md:text-right md:pr-8': i % 2 === 0, 'md:order-3 md:pl-8': i % 2 !== 0}">
              
              <div class="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-md hover:shadow-xl transition duration-300">
                <span class="inline-block px-2.5 py-1 text-xs font-bold rounded-lg mb-3 tracking-wide"
                      [ngClass]="event.color + '/10 ' + (event.color === 'bg-amber-500' ? 'text-amber-600 dark:text-amber-400' : event.color === 'bg-emerald-500' ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400')">
                  {{ event.tag }}
                </span>
                
                <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white font-heading mb-1">{{ event.year }}</h3>
                <h4 class="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">{{ event.title }}</h4>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ event.description }}</p>
              </div>

            </div>

            <!-- Spacer for horizontal symmetry -->
            <div class="hidden md:block w-[45%] md:order-2"></div>
          </div>

        </div>
      </section>

      <!-- HISTORICAL ORIGINS SECTION -->
      <section class="py-12 px-6 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 text-white mb-20 shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl"></div>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span class="text-amber-400 text-xs font-bold uppercase tracking-widest">El Origen del Nombre</span>
            <h2 class="text-2xl md:text-3xl font-extrabold font-heading mt-2 mb-6">De Sopinga a La Virginia</h2>
            <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
              Antes de ser <strong>La Virginia</strong>, la región era conocida como <strong>Nigricia</strong> o <strong>Sopinga</strong>. Este último término heredó su nombre del cacique Sopinga, quien lideraba las tribus originarias de la confluencia de los ríos.
            </p>
            <p class="text-slate-300 text-sm md:text-base leading-relaxed">
              Posteriormente, con la llegada de pobladores de raza negra y colonos antioqueños, el asentamiento tomó vitalidad comercial. Hacia principios del siglo XX, la devoción a la Virgen y el auge comercial inspiraron el nombre actual, consolidándose como puerto fluvial estratégico sobre el río Cauca.
            </p>
          </div>
          <div class="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h3 class="text-lg font-bold text-amber-300 mb-4 font-heading">¿Sabías qué?</h3>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              El río Cauca era la principal autopista comercial de Colombia a finales del siglo XIX y principios del XX. La Virginia funcionaba como puerto de desembarco para mercancías que iban hacia el departamento de Caldas y el suroeste antioqueño.
            </p>
            <p class="text-slate-300 text-sm leading-relaxed">
              Las lanchas de vapor y canoas tradicionales de canalete cargaban café, tabaco y caña de azúcar, dando origen al apodo de <strong>"Puerto Dulce"</strong> debido al intenso comercio de panela y caña cultivada en sus valles fértiles.
            </p>
          </div>
        </div>
      </section>

      <!-- SYMBOLS SECTION -->
      <section class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white mb-12 font-heading text-center">
          Símbolos Municipales
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Bandera -->
          <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-md flex flex-col items-center text-center">
            <!-- Simulated Flag -->
            <div class="w-48 h-32 rounded-xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-700 flex flex-col mb-6">
              <div class="flex-1 bg-[#FBBF24]"></div> <!-- Amarillo -->
              <div class="flex-1 bg-[#059669]"></div> <!-- Verde -->
              <div class="flex-1 bg-[#FBBF24]"></div> <!-- Amarillo -->
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading mb-2">La Bandera</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Creada en 1953. Consta de tres franjas iguales: dos amarillas y una verde central. El amarillo simboliza la riqueza y los rayos del sol, y el verde representa la fertilidad de sus tierras y la esperanza.
            </p>
          </div>

          <!-- Escudo -->
          <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-md flex flex-col items-center text-center">
            <!-- Shield Icon/Illustration SVG -->
            <div class="w-32 h-32 flex items-center justify-center bg-amber-500/10 rounded-full text-amber-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading mb-2">El Escudo</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Adoptado en 1985. Destaca el sol radiante, el Puente Bernardo Arango sobre el río, una canoa con canalete, la caña de azúcar, el café y la llave de oro que simboliza la entrada al occidente colombiano.
            </p>
          </div>

          <!-- Himno -->
          <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-md flex flex-col items-center">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading mb-4 text-center">El Himno</h3>
            
            <!-- Simulated Audio Player -->
            <div class="w-full bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-150 dark:border-slate-800/50 mb-6">
              <div class="flex items-center gap-3">
                <button (click)="toggleAnthem()" 
                        class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition focus:outline-none shadow-md">
                  <span *ngIf="!isPlaying" class="ml-1 text-xs">▶</span>
                  <span *ngIf="isPlaying" class="text-xs">❚❚</span>
                </button>
                <div class="flex-1">
                  <div class="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">Himno de La Virginia</div>
                  <div class="text-[10px] text-slate-400 mt-0.5">Letra: F. González L.</div>
                </div>
              </div>
              
              <!-- Progress Slider -->
              <div class="mt-3">
                <div class="h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
                  <div class="h-full bg-emerald-500 transition-all duration-100" [style.width.%]="audioProgress"></div>
                </div>
                <div class="flex justify-between text-[9px] text-slate-400 mt-1">
                  <span>{{ formatTime(audioProgress) }}</span>
                  <span>1:20</span>
                </div>
              </div>

              <!-- Animated Soundwaves if playing -->
              <div class="flex gap-0.5 justify-center items-end h-6 mt-2">
                <div *ngFor="let bar of soundBars" 
                     class="w-1 bg-emerald-500 rounded-full transition-all duration-300"
                     [style.height.px]="isPlaying ? bar : 3"></div>
              </div>
            </div>

            <!-- Scrollable lyrics -->
            <div class="h-32 overflow-y-auto text-center border-t border-slate-100 dark:border-slate-800/60 pt-4 w-full text-xs text-slate-600 dark:text-slate-400 space-y-2 select-none scrollbar-thin">
              <p class="font-bold text-slate-800 dark:text-slate-200">CORO</p>
              <p>¡Salve, salve, Virginia querida,<br>tierra fértil de amor y de paz!<br>En tu suelo se nutre la vida<br>con el canto del río audaz.</p>
              <p class="font-bold text-slate-800 dark:text-slate-200">I ESTROFA</p>
              <p>Confluencia de valles hermosos,<br>donde el sol besa el agua al pasar,<br>tus labriegos con brazos vigorosos<br>saben siempre la tierra labrar.</p>
              <p class="font-bold text-slate-800 dark:text-slate-200">II ESTROFA</p>
              <p>Cuna dulce de historia y leyenda,<br>viejo puerto de gran porvenir,<br>que en el alma del pueblo se encienda<br>el orgullo de verte surgir.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .scrollbar-thin::-webkit-scrollbar {
      width: 4px;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background: rgba(148, 163, 184, 0.2);
      border-radius: 2px;
    }
  `]
})
export class HistoriaComponent {
  protected timeline: TimelineEvent[] = [
    {
      year: 'Época Indígena',
      title: 'Territorio de Ansermas y Apías',
      tag: 'Orígenes',
      color: 'bg-blue-500',
      description: 'El territorio que hoy ocupa La Virginia estuvo habitado inicialmente por tribus indígenas de las familias Ansermas y Apías, quienes aprovechaban la pesca del río Cauca y la caza en el bosque seco tropical.'
    },
    {
      year: '1888',
      title: 'Fundación del Poblado',
      tag: 'Fundación',
      color: 'bg-amber-500',
      description: 'El 23 de noviembre de 1888 se oficializa su fundación bajo el impulso de colonos encabezados por Francisco Jaramillo Ochoa. El asentamiento se llamó inicialmente Nigricia o Sopinga.'
    },
    {
      year: '1928',
      title: 'Construcción del Puente Colgante',
      tag: 'Ingeniería',
      color: 'bg-emerald-500',
      description: 'Se inaugura el Puente Bernardo Arango, joya de la ingeniería civil de la época colonial-republicana. Hecho de acero y madera, sirvió de enlace fundamental para expandir el comercio fluvial hacia Caldas.'
    },
    {
      year: '1959',
      title: 'Municipio Independiente',
      tag: 'Erección Municipal',
      color: 'bg-blue-600',
      description: 'Bajo la Ordenanza N° 57 de la Asamblea del departamento de Caldas (al cual pertenecía la zona en ese momento), La Virginia es erigida oficialmente como municipio autónomo, independizándose de Pereira.'
    },
    {
      year: 'Hoy en día',
      title: 'El Puerto Dulce de Risaralda',
      tag: 'Actualidad',
      color: 'bg-emerald-600',
      description: 'La Virginia se consolida hoy como un centro turístico regional clave en Risaralda gracias a su gastronomía (Ruta del Pescado), sus reservas forestales, sus ríos y su cálida hospitalidad.'
    }
  ];

  protected isPlaying = false;
  protected audioProgress = 0;
  protected intervalId: any = null;
  protected soundBars: number[] = [8, 15, 12, 18, 6, 14, 10, 16, 9, 13, 7, 11];

  protected toggleAnthem(): void {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.intervalId = setInterval(() => {
        if (this.audioProgress < 100) {
          this.audioProgress += 1.25;
          // Randomize sound bars height
          this.soundBars = this.soundBars.map(() => Math.floor(Math.random() * 20) + 4);
        } else {
          this.resetPlayer();
        }
      }, 1000);
    } else {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }
  }

  private resetPlayer(): void {
    this.isPlaying = false;
    this.audioProgress = 0;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.soundBars = this.soundBars.map(() => 3);
  }

  protected formatTime(progress: number): string {
    const totalSeconds = 80; // Simulated total duration (1:20)
    const currentSeconds = Math.floor((progress / 100) * totalSeconds);
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
