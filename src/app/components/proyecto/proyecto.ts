import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Microrelato {
  id: string;
  name: string;
  title: string;
  image: string;
  isGif: boolean;
  text: string;
  highlight: string;
}

interface Soundscape {
  id: number;
  title: string;
  description: string;
  duration: string;
  text: string;
}

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-fade-in py-12 px-4 max-w-7xl mx-auto">
      
      <!-- HERO ACADÉMICO -->
      <section class="text-center max-w-4xl mx-auto mb-20">
        <span class="px-3 py-1.5 bg-emerald-500/10 text-emerald-600  text-xs font-bold rounded-full uppercase tracking-wider">
          Trabajo de Grado / Proyecto de Investigación
        </span>
        <h1 class="text-4xl md:text-6xl font-extrabold text-slate-950  mt-5 font-heading tracking-tight leading-tight">
          Territorio Simbólico y Deriva Urbana
        </h1>
        <div class="w-24 h-1.5 bg-gradient-to-r from-emerald-500 via-amber-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        <p class="text-slate-650  mt-6 text-sm md:text-lg leading-relaxed">
          "El devenir de la ciudad permite establecer simbólicamente la relación con la misma; la idea de lo urbano va más allá de lo físico y trasciende a las relaciones que se gestan entre los humanos que circundan, accionan y movilizan el espacio."
        </p>
        <p class="text-xs text-slate-400 mt-3 italic">
          — Observación participativa y cartografía teórico-simbólica en La Virginia, Risaralda
        </p>
      </section>

      <!-- TIMELAPSE / HYPERLAPSE SECTION -->
      <section class="mb-24 bg-white  border border-slate-100  p-6 md:p-10 rounded-3xl shadow-xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div class="lg:col-span-5">
            <span class="text-xs font-bold text-blue-600  uppercase tracking-wider block mb-2">Producto Hipermedial</span>
            <h2 class="text-2xl md:text-3.5xl font-extrabold text-slate-900  font-heading leading-tight mb-4">
              Time Lapse &amp; Hyperlapse Urbano
            </h2>
            <p class="text-slate-600  text-xs md:text-sm leading-relaxed mb-4">
              A través de la técnica de cámara rápida (hyperlapse), este fragmento visual registra el pulso dinámico de los transeúntes, la confluencia vehicular y el movimiento solar sobre la arquitectura de La Virginia.
            </p>
            <p class="text-slate-600  text-xs md:text-sm leading-relaxed">
              Es un testimonio físico del fluir del tiempo en el espacio público, donde la aceleración de las imágenes exalta la interacción constante entre las personas y las calles.
            </p>
          </div>
          
          <div class="lg:col-span-7">
            <div class="bg-slate-950 p-2.5 rounded-2xl shadow-inner border border-slate-200/50 ">
              <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                <video src="hyperlapse.mp4" controls loop muted autoplay playsinline
                       class="w-full h-full object-cover">
                  Tu navegador no soporta la reproducción de video HTML5.
                </video>
                <span class="absolute top-4 left-4 bg-slate-900/80 text-white border border-white/10 px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider backdrop-blur-md">
                  📹 Archivo Local: hyperlapse.mp4
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MICRÓRELATOS (TWO-COLUMN ALTERNATING GRID) -->
      <section class="mb-24">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl font-extrabold text-slate-950  font-heading">
            Microrrelatos y Voces del Territorio
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mt-3 rounded-full"></div>
          <p class="text-xs md:text-sm text-slate-500  mt-3">
            Cuatro relatos cortos que indagan en las memorias, vivencias cotidianas y la percepción de seguridad del municipio.
          </p>
        </div>

        <div class="space-y-16">
          <!-- Iterate Microrelatos -->
          <div *ngFor="let relato of relatos; let i = index" 
               class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center border-b border-slate-100  pb-12 last:border-0 last:pb-0">
            
            <!-- Column A: Visual (Image / Gif) -->
            <div class="lg:col-span-5" [ngClass]="{'lg:order-2': i % 2 !== 0}">
              <div class="relative bg-white  p-2.5 rounded-3xl shadow-lg border border-slate-150/40  group overflow-hidden">
                <div class="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                  <img [src]="relato.image" [alt]="relato.name"
                       class="w-full h-full object-cover opacity-95 group-hover:scale-101.5 transition duration-500"
                       (error)="handleImageError($event, i)">
                  
                  <span class="absolute top-4 left-4 bg-slate-950/70 border border-white/10 text-amber-400 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm">
                    {{ relato.isGif ? '🎬 Formato GIF' : '📷 Fotografía' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Column B: Narrative Text -->
            <div class="lg:col-span-7" [ngClass]="{'lg:order-1': i % 2 !== 0}">
              <div class="space-y-4">
                <span class="text-xs font-bold text-emerald-600  uppercase tracking-widest block">
                  Microrrelato #{{ i + 1 }}
                </span>
                <h3 class="text-2xl md:text-3.5xl font-extrabold text-slate-900  font-heading">
                  {{ relato.title }}
                </h3>
                <h4 class="text-sm font-bold text-slate-500  italic">
                  Personaje: {{ relato.name }}
                </h4>
                
                <p class="text-slate-650  text-sm md:text-base leading-relaxed text-justify">
                  {{ relato.text }}
                </p>

                <div class="p-4 bg-amber-500/5  border-l-4 border-amber-500 rounded-r-xl">
                  <p class="text-xs md:text-sm text-slate-700  italic font-semibold">
                    "{{ relato.highlight }}"
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- AMBIENTE SONORO (MICRORRELATOS) -->
      <section class="mb-24">
        
        <div class="max-w-2xl mx-auto bg-amber-50 border-2 border-amber-100 p-6 md:p-8 rounded-3xl shadow-md relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none"></div>
          <div class="relative z-10">
            <span class="text-[10px] font-bold text-amber-700 uppercase tracking-widest block mb-2 text-center">Narración de Microrrelatos</span>
            <h3 class="text-2xl md:text-3xl font-extrabold text-stone-900 font-heading mb-6 text-center">
              Escucha las historias
            </h3>
            
            <!-- Soundscape list -->
            <div class="space-y-3">
              <div *ngFor="let track of tracks"
                   (click)="playTrack(track.id, track.text)"
                   class="p-3 rounded-xl border transition duration-200 cursor-pointer flex justify-between items-center"
                   [ngClass]="activeTrackId === track.id
                     ? 'bg-amber-100 border-amber-400 text-stone-900 shadow-inner'
                     : 'bg-white border-stone-200 hover:bg-amber-50 text-stone-800'">
                <div class="flex items-center gap-3">
                  <span class="text-sm">{{ activeTrackId === track.id && isTrackPlaying ? '⏸️' : '🔊' }}</span>
                  <div>
                    <h4 class="text-sm font-bold leading-tight font-sans text-stone-900">{{ track.title }}</h4>
                    <p class="text-[10px] text-stone-500 mt-0.5 font-sans">{{ track.description }}</p>
                  </div>
                </div>
                <span class="text-[10px] font-mono text-amber-600 font-bold uppercase">Narrar</span>
              </div>
              <!-- Stop button -->
              <button *ngIf="isTrackPlaying" (click)="stopSpeech()"
                      class="w-full mt-3 py-2.5 rounded-lg bg-red-100 border border-red-200 hover:bg-red-200 text-red-700 text-xs font-sans font-bold transition shadow-sm">
                ⏹ Detener Narración
              </button>
            </div>
          </div>

          <!-- Animated Waveform -->
          <div class="mt-8 flex flex-col gap-2 relative z-10">
            <div class="flex gap-1 justify-center items-end h-8">
              <div *ngFor="let bar of soundBars"
                   class="w-1.5 bg-amber-500 rounded-full transition-all duration-200"
                   [style.height.px]="isTrackPlaying ? bar : 3"></div>
            </div>
            <p class="text-[10px] text-stone-500 text-center font-sans font-bold uppercase tracking-widest mt-2">
              {{ isTrackPlaying ? 'Narrando...' : 'Selecciona un relato para escuchar' }}
            </p>
          </div>
        </div>

      </section>

      <!-- CARTOGRAFÍA, PERSONAJES, ESPACIOS & OBJETOS -->
      <section class="mb-24">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl font-extrabold text-slate-950  font-heading">
            Dimensión Simbólica del Espacio Urbano
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-3 rounded-full"></div>
          <p class="text-xs md:text-sm text-slate-500  mt-3">
            Análisis cualitativo del territorio a través de sus elementos representativos.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Cartografía Simbólica -->
          <div class="bg-white  border border-slate-100  p-6 rounded-3xl shadow-sm space-y-4 hover:shadow-md transition">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl">🗺️</div>
            <h3 class="text-lg font-bold text-slate-900  font-heading">Cartografía Simbólica</h3>
            <p class="text-xs md:text-sm text-slate-650  leading-relaxed">
              Mapeo de las percepciones de los habitantes sobre zonas de riesgo, centralidades comerciales (puesto de Jorge) y trayectos peatonales seguros. Representa el espacio vivido por encima del espacio físico.
            </p>
          </div>

          <!-- Personajes Característicos -->
          <div class="bg-white  border border-slate-100  p-6 rounded-3xl shadow-sm space-y-4 hover:shadow-md transition">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl">🧑🏽‍🤝‍🧑🏽</div>
            <h3 class="text-lg font-bold text-slate-900  font-heading">Personajes Característicos</h3>
            <p class="text-xs md:text-sm text-slate-650  leading-relaxed">
              El tejido social se construye a partir de voces cotidianas como doña Miriam, el rolo y don Jorge. Ellos encarnan la memoria viva, la resiliencia laboral y la construcción comunitaria del municipio.
            </p>
          </div>

          <!-- Objetos y Espacios -->
          <div class="bg-white  border border-slate-100  p-6 rounded-3xl shadow-sm space-y-4 hover:shadow-md transition">
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-xl">🛶</div>
            <h3 class="text-lg font-bold text-slate-900  font-heading">Objetos y Espacios Representativos</h3>
            <p class="text-xs md:text-sm text-slate-650  leading-relaxed">
              La canoa, las salsas artesanales, la estatua del Caballero Gaucho y las casas tradicionales de bareque actúan como anclas físicas de la memoria colectiva del Puerto Dulce.
            </p>
          </div>
        </div>
      </section>

      <!-- MINI DOCUMENTAL SECTION -->
      <section class="max-w-4xl mx-auto text-center border-t border-slate-150  pt-16">
        <span class="text-xs font-bold text-amber-500 uppercase tracking-widest block mb-2">Producto Final Consolidado</span>
        <h2 class="text-3xl font-extrabold text-slate-950  font-heading mb-6">Mini Documental</h2>
        <p class="text-slate-650  text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
          El consolidado hipermedial del proyecto de campo, estructurado en un video etnográfico que recopila las tomas aéreas del río, las entrevistas a los personajes y el análisis de la deriva urbana.
        </p>
        
        <div class="bg-slate-950 p-2.5 rounded-3xl shadow-2xl border border-slate-200/50 ">
          <div class="aspect-video rounded-2xl overflow-hidden bg-black">
            <!-- Embebed YouTube representing the mini-doc -->
            <iframe 
              src="https://www.youtube.com/embed/H_itndvSb1k" 
              title="Mini Documental - Territorio Simbólico La Virginia" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
              class="w-full h-full">
            </iframe>
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
  `]
})
export class ProyectoComponent implements OnInit {
  protected activeTrackId: number | null = null;
  protected isTrackPlaying = false;
  protected soundBars: number[] = Array(20).fill(3);
  private soundIntervalId: any = null;

  // The 4 stories from public/assets/microrelatos/
  protected relatos: Microrelato[] = [
    {
      id: 'mirian',
      name: 'Doña Miriam',
      title: 'La Memoria Viva de San Cayetano',
      image: 'assets/microrelatos/Doña Mirian/Doña Mirian.jpeg',
      isGif: false,
      text: 'Doña Miriam se considera como una fundadora del barrio San Cayetano y también fue una de las voces más completas para entender cómo La Virginia pasó de ser sólo un terreno de trocha. Nos contó que fue estudiante del colegio de monjas, viviendo en una casa que anteriormente era de bareque con una trocha como carretera. Miriam también nos habló sobre el mito de un pez dorado que muchos pescadores llegaron a ver en el río Cauca; aparte, nos habló sobre la señora María Isabel, perteneciente de un gran terreno de parte del barrio San Cayetano (a quien incluso veían en caballo), y considera que frenó el desarrollo del pueblo al negarse a entregar sus tierras. Por último, nos compartió recuerdos del Caballero Gaucho (debido a la cercanía de sus viviendas), a quien describió como un hombre reservado y sin problemas. La venta de su casa tras su muerte y la colocación de su estatua siguen causando algo de nostalgia e intriga en la comunidad.',
      highlight: 'Mi casa era de bareque y la calle una trocha. Aquí construimos el barrio desde cero con sudor de ribera.'
    },
    {
      id: 'rolo',
      name: 'El Rolo',
      title: 'Apariencia Urbana y Realidad de Seguridad',
      image: 'assets/microrelatos/El Rolo/El Rolo.gif',
      isGif: true,
      text: '“El Rolo”, un habitante y trabajador local del municipio, nos brindó su perspectiva sobre la seguridad del entorno. Nos desmintió un poco el aspecto sobre zonas de riesgo, dándonos a entender que algunos sectores tienen una estética urbana y desgastada, pero que solamente se queda en esa “feita apariencia”. Algo que nos expresó con firmeza es que el problema más grave no es el microtráfico ni las bandas criminales, sino la preocupante falta de civismo vial, refiriéndose a que los vehículos no respetan al peatón y que las motos circulando a altas horas de la noche generan peligro de accidentes. Con respecto a la policía local, califica su labor como buena y concluye de forma pragmática: "como uno no anda en malos cuentos, pues uno no tiene problema con ellos".',
      highlight: 'Las calles no son peligrosas como dicen, solo tienen una "feita apariencia". El verdadero peligro es la falta de cultura vial.'
    },
    {
      id: 'jorge',
      name: 'Jorge el de las papas',
      title: '23 Años de Tradición y Sabor Crujiente',
      image: 'assets/microrelatos/Jorge el de las papas/don jorge papas.jpeg',
      isGif: false,
      text: 'Con más de 23 años de tradición, don Jorge es el propietario de un icónico puesto de papitas fritas que se ha convertido en un referente gastronómico obligado de La Virginia. Lo que inició simplemente por consejo de un amigo cercano se transformó con los años en su sustento y pasión. Afirma que su buena reputación se debe a su constancia, a la frescura de sus papas y a sus salsas y mieles artesanales que le dan un toque único. Dotado de un gran carisma que le permite llevarse bien con todo el mundo, afirma con orgullo nunca haber sido víctima de robos. Don Jorge representa en La Virginia el valor del trabajo duro, el sabor tradicional y la identidad solidaria del pueblo.',
      highlight: 'Empecé por el consejo de un amigo, y hoy mis papas con miel artesanal son parte de la identidad de este pueblo.'
    },
    {
      id: 'hernan',
      name: 'Hernán',
      title: 'La Noche del Puente Mocatán',
      image: 'assets/microrelatos/hernan/hernancho.jpeg',
      isGif: false,
      text: 'Ocurrió una noche mientras trabajaba como guachimán en unos cultivos de maíz, justo al otro lado del puente Mocatán, donde pasa el río Risaralda. Salió un momento al río a recoger agua y, cuando iba de regreso, vio aparecer en el puente una silueta con un sombrero grandísimo. El personaje era alto como un poste; pasó exactamente frente a la entrada para Portobelo y siguió de largo hacia el ingenio. En el momento no se asustó, se le quedó mirando fijo para entender qué era eso, preguntándose: «¿Y esto qué es?». El susto de verdad le dio después, cuando ya había pasado. Por fortuna no lo agredió ni le hizo nada; simplemente se esfumó en la noche, dejándolo con la duda de si lo había mirado o no, pues él solo se dedicó a verlo pasar.',
      highlight: 'Se esfumó en la noche, dejándome con la duda de si me había mirado o no. Solo me dediqué a verlo pasar.'
    },
    {
      id: 'juanmanuel',
      name: 'Juan Manuel Guerrero',
      title: 'Resiliencia desde la Orilla del Cauca',
      image: 'assets/microrelatos/Juan  manuel/Juan Manuel.jpeg',
      isGif: false,
      text: 'Juan Manuel Guerrero es un habitante de 37 años de La Virginia que permitió conocer un poco sobre su realidad cruda, que incluso marca la historia del municipio cerca del Río Cauca. Con honestidad, recuerda cómo su infancia fue marcada por la violencia, cuando tuvieron que ayudar a muchas familias a rescatar del río los cuerpos de sus seres queridos que bajaban flotando desde el Valle. También menciona mitos como el pez capaz de hundir botes y, más personalmente, cómo la falta de empleo en la región —principalmente por la caña y los areneros— impulsó la motivación de muchos jóvenes, incluido él, hacia bandas criminales y el famoso "Plan Pistola", referenciando personajes como Martín y Jeringa. A día de hoy Juan Manuel es una persona dedicada a la pesca regular, alejado de ese camino, inspirando con su resiliencia a trabajar a pesar del alto costo de la vida y la falta de oportunidades que tuvo para sacar adelante a su familia.',
      highlight: 'Uno aprende a sacar la familia adelante con lo que el río da. Ese camino oscuro no era el mío, aunque casi me lleva.'
    }
  ];

  protected tracks: Soundscape[] = [
    {
      id: 1,
      title: 'Microrrelato: Doña Miriam',
      description: 'La Memoria Viva de San Cayetano — click para narrar',
      duration: '~2 min',
      text: 'Doña Miriam se considera como una fundadora del barrio San Cayetano. Nos contó que fue estudiante del colegio de monjas, viviendo en una casa que anteriormente era de bareque con una trocha como carretera. Miriam también nos habló sobre el mito de un pez dorado que muchos pescadores llegaron a ver en el río Cauca; aparte, nos habló sobre la señora María Isabel, perteneciente de un gran terreno de parte del barrio San Cayetano a quien incluso veían en caballo, y considera que frenó el desarrollo del pueblo al negarse a entregar sus tierras. Por último, nos compartió recuerdos del Caballero Gaucho, a quien describió como un hombre reservado y sin problemas. La venta de su casa tras su muerte y la colocación de su estatua siguen causando algo de nostalgia e intriga en la comunidad.'
    },
    {
      id: 2,
      title: 'Microrrelato: El Rolo',
      description: 'Apariencia Urbana y Seguridad — click para narrar',
      duration: '~1.5 min',
      text: 'El Rolo, un habitante y trabajador local, nos brindó su perspectiva sobre la seguridad del entorno. Nos desmitió el aspecto sobre zonas de riesgo, dándonos a entender que algunos sectores tienen una estética urbana y desgastada, pero que solamente se queda en esa feíta apariencia. Algo que nos expresó con firmeza es que el problema más grave no es el microtráfico ni las bandas criminales, sino la preocupante falta de civismo vial, refiriéndose a que los vehículos no respetan al peatón y que las motos circulando a altas horas de la noche generan peligro de accidentes. Con respecto a la policía local, califica su labor como buena y concluye: como uno no anda en malos cuentos, pues uno no tiene problema con ellos.'
    },
    {
      id: 3,
      title: 'Microrrelato: Hernán',
      description: 'La Noche del Puente Mocatán — click para narrar',
      duration: '~1 min',
      text: 'Ocurrió una noche mientras trabajaba como guachimán en unos cultivos de maíz, justo al otro lado del puente Mocatán, donde pasa el río Risaralda. Salió un momento al río a recoger agua y, cuando iba de regreso, vio aparecer en el puente una silueta con un sombrero grandísimo. El personaje era alto como un poste; pasó exactamente frente a la entrada para Portobelo y siguió de largo hacia el ingenio. En el momento no se asustó, se le quedó mirando fijo para entender qué era eso, preguntándose: ¿Y esto qué es? El susto de verdad le dio después, cuando ya había pasado. Por fortuna no lo agredió ni le hizo nada; simplemente se esfumó en la noche.'
    },
    {
      id: 4,
      title: 'Microrrelato: Juan Manuel Guerrero',
      description: 'Resiliencia desde la Orilla del Cauca — click para narrar',
      duration: '~2 min',
      text: 'Juan Manuel Guerrero es un habitante de 37 años de La Virginia que permitió conocer un poco sobre su realidad cruda, que incluso marca la historia del municipio cerca del Río Cauca. Con honestidad, recuerda cómo su infancia fue marcada por la violencia, cuando tuvieron que ayudar a muchas familias a rescatar del río los cuerpos de sus seres queridos que bajaban flotando desde el Valle. También menciona mitos como el pez capaz de hundir botes y cómo la falta de empleo en la región impulsó la motivación de muchos jóvenes, incluido él, hacia bandas criminales. A día de hoy Juan Manuel es una persona dedicada a la pesca regular, alejado de ese camino, inspirando con su resiliencia a trabajar a pesar del alto costo de la vida.'
    }
  ];

  ngOnInit(): void {}

  protected playTrack(id: number, text: string): void {
    // Stop any ongoing speech
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    if (this.activeTrackId === id && this.isTrackPlaying) {
      // Toggle off
      this.isTrackPlaying = false;
      this.activeTrackId = null;
      if (this.soundIntervalId) clearInterval(this.soundIntervalId);
      this.soundBars = Array(20).fill(3);
      return;
    }

    this.activeTrackId = id;
    this.isTrackPlaying = true;

    // Start waveform animation
    if (this.soundIntervalId) clearInterval(this.soundIntervalId);
    this.soundIntervalId = setInterval(() => {
      this.soundBars = this.soundBars.map(() => Math.floor(Math.random() * 24) + 4);
    }, 150);

    // Use Web Speech API with Spanish female Microsoft voice
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-CO'; // Colombian Spanish
      utterance.rate = 0.88;
      utterance.pitch = 1.05;

      // Try to get Microsoft female voice in Spanish
      const trySpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        // Priority order: Microsoft female Spanish voices
        const preferred = [
          'Microsoft Sabina Desktop - Spanish (Mexico)',
          'Microsoft Helena Desktop - Spanish (Spain)',
          'Microsoft Laura Desktop - Spanish (Spain)',
          'Microsoft Paloma Desktop - Spanish (United States)',
          'Microsoft Maria Desktop - Spanish (Spain)',
          'Microsoft Raquel Online (Natural) - Spanish (Spain)',
          'Microsoft Dalia Online (Natural) - Spanish (Mexico)',
          'Microsoft Renata Online (Natural) - Spanish (Colombia)',
        ];
        let selectedVoice: SpeechSynthesisVoice | undefined;
        for (const name of preferred) {
          selectedVoice = voices.find(v => v.name === name);
          if (selectedVoice) break;
        }
        // Fallback: any female Spanish voice
        if (!selectedVoice) {
          selectedVoice = voices.find(v => v.lang.startsWith('es') && (v.name.toLowerCase().includes('female') || v.name.includes('Helena') || v.name.includes('Laura') || v.name.includes('Dalia') || v.name.includes('Sabina') || v.name.includes('Paloma') || v.name.includes('Maria')));
        }
        // Fallback: any Spanish voice
        if (!selectedVoice) {
          selectedVoice = voices.find(v => v.lang.startsWith('es'));
        }
        if (selectedVoice) utterance.voice = selectedVoice;

        utterance.onend = () => {
          this.isTrackPlaying = false;
          this.activeTrackId = null;
          if (this.soundIntervalId) clearInterval(this.soundIntervalId);
          this.soundBars = Array(20).fill(3);
        };
        window.speechSynthesis.speak(utterance);
      };

      // Voices may not be loaded yet on first call
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.addEventListener('voiceschanged', trySpeak, { once: true });
      } else {
        trySpeak();
      }
    }
  }

  protected stopSpeech(): void {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    this.isTrackPlaying = false;
    this.activeTrackId = null;
    if (this.soundIntervalId) clearInterval(this.soundIntervalId);
    this.soundBars = Array(20).fill(3);
  }

  protected handleImageError(event: any, index: number): void {
    // If local image fails to load, use a nice Unsplash portrait fallback
    const fallbacks = [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80', // Woman portrait for Miriam
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', // Man portrait for Rolo
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80', // Older man portrait for Jorge
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80', // Young man portrait for Hernan
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'  // Man portrait for Juan Manuel
    ];
    event.target.src = fallbacks[index % fallbacks.length];
  }
}
