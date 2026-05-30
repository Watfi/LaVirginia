import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  tag: string;
  colorDot: string;
  colorBadge: string;
  colorText: string;
}

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-fade-in py-12 px-4 max-w-5xl mx-auto">

      <!-- HEADER -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="px-3 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider">
          Patrimonio e Identidad
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white mt-4 font-heading">
          Nuestra Historia
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        <p class="text-slate-600 dark:text-slate-400 mt-5 leading-relaxed text-sm md:text-base">
          Desde las tierras de los indígenas Ansermas hasta consolidarse como el "Puerto Dulce", conoce el transcurrir histórico y los símbolos que definen a los virginianos.
        </p>
      </div>

      <!-- TIMELINE SECTION -->
      <section class="mb-20">
        <h2 class="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white mb-12 font-heading text-center">
          Línea del Tiempo Histórica
        </h2>

        <!-- Timeline container: 3-col grid on desktop, simple list on mobile -->
        <div class="relative">

          <!-- Vertical center line (visible only on md+) -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-emerald-400 to-blue-400 -translate-x-1/2 rounded-full"></div>

          <div class="space-y-8 md:space-y-0">
            <ng-container *ngFor="let event of timeline; let i = index">

              <!-- MOBILE LAYOUT: simple card with left border -->
              <div class="md:hidden flex gap-4 items-start pb-8 last:pb-0">
                <div class="flex flex-col items-center pt-1 flex-shrink-0">
                  <div class="w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 shadow-md" [ngClass]="event.colorDot"></div>
                  <div class="w-0.5 flex-1 mt-2 bg-slate-200 dark:bg-slate-800"></div>
                </div>
                <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-5 shadow-md flex-1">
                  <span class="inline-block px-2 py-0.5 text-[10px] font-bold rounded-lg mb-2 uppercase tracking-wide" [ngClass]="event.colorBadge">
                    {{ event.tag }}
                  </span>
                  <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">{{ event.year }}</h3>
                  <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 mb-2">{{ event.title }}</h4>
                  <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{{ event.description }}</p>
                </div>
              </div>

              <!-- DESKTOP LAYOUT: 3-col alternating grid -->
              <div class="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-0 mb-12 last:mb-0">

                <!-- LEFT column -->
                <div [ngClass]="i % 2 === 0 ? 'flex justify-end pr-8' : 'flex pr-8 invisible'">
                  <div *ngIf="i % 2 === 0"
                       class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 max-w-xs w-full text-right">
                    <span class="inline-block px-2 py-0.5 text-[10px] font-bold rounded-lg mb-2 uppercase tracking-wide" [ngClass]="event.colorBadge">
                      {{ event.tag }}
                    </span>
                    <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">{{ event.year }}</h3>
                    <h4 class="text-base font-bold text-slate-800 dark:text-slate-200 mt-1 mb-2">{{ event.title }}</h4>
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ event.description }}</p>
                  </div>
                </div>

                <!-- CENTER: dot -->
                <div class="flex flex-col items-center z-10 px-0">
                  <div class="w-5 h-5 rounded-full border-2 border-white dark:border-slate-950 shadow-lg ring-4 ring-white/30 dark:ring-slate-900/50" [ngClass]="event.colorDot"></div>
                </div>

                <!-- RIGHT column -->
                <div [ngClass]="i % 2 !== 0 ? 'flex justify-start pl-8' : 'flex pl-8 invisible'">
                  <div *ngIf="i % 2 !== 0"
                       class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 max-w-xs w-full text-left">
                    <span class="inline-block px-2 py-0.5 text-[10px] font-bold rounded-lg mb-2 uppercase tracking-wide" [ngClass]="event.colorBadge">
                      {{ event.tag }}
                    </span>
                    <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white font-heading">{{ event.year }}</h3>
                    <h4 class="text-base font-bold text-slate-800 dark:text-slate-200 mt-1 mb-2">{{ event.title }}</h4>
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ event.description }}</p>
                  </div>
                </div>

              </div>
            </ng-container>
          </div>
        </div>
      </section>

      <!-- SOPINGA CONTEXT SECTION -->
      <section class="py-12 px-6 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-amber-950 text-white mb-20 shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span class="text-amber-400 text-xs font-bold uppercase tracking-widest">El Origen del Nombre</span>
            <h2 class="text-2xl md:text-3xl font-extrabold font-heading mt-2 mb-6">De Sopinga a La Virginia</h2>
            <p class="text-slate-300 text-sm leading-relaxed mb-4">
              Antes de ser <strong>La Virginia</strong>, la región era conocida como <strong>Nigricia</strong> o <strong>Sopinga</strong>. Este último término heredó su nombre del cacique Sopinga, quien lideraba las tribus originarias en la confluencia de los ríos.
            </p>
            <p class="text-slate-300 text-sm leading-relaxed">
              Con la llegada de colonos antioqueños y comunidades afrodescendientes, el asentamiento tomó vitalidad comercial. A principios del siglo XX, la devoción a la Virgen y el auge como puerto fluvial consolidaron el nombre actual.
            </p>
          </div>
          <div class="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h3 class="text-lg font-bold text-amber-300 mb-4 font-heading">¿Sabías qué?</h3>
            <p class="text-slate-300 text-sm leading-relaxed mb-3">
              El río Cauca era la principal vía comercial de Colombia a finales del siglo XIX y principios del XX. La Virginia funcionaba como puerto de desembarco para mercancías hacia Caldas y el suroeste antioqueño.
            </p>
            <p class="text-slate-300 text-sm leading-relaxed">
              Las lanchas de vapor cargaban café, tabaco y caña de azúcar, originando el apodo de <strong>"Puerto Dulce"</strong> por el intenso comercio de panela y caña cultivada en sus fértiles valles.
            </p>
          </div>
        </div>
      </section>

      <!-- SYMBOLS SECTION -->
      <section>
        <h2 class="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white mb-12 font-heading text-center">
          Símbolos Municipales
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <!-- BANDERA -->
          <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-md flex flex-col items-center text-center">
            <!-- Simulated Flag CSS -->
            <div class="w-44 h-28 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col mb-6">
              <div class="flex-1 bg-amber-400"></div>
              <div class="flex-1 bg-emerald-600"></div>
              <div class="flex-1 bg-amber-400"></div>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading mb-3">La Bandera</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Creada en 1953, consta de tres franjas iguales: <strong>amarillo</strong> (riqueza y el sol radiante) y <strong>verde</strong> (fertilidad y esperanza). Colores que identifican a La Virginia en toda Colombia.
            </p>
          </div>

          <!-- ESCUDO -->
          <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-md flex flex-col items-center text-center">
            <div class="w-28 h-28 flex items-center justify-center bg-amber-500/10 rounded-full text-amber-500 mb-6 border border-amber-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3C12 3 4 6 4 13a8 8 0 0016 0C20 6 12 3 12 3z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v6l3 2"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading mb-3">El Escudo</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Adoptado en 1985. Representa el sol, el Puente Bernardo Arango sobre el río Cauca, una canoa con canalete, la caña de azúcar, el café y la llave de oro que simboliza la entrada al occidente colombiano.
            </p>
          </div>

          <!-- HIMNO -->
          <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-md flex flex-col items-center w-full">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading mb-4 text-center">El Himno</h3>

            <!-- Audio Player Simulator -->
            <div class="w-full bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800 mb-5">
              <div class="flex items-center gap-3 mb-3">
                <button (click)="toggleAnthem()"
                        class="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition shadow-md focus:outline-none flex-shrink-0">
                  <span *ngIf="!isPlaying" class="ml-0.5">▶</span>
                  <span *ngIf="isPlaying">❚❚</span>
                </button>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">Himno de La Virginia</p>
                  <p class="text-[10px] text-slate-400 mt-0.5">Letra: F. González Lotero</p>
                </div>
                <span class="text-[10px] font-mono text-slate-400 flex-shrink-0">{{ formatTime(audioProgress) }} / 1:20</span>
              </div>

              <!-- Progress Bar -->
              <div class="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden cursor-pointer">
                <div class="h-full bg-emerald-500 transition-all duration-300 rounded-full" [style.width.%]="audioProgress"></div>
              </div>

              <!-- Animated waveform -->
              <div class="flex gap-0.5 justify-center items-end h-6 mt-3">
                <div *ngFor="let bar of soundBars"
                     class="w-1 bg-emerald-500/60 rounded-full transition-all duration-200"
                     [style.height.px]="isPlaying ? bar : 3"></div>
              </div>
            </div>

            <!-- Scrollable Lyrics -->
            <div class="h-36 overflow-y-auto w-full text-center text-xs text-slate-600 dark:text-slate-400 space-y-3 pr-2 leading-relaxed">
              <p class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-[10px]">Coro</p>
              <p>¡Salve, salve, Virginia querida,<br>tierra fértil de amor y de paz!<br>En tu suelo se nutre la vida<br>con el canto del río audaz.</p>
              <p class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-[10px]">I Estrofa</p>
              <p>Confluencia de valles hermosos,<br>donde el sol besa el agua al pasar,<br>tus labriegos con brazos vigorosos<br>saben siempre la tierra labrar.</p>
              <p class="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-[10px]">II Estrofa</p>
              <p>Cuna dulce de historia y leyenda,<br>viejo puerto de gran porvenir,<br>que en el alma del pueblo se encienda<br>el orgullo de verte surgir.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class HistoriaComponent implements OnDestroy {

  protected timeline: TimelineEvent[] = [
    {
      year: 'Época Indígena',
      title: 'Territorio de Ansermas y Apías',
      tag: 'Orígenes',
      colorDot:   'bg-blue-500',
      colorBadge: 'bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300',
      colorText:  'text-blue-700 dark:text-blue-300',
      description: 'El territorio estuvo habitado por tribus indígenas Ansermas y Apías, quienes aprovechaban la pesca del río Cauca y la caza en el bosque seco tropical.'
    },
    {
      year: '1888',
      title: 'Fundación del Poblado',
      tag: 'Fundación',
      colorDot:   'bg-amber-500',
      colorBadge: 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300',
      colorText:  'text-amber-700 dark:text-amber-300',
      description: 'El 23 de noviembre de 1888 se oficializa su fundación bajo el impulso de colonos encabezados por Francisco Jaramillo Ochoa. El asentamiento era conocido como Nigricia o Sopinga.'
    },
    {
      year: '1928',
      title: 'Construcción del Puente Colgante',
      tag: 'Ingeniería',
      colorDot:   'bg-emerald-500',
      colorBadge: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300',
      colorText:  'text-emerald-700 dark:text-emerald-300',
      description: 'Se inaugura el Puente Bernardo Arango, joya de la ingeniería de la época. Su estructura de acero y madera fue enlace fundamental para expandir el comercio fluvial hacia Caldas.'
    },
    {
      year: '1959',
      title: 'Municipio Independiente',
      tag: 'Erección Municipal',
      colorDot:   'bg-indigo-500',
      colorBadge: 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300',
      colorText:  'text-indigo-700 dark:text-indigo-300',
      description: 'Bajo la Ordenanza N° 57, La Virginia es erigida oficialmente como municipio autónomo, independizándose de Pereira dentro del departamento de Risaralda.'
    },
    {
      year: 'Hoy',
      title: 'El Puerto Dulce de Risaralda',
      tag: 'Actualidad',
      colorDot:   'bg-emerald-600',
      colorBadge: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300',
      colorText:  'text-emerald-700 dark:text-emerald-300',
      description: 'La Virginia se consolida como centro turístico regional clave gracias a su Ruta del Pescado, las reservas forestales de El Guásimo, los ríos y la cálida hospitalidad de su gente.'
    }
  ];

  // ── Anthem player ─────────────────────────────────────────────
  protected isPlaying   = false;
  protected audioProgress = 0;
  protected soundBars: number[] = Array(14).fill(3);
  private   intervalId: any = null;

  protected toggleAnthem(): void {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.intervalId = setInterval(() => {
        if (this.audioProgress < 100) {
          this.audioProgress += 1.25;
          this.soundBars = this.soundBars.map(() => Math.floor(Math.random() * 20) + 4);
        } else {
          this.stopPlayer();
        }
      }, 1000);
    } else {
      clearInterval(this.intervalId);
    }
  }

  private stopPlayer(): void {
    this.isPlaying      = false;
    this.audioProgress  = 0;
    this.soundBars      = Array(14).fill(3);
    clearInterval(this.intervalId);
  }

  protected formatTime(progress: number): string {
    const total   = 80;
    const current = Math.floor((progress / 100) * total);
    const m = Math.floor(current / 60);
    const s = current % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
