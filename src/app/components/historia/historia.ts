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
        <span class="px-3 py-1.5 bg-amber-500/10 text-amber-600  text-xs font-bold rounded-full uppercase tracking-wider">
          Patrimonio e Identidad
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-950  mt-4 font-heading">
          Nuestra Historia
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        <p class="text-slate-600  mt-5 leading-relaxed text-sm md:text-base">
          Desde las tierras de los indígenas Ansermas hasta consolidarse como el "Puerto Dulce", conoce el transcurrir histórico y los símbolos que definen a los virginianos.
        </p>
      </div>

      <!-- TIMELINE SECTION -->
      <section id="puente-colgante" class="mb-20 scroll-mt-24">
        <h2 class="text-2xl md:text-3xl font-bold text-slate-950  mb-12 font-heading text-center">
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
                  <div class="w-4 h-4 rounded-full border-2 border-white  shadow-md" [ngClass]="event.colorDot"></div>
                  <div class="w-0.5 flex-1 mt-2 bg-slate-200 "></div>
                </div>
                <div class="bg-amber-50 border-2 border-amber-100 rounded-2xl p-5 shadow-md flex-1 relative overflow-hidden">
                  <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none"></div>
                  <span class="inline-block px-2 py-0.5 text-[10px] font-bold rounded-lg mb-2 uppercase tracking-wide relative z-10" [ngClass]="event.colorBadge">
                    {{ event.tag }}
                  </span>
                  <h3 class="text-2xl font-extrabold text-stone-900 font-heading relative z-10">{{ event.year }}</h3>
                  <h4 class="text-sm font-bold text-stone-800 mt-1 mb-2 relative z-10">{{ event.title }}</h4>
                  <p class="text-stone-700 text-xs leading-relaxed relative z-10">{{ event.description }}</p>
                </div>
              </div>

              <!-- DESKTOP LAYOUT: 3-col alternating grid -->
              <div class="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-0 mb-12 last:mb-0">

                <!-- LEFT column -->
                <div [ngClass]="i % 2 === 0 ? 'flex justify-end pr-8' : 'flex pr-8 invisible'">
                  <div *ngIf="i % 2 === 0"
                       class="bg-amber-50 border-2 border-amber-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 max-w-xs w-full text-right relative overflow-hidden">
                    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none"></div>
                    <span class="inline-block px-2 py-0.5 text-[10px] font-bold rounded-lg mb-2 uppercase tracking-wide relative z-10" [ngClass]="event.colorBadge">
                      {{ event.tag }}
                    </span>
                    <h3 class="text-3xl font-extrabold text-stone-900 font-heading relative z-10">{{ event.year }}</h3>
                    <h4 class="text-base font-bold text-stone-800 mt-1 mb-2 relative z-10">{{ event.title }}</h4>
                    <p class="text-stone-700 text-sm leading-relaxed relative z-10">{{ event.description }}</p>
                  </div>
                </div>

                <!-- CENTER: dot -->
                <div class="flex flex-col items-center z-10 px-0">
                  <div class="w-5 h-5 rounded-full border-2 border-white  shadow-lg ring-4 ring-white/30 " [ngClass]="event.colorDot"></div>
                </div>

                <!-- RIGHT column -->
                <div [ngClass]="i % 2 !== 0 ? 'flex justify-start pl-8' : 'flex pl-8 invisible'">
                  <div *ngIf="i % 2 !== 0"
                       class="bg-amber-50 border-2 border-amber-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 max-w-xs w-full text-left relative overflow-hidden">
                    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none"></div>
                    <span class="inline-block px-2 py-0.5 text-[10px] font-bold rounded-lg mb-2 uppercase tracking-wide relative z-10" [ngClass]="event.colorBadge">
                      {{ event.tag }}
                    </span>
                    <h3 class="text-3xl font-extrabold text-stone-900 font-heading relative z-10">{{ event.year }}</h3>
                    <h4 class="text-base font-bold text-stone-800 mt-1 mb-2 relative z-10">{{ event.title }}</h4>
                    <p class="text-stone-700 text-sm leading-relaxed relative z-10">{{ event.description }}</p>
                  </div>
                </div>

              </div>
            </ng-container>
          </div>
        </div>
      </section>

      <!-- SOPINGA CONTEXT SECTION -->
      <section class="py-12 px-6 rounded-3xl bg-amber-100 border-2 border-amber-200 mb-20 shadow-xl relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none"></div>
        <div class="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span class="text-amber-700 text-xs font-bold uppercase tracking-widest">El Origen del Nombre</span>
            <h2 class="text-2xl md:text-3xl font-extrabold font-heading mt-2 mb-6 text-stone-900">De Sopinga a La Virginia</h2>
            <p class="text-stone-700 text-sm leading-relaxed mb-4">
              Antes de ser <strong>La Virginia</strong>, la región era conocida como <strong>Nigricia</strong> o <strong>Sopinga</strong>. Este último término heredó su nombre del cacique Sopinga, quien lideraba las tribus originarias en la confluencia de los ríos.
            </p>
            <p class="text-stone-700 text-sm leading-relaxed">
              Con la llegada de colonos antioqueños y comunidades afrodescendientes, el asentamiento tomó vitalidad comercial. A principios del siglo XX, la devoción a la Virgen y el auge como puerto fluvial consolidaron el nombre actual.
            </p>
          </div>
          <div class="bg-white/40 border border-amber-300/50 p-6 rounded-2xl backdrop-blur-md shadow-sm">
            <h3 class="text-lg font-bold text-amber-800 mb-4 font-heading">¿Sabías qué?</h3>
            <p class="text-stone-700 text-sm leading-relaxed mb-3">
              El río Cauca era la principal vía comercial de Colombia a finales del siglo XIX y principios del XX. La Virginia funcionaba como puerto de desembarco para mercancías hacia Caldas y el suroeste antioqueño.
            </p>
            <p class="text-stone-700 text-sm leading-relaxed">
              Las lanchas de vapor cargaban café, tabaco y caña de azúcar, originando el apodo de <strong>"Puerto Dulce"</strong> por el intenso comercio de panela y caña cultivada en sus fértiles valles.
            </p>
          </div>
        </div>
      </section>

      <!-- LUGARES Y PERSONAJES HISTÓRICOS -->
      <section class="mb-20">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold text-stone-900 font-heading mb-4">
            Lugares y Personajes Históricos
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Caballero Gaucho -->
          <div id="caballero-gaucho" class="bg-amber-50 border border-amber-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition scroll-mt-24">
            <div class="w-12 h-12 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center font-bold text-xl mb-4 font-serif">CG</div>
            <h3 class="text-xl font-bold text-stone-900 font-heading mb-3">El Caballero Gaucho</h3>
            <p class="text-stone-700 text-sm leading-relaxed">
              Luis Alberto Posada, más conocido como el "Caballero Gaucho", es uno de los máximos exponentes de la música popular colombiana y un símbolo cultural de La Virginia. Su estatua en el municipio rinde homenaje a su legado musical, recordando a sus habitantes y visitantes la época dorada de sus canciones que relatan las vivencias del pueblo. Su historia vive en las calles y en la memoria de los virginianos.
            </p>
          </div>

          <!-- La Capilla -->
          <div id="la-capilla" class="bg-amber-50 border border-amber-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition scroll-mt-24">
            <div class="w-12 h-12 bg-indigo-200 text-indigo-800 rounded-full flex items-center justify-center font-bold text-xl mb-4 font-serif">LC</div>
            <h3 class="text-xl font-bold text-stone-900 font-heading mb-3">La Capilla</h3>
            <p class="text-stone-700 text-sm leading-relaxed">
              La Capilla es una joya de la arquitectura religiosa local. A lo largo de las décadas, ha sido el centro espiritual donde se congregan las familias fundadoras. Sus muros resguardan incontables bautismos, matrimonios y fiestas patronales que forman el tejido social y de fe de La Virginia.
            </p>
          </div>

          <!-- Cementerio Municipal -->
          <div id="cementerio" class="bg-amber-50 border border-amber-200 p-6 rounded-3xl shadow-sm hover:shadow-md transition scroll-mt-24">
            <div class="w-12 h-12 bg-stone-300 text-stone-700 rounded-full flex items-center justify-center font-bold text-xl mb-4 font-serif">CM</div>
            <h3 class="text-xl font-bold text-stone-900 font-heading mb-3">Cementerio Municipal</h3>
            <p class="text-stone-700 text-sm leading-relaxed">
              Más que un campo santo, el Cementerio de La Virginia es un libro abierto de arte funerario y memoria colectiva. En sus pasillos descansan los pioneros, colonos y personajes ilustres que forjaron la identidad del Puerto Dulce, convirtiéndolo en un sitio de profundo respeto y valor histórico.
            </p>
          </div>

        </div>
      </section>

      <!-- SYMBOLS SECTION -->
      <section id="simbolos">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold text-stone-900 font-heading mb-4">
            Símbolos Municipales
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <!-- BANDERA -->
          <div class="bg-amber-50 border-2 border-amber-100 p-8 rounded-3xl shadow-md flex flex-col items-center text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none"></div>
            <!-- Simulated Flag CSS -->
            <div class="w-44 h-28 rounded-xl overflow-hidden shadow-lg border border-stone-300 flex flex-col mb-6 relative z-10">
              <div class="flex-1 bg-amber-400"></div>
              <div class="flex-1 bg-emerald-600"></div>
              <div class="flex-1 bg-amber-400"></div>
            </div>
            <h3 class="text-2xl font-extrabold text-stone-900 font-heading mb-3 relative z-10">La Bandera</h3>
            <p class="text-stone-700 text-sm leading-relaxed relative z-10">
              Creada en 1953, consta de tres franjas iguales: <strong>amarillo</strong> (riqueza y el sol radiante) y <strong>verde</strong> (fertilidad y esperanza). Colores que identifican a La Virginia en toda Colombia.
            </p>
          </div>

          <!-- ESCUDO -->
          <div class="bg-amber-50 border-2 border-amber-100 p-8 rounded-3xl shadow-md flex flex-col items-center text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none"></div>
            <div class="w-28 h-28 flex items-center justify-center mb-6 relative z-10">
              <img src="assets/Escudo_de_La_Virginia.svg.png" alt="Escudo de La Virginia" class="w-full h-full object-contain drop-shadow-md">
            </div>
            <h3 class="text-2xl font-extrabold text-stone-900 font-heading mb-3 relative z-10">El Escudo</h3>
            <p class="text-stone-700 text-sm leading-relaxed relative z-10">
              Adoptado en 1985. Representa el sol, el Puente Bernardo Arango sobre el río Cauca, una canoa con canalete, la caña de azúcar, el café y la llave de oro que simboliza la entrada al occidente colombiano.
            </p>
          </div>

          <!-- HIMNO -->
          <div class="bg-amber-50 border-2 border-amber-100 p-8 rounded-3xl shadow-md flex flex-col items-center w-full relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none"></div>
            <h3 class="text-2xl font-extrabold text-stone-900 font-heading mb-1 text-center relative z-10">El Himno</h3>
            <p class="text-[10px] text-stone-500 mb-4 text-center font-bold relative z-10">Letra: Francisco González Lotero &nbsp;·&nbsp; Música: Rodrigo Arango</p>

            <!-- Audio Player (MP3 real) -->
            <div class="w-full bg-white p-4 rounded-2xl border border-stone-200 mb-5 shadow-sm relative z-10">
              <div class="flex items-center gap-3 mb-3">
                <button (click)="toggleAnthem()"
                        class="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center transition shadow-md focus:outline-none flex-shrink-0">
                  <span *ngIf="!isPlaying" class="ml-0.5">▶</span>
                  <span *ngIf="isPlaying">❚❚</span>
                </button>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-bold text-stone-800 truncate">Himno de La Virginia</p>
                  <p class="text-[10px] text-stone-500 mt-0.5">F. González Lotero · R. Arango</p>
                </div>
                <span class="text-[10px] font-mono text-stone-500 flex-shrink-0">{{ elapsedLabel }} / {{ durationLabel }}</span>
              </div>

              <!-- Progress Bar clickable -->
              <div class="h-1.5 bg-stone-200 rounded-full overflow-hidden cursor-pointer" (click)="seekAudio($event)">
                <div class="h-full bg-amber-500 transition-all duration-100 rounded-full" [style.width.%]="audioProgress"></div>
              </div>

              <!-- Animated waveform -->
              <div class="flex gap-0.5 justify-center items-end h-6 mt-3">
                <div *ngFor="let bar of soundBars"
                     class="w-1 bg-amber-500/60 rounded-full transition-all duration-200"
                     [style.height.px]="isPlaying ? bar : 3"></div>
              </div>
            </div>

            <!-- Letra real del himno -->
            <div class="h-52 overflow-y-auto w-full text-center text-xs text-stone-700 space-y-3 pr-2 leading-relaxed font-serif relative z-10">
              <p class="font-bold text-amber-900 uppercase tracking-wider text-[10px]">— Coro —</p>
              <p>Dos ríos te bañan de riquezas plenos<br>prodigando savias, resinas y mieles,<br>Y tus fuertes hijos al trabajo fieles<br>te dan abundancia de bienes terrenos.</p>

              <p class="font-bold text-amber-900 uppercase tracking-wider text-[10px]">— Estrofa I —</p>
              <p>Tu bravo linaje, tu ancestro guerrero,<br>fundó su querencia en ubérrimo valle<br>do cimbra el arisco machete que raye<br>frontera inviolable de amor altanero.<br>Valor y coraje de inmortal acero<br>forjó tu hidalguía, ¡Que jamás desmaye!<br>Arrancó a la selva tu primera calle<br>Que Sopinga fuera tu nombre primero.</p>

              <p class="font-bold text-amber-900 uppercase tracking-wider text-[10px]">— Estrofa II —</p>
              <p>Perla de marfiles de un hermoso valle,<br>Eres guía y guarda de aquellos pioneros<br>Llegados de un mundo de recios hacheros<br>a escribir la historia do libertad de halle.<br>Libre ya el esclavo, sin que lo desmaye<br>Temor a la selva, se hace caballero<br>Recias hazañas, de lo duradero<br>construyendo un mundo que nadie avasalle.</p>

              <p class="font-bold text-amber-900 uppercase tracking-wider text-[10px]">— Estrofa III —</p>
              <p>Tu espíritu libre ya nunca te falle<br>Puerta de bonanzas y emporio cimero<br>Te ha ungido el destino con noble venero<br>Para que el futuro tu presente ensaye.<br>Enclave de honrosos caminos y calles<br>Desde donde el hombre divisa el crucero<br>De puertas abiertas a lo venidero<br>Y donde tus hijos la historia atalayen.</p>
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
      colorBadge: 'bg-blue-100  text-blue-700 ',
      colorText:  'text-blue-700 ',
      description: 'El territorio estuvo habitado por tribus indígenas Ansermas y Apías, quienes aprovechaban la pesca del río Cauca y la caza en el bosque seco tropical.'
    },
    {
      year: '1888',
      title: 'Fundación del Poblado',
      tag: 'Fundación',
      colorDot:   'bg-amber-500',
      colorBadge: 'bg-amber-100  text-amber-700 ',
      colorText:  'text-amber-700 ',
      description: 'El 23 de noviembre de 1888 se oficializa su fundación bajo el impulso de colonos encabezados por Francisco Jaramillo Ochoa. El asentamiento era conocido como Nigricia o Sopinga.'
    },
    {
      year: '1928',
      title: 'Construcción del Puente Colgante',
      tag: 'Ingeniería',
      colorDot:   'bg-emerald-500',
      colorBadge: 'bg-emerald-100  text-emerald-700 ',
      colorText:  'text-emerald-700 ',
      description: 'Se inaugura el Puente Bernardo Arango, joya de la ingeniería de la época. Su estructura de acero y madera fue enlace fundamental para expandir el comercio fluvial hacia Caldas.'
    },
    {
      year: '1959',
      title: 'Municipio Independiente',
      tag: 'Erección Municipal',
      colorDot:   'bg-indigo-500',
      colorBadge: 'bg-indigo-100  text-indigo-700 ',
      colorText:  'text-indigo-700 ',
      description: 'Bajo la Ordenanza N° 57, La Virginia es erigida oficialmente como municipio autónomo, independizándose de Pereira dentro del departamento de Risaralda.'
    },
    {
      year: 'Hoy',
      title: 'El Puerto Dulce de Risaralda',
      tag: 'Actualidad',
      colorDot:   'bg-emerald-600',
      colorBadge: 'bg-emerald-100  text-emerald-700 ',
      colorText:  'text-emerald-700 ',
      description: 'La Virginia se consolida como centro turístico regional clave gracias a su Ruta del Pescado, las reservas forestales de El Guásimo, los ríos y la cálida hospitalidad de su gente.'
    }
  ];

  // ── Anthem player (HTML5 Audio) ───────────────────────────────
  protected isPlaying     = false;
  protected audioProgress = 0;
  protected soundBars: number[] = Array(14).fill(3);
  protected elapsedLabel  = '0:00';
  protected durationLabel = '0:00';
  protected voiceName     = '';

  private audio: HTMLAudioElement | null = null;
  private waveIntervalId: any = null;

  private getAudio(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio('assets/Himno Municipio La Virginia, Risaralda  Portafolio realización video - aticoagencia.mp3');

      this.audio.addEventListener('timeupdate', () => {
        if (!this.audio) return;
        const pct = this.audio.duration ? (this.audio.currentTime / this.audio.duration) * 100 : 0;
        this.audioProgress = pct;
        this.elapsedLabel  = this.formatSec(this.audio.currentTime);
      });

      this.audio.addEventListener('loadedmetadata', () => {
        if (!this.audio) return;
        this.durationLabel = this.formatSec(this.audio.duration);
      });

      this.audio.addEventListener('ended', () => this.stopPlayer());
    }
    return this.audio;
  }

  protected toggleAnthem(): void {
    const a = this.getAudio();
    if (this.isPlaying) {
      a.pause();
      this.isPlaying = false;
      clearInterval(this.waveIntervalId);
      this.soundBars = Array(14).fill(3);
    } else {
      a.play().catch(() => {});
      this.isPlaying = true;
      this.startWave();
    }
  }

  protected seekAudio(event: MouseEvent): void {
    const a = this.getAudio();
    if (!a.duration) return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const pct  = (event.clientX - rect.left) / rect.width;
    a.currentTime = pct * a.duration;
  }

  private startWave(): void {
    clearInterval(this.waveIntervalId);
    this.waveIntervalId = setInterval(() => {
      this.soundBars = this.soundBars.map(() => Math.floor(Math.random() * 20) + 4);
    }, 200);
  }

  private stopPlayer(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.isPlaying     = false;
    this.audioProgress = 0;
    this.elapsedLabel  = '0:00';
    this.soundBars     = Array(14).fill(3);
    clearInterval(this.waveIntervalId);
  }

  private formatSec(sec: number): string {
    const s = Math.floor(sec);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }

  ngOnDestroy(): void {
    this.stopPlayer();
    this.audio = null;
  }
}
