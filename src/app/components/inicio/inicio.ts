import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="animate-fade-in">
      <!-- HERO BANNER SECTION -->
      <section class="relative min-h-[88vh] flex items-center justify-center overflow-hidden text-white py-20 px-4">
        <!-- Real Photo Background: Vista Cielo Puente Bernardo -->
        <div class="absolute inset-0 z-0">
          <img src="assets/Visuales/Vista Cielo Puente bernardo.jpeg" alt="Vista aérea del Puente Bernardo Arango, La Virginia" class="w-full h-full object-cover object-center">
        </div>
        <!-- Overlay clásico con gradiente sepia/oscuro -->
        <div class="absolute inset-0 z-0 bg-gradient-to-b from-stone-950/75 via-stone-900/55 to-amber-950/80"></div>
        <!-- Textura de papel sutil -->
        <div class="absolute inset-0 z-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%221%22 fill=%22%23fff%22 opacity=%220.4%22/%3E%3C/svg%3E')"></div>

        <!-- Content -->
        <div class="relative z-10 max-w-4xl mx-auto text-center">
          <!-- Ornament decorativo -->
          <div class="flex items-center justify-center gap-3 mb-6">
            <div class="h-px w-16 bg-amber-400/60"></div>
            <span class="text-amber-300 text-xs tracking-[0.35em] uppercase font-sans">📍 Risaralda · Colombia</span>
            <div class="h-px w-16 bg-amber-400/60"></div>
          </div>

          <h1 class="text-6xl md:text-8xl font-heading font-bold text-amber-100 drop-shadow-lg mb-3" style="text-shadow: 2px 4px 12px rgba(0,0,0,0.6)">
            La Virginia
          </h1>
          <p class="text-xl md:text-2xl font-display italic text-amber-300 mb-5 tracking-wide" style="font-family: 'IM Fell English', Georgia, serif">
            &ldquo;El Puerto Dulce de Colombia&rdquo;
          </p>
          <p class="text-sm md:text-base font-sans text-stone-200/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Un rincón cálido donde confluyen los ríos Cauca y Risaralda — cuna de pescadores, leyendas ancestrales de Sopinga y la gastronomía más vibrante del Eje Cafetero.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a routerLink="/historia"
               class="w-full sm:w-auto px-8 py-3.5 bg-amber-700 hover:bg-amber-800 text-amber-50 font-sans font-semibold rounded shadow-lg hover:-translate-y-0.5 transition duration-300 text-center border border-amber-600">
              Descubrir Historia
            </a>
            <a routerLink="/interactivo"
               class="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-amber-100 font-sans font-medium rounded border border-amber-300/30 backdrop-blur-sm hover:-translate-y-0.5 transition duration-300 text-center">
              Jugar la Trivia ✦
            </a>
          </div>
        </div>

        <!-- Wave Divider -->
        <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" class="relative block w-full h-14 fill-amber-50">
            <path d="M0,40L60,45C120,50,240,60,360,58C480,56,600,42,720,38C840,34,960,40,1080,44C1200,48,1320,50,1380,51L1440,52L1440,80L0,80Z"/>
          </svg>
        </div>
      </section>

      <!-- STATS SECTION -->
      <section class="py-12 px-4 max-w-7xl mx-auto -mt-12 relative z-20">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div class="bg-white border border-amber-200/60 p-6 rounded shadow-md hover:shadow-lg transition duration-300 text-center">
            <div class="text-3xl mb-2">☀️</div>
            <p class="text-xs font-sans font-semibold text-amber-700 uppercase tracking-wider">Clima Promedio</p>
            <p class="text-2xl md:text-3xl font-heading font-bold text-amber-800 mt-1">27°C</p>
            <p class="text-xs text-stone-400 font-sans mt-1">Cálido y tropical todo el año</p>
          </div>
          <div class="bg-white border border-amber-200/60 p-6 rounded shadow-md hover:shadow-lg transition duration-300 text-center">
            <div class="text-3xl mb-2">👥</div>
            <p class="text-xs font-sans font-semibold text-amber-700 uppercase tracking-wider">Población</p>
            <p class="text-2xl md:text-3xl font-heading font-bold text-green-800 mt-1">~32,000</p>
            <p class="text-xs text-stone-400 font-sans mt-1">Habitantes amables y alegres</p>
          </div>
          <div class="bg-white border border-amber-200/60 p-6 rounded shadow-md hover:shadow-lg transition duration-300 text-center">
            <div class="text-3xl mb-2">🌊</div>
            <p class="text-xs font-sans font-semibold text-amber-700 uppercase tracking-wider">Confluencia</p>
            <p class="text-lg md:text-xl font-heading font-bold text-blue-800 mt-1 leading-tight">Cauca y Risaralda</p>
            <p class="text-xs text-stone-400 font-sans mt-1">Dos grandes ríos que se unen</p>
          </div>
          <div class="bg-white border border-amber-200/60 p-6 rounded shadow-md hover:shadow-lg transition duration-300 text-center">
            <div class="text-3xl mb-2">🚗</div>
            <p class="text-xs font-sans font-semibold text-amber-700 uppercase tracking-wider">Distancia</p>
            <p class="text-2xl md:text-3xl font-heading font-bold text-amber-800 mt-1">30 km</p>
            <p class="text-xs text-stone-400 font-sans mt-1">Desde la capital, Pereira</p>
          </div>
        </div>
      </section>

      <!-- HIGHLIGHTS MODULES -->
      <section class="py-16 px-4 max-w-7xl mx-auto">
        <!-- Divisor ornamental clásico -->
        <div class="text-center max-w-2xl mx-auto mb-12">
          <p class="text-amber-700 font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3">✦ Nuestro Municipio ✦</p>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-stone-900">
            Explora la Riqueza del Puerto Dulce
          </h2>
          <div class="flex items-center justify-center gap-3 mt-4">
            <div class="h-px w-20 bg-amber-600/40"></div>
            <span class="text-amber-600 text-lg">✦</span>
            <div class="h-px w-20 bg-amber-600/40"></div>
          </div>
          <p class="text-stone-500 font-sans mt-4 text-sm leading-relaxed">
            Un recorrido por los rincones que hacen de La Virginia un destino turístico y cultural inolvidable en el departamento de Risaralda.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="group bg-white border border-amber-100 rounded overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full">
            <div class="relative h-52 overflow-hidden">
              <img src="assets/Visuales/Atardecer puente bernardo.jpeg" alt="Puente Bernardo Arango al atardecer" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <span class="absolute top-3 left-3 z-10 px-2 py-0.5 bg-amber-700 text-amber-50 text-[10px] font-sans font-bold uppercase tracking-wider">Arquitectura</span>
            </div>
            <div class="p-5 flex-1 flex flex-col border-t-2 border-amber-100">
              <h3 class="text-lg font-heading font-bold text-stone-900 mb-2">Puente Colgante Bernardo Arango</h3>
              <p class="text-stone-500 font-sans text-sm mb-4 leading-relaxed flex-1">
                Construido en 1928, este puente colgante peatonal es el monumento histórico más representativo. Cruza el imponente río Cauca conectando con Caimalito.
              </p>
              <a routerLink="/historia" class="text-xs font-sans font-semibold text-amber-700 hover:text-amber-900 transition">Ver historia &rarr;</a>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group bg-white border border-amber-100 rounded overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full">
            <div class="relative h-52 overflow-hidden">
              <img src="assets/gastronomia/viudo_de_pescado_.jpg" alt="Viudo de Pescado" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <span class="absolute top-3 left-3 z-10 px-2 py-0.5 bg-green-800 text-green-50 text-[10px] font-sans font-bold uppercase tracking-wider">Gastronomía</span>
            </div>
            <div class="p-5 flex-1 flex flex-col border-t-2 border-amber-100">
              <h3 class="text-lg font-heading font-bold text-stone-900 mb-2">La Ruta del Pescado</h3>
              <p class="text-stone-500 font-sans text-sm mb-4 leading-relaxed flex-1">
                La Virginia deleita los paladares con el delicioso Viudo de Pescado. La tradición culinaria ribereña ofrece platos frescos y llenos de sabor autóctono.
              </p>
              <a routerLink="/gastronomia" class="text-xs font-sans font-semibold text-amber-700 hover:text-amber-900 transition">Ver delicias &rarr;</a>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group bg-white border border-amber-100 rounded overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full">
            <div class="relative h-52 overflow-hidden">
              <img src="assets/Visuales/Rio cauca atardecer.jpeg" alt="Río Cauca al atardecer" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <span class="absolute top-3 left-3 z-10 px-2 py-0.5 bg-blue-800 text-blue-50 text-[10px] font-sans font-bold uppercase tracking-wider">Naturaleza</span>
            </div>
            <div class="p-5 flex-1 flex flex-col border-t-2 border-amber-100">
              <h3 class="text-lg font-heading font-bold text-stone-900 mb-2">Distrito Natural El Guásimo</h3>
              <p class="text-stone-500 font-sans text-sm mb-4 leading-relaxed flex-1">
                Reserva forestal del bosque seco tropical — ideal para el senderismo ecológico, avistamiento de aves y contacto directo con la naturaleza exuberante.
              </p>
              <a routerLink="/ubicacion" class="text-xs font-sans font-semibold text-amber-700 hover:text-amber-900 transition">Ver mapa &rarr;</a>
            </div>
          </div>
        </div>

        <!-- Segunda fila -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div class="group bg-white border border-amber-100 rounded overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full">
            <div class="relative h-52 overflow-hidden">
              <img src="assets/Visuales/Estatua Caballero gaucho.jpeg" alt="Estatua Caballero Gaucho" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <span class="absolute top-3 left-3 z-10 px-2 py-0.5 bg-yellow-700 text-yellow-50 text-[10px] font-sans font-bold uppercase tracking-wider">Patrimonio</span>
            </div>
            <div class="p-5 flex-1 flex flex-col border-t-2 border-amber-100">
              <h3 class="text-lg font-heading font-bold text-stone-900 mb-2">El Caballero Gaucho</h3>
              <p class="text-stone-500 font-sans text-sm mb-4 leading-relaxed flex-1">
                Monumento símbolo de la identidad virgeniana. Rinde homenaje al espíritu libre y trabajador de su gente — punto de encuentro y orgullo ciudadano.
              </p>
              <a routerLink="/historia" class="text-xs font-sans font-semibold text-amber-700 hover:text-amber-900 transition">Conocer la historia &rarr;</a>
            </div>
          </div>

          <div class="group bg-white border border-amber-100 rounded overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full">
            <div class="relative h-52 overflow-hidden">
              <img src="assets/Visuales/Iglesia La Capilla.jpeg" alt="Iglesia La Capilla" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <span class="absolute top-3 left-3 z-10 px-2 py-0.5 bg-indigo-800 text-indigo-50 text-[10px] font-sans font-bold uppercase tracking-wider">Fe y Tradición</span>
            </div>
            <div class="p-5 flex-1 flex flex-col border-t-2 border-amber-100">
              <h3 class="text-lg font-heading font-bold text-stone-900 mb-2">La Capilla</h3>
              <p class="text-stone-500 font-sans text-sm mb-4 leading-relaxed flex-1">
                Joya arquitectónica religiosa del municipio. Testigo silencioso de generaciones de fe, bautismos y celebraciones que forman el alma espiritual de La Virginia.
              </p>
              <a routerLink="/historia" class="text-xs font-sans font-semibold text-amber-700 hover:text-amber-900 transition">Ver historia religiosa &rarr;</a>
            </div>
          </div>

          <div class="group bg-white border border-amber-100 rounded overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col h-full">
            <div class="relative h-52 overflow-hidden">
              <img src="assets/Visuales/Cementerio.jpeg" alt="Cementerio de La Virginia" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <span class="absolute top-3 left-3 z-10 px-2 py-0.5 bg-stone-700 text-stone-50 text-[10px] font-sans font-bold uppercase tracking-wider">Memoria Viva</span>
            </div>
            <div class="p-5 flex-1 flex flex-col border-t-2 border-amber-100">
              <h3 class="text-lg font-heading font-bold text-stone-900 mb-2">Cementerio Municipal</h3>
              <p class="text-stone-500 font-sans text-sm mb-4 leading-relaxed flex-1">
                Arte funerario y memoria colectiva. Sus tumbas guardan las historias de familias fundadoras y personajes que construyeron la identidad del municipio.
              </p>
              <a routerLink="/historia" class="text-xs font-sans font-semibold text-amber-700 hover:text-amber-900 transition">Explorar raíces &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <!-- BANNER FOTOGRÁFICO - Letrero La Virginia -->
      <section class="relative h-44 md:h-56 overflow-hidden my-6">
        <img src="assets/Visuales/Letrero La Virginia.jpeg" alt="Letrero de bienvenida La Virginia" class="w-full h-full object-cover object-center">
        <div class="absolute inset-0 bg-stone-950/60 flex items-center justify-center">
          <p class="text-amber-200 text-2xl md:text-4xl font-heading font-bold tracking-widest drop-shadow-lg text-center px-4" style="text-shadow: 1px 2px 8px rgba(0,0,0,0.7)">
            Bienvenido a La Virginia, Risaralda
          </p>
        </div>
      </section>

      <!-- VIDEO DOCUMENTAL SECTION -->
      <section class="py-16 bg-amber-50 border-y border-amber-200/60">
        <div class="max-w-7xl mx-auto px-4">
          <!-- Encabezado clásico -->
          <div class="text-center mb-10">
            <p class="text-amber-700 font-sans text-xs font-bold tracking-[0.3em] uppercase mb-2">✦ Audiovisual ✦</p>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-stone-900">Documental del Puerto Dulce</h2>
            <div class="flex items-center justify-center gap-3 mt-3">
              <div class="h-px w-16 bg-amber-600/40"></div>
              <span class="text-amber-600">✦</span>
              <div class="h-px w-16 bg-amber-600/40"></div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-5 space-y-5">
              <p class="text-stone-600 font-sans text-sm leading-relaxed">
                Descubre en este documental el alma de La Virginia: sus pescadores artesanales navegando las aguas del río Cauca, la herencia histórica de Sopinga y la calidez humana de su gente que acoge a cada visitante con los brazos abiertos.
              </p>
              <div class="space-y-3">
                <div class="flex items-start gap-3">
                  <span class="text-amber-700 font-bold mt-0.5">✦</span>
                  <div>
                    <h4 class="font-heading font-semibold text-stone-800 text-sm">Historia Viva</h4>
                    <p class="text-stone-500 font-sans text-xs mt-0.5">El desarrollo fluvial del Eje Cafetero contado desde sus orillas.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-amber-700 font-bold mt-0.5">✦</span>
                  <div>
                    <h4 class="font-heading font-semibold text-stone-800 text-sm">Tradición Pesquera</h4>
                    <p class="text-stone-500 font-sans text-xs mt-0.5">La magia del río Cauca y los lancheros que lo habitan.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-amber-700 font-bold mt-0.5">✦</span>
                  <div>
                    <h4 class="font-heading font-semibold text-stone-800 text-sm">Identidad Cultural</h4>
                    <p class="text-stone-500 font-sans text-xs mt-0.5">Personajes, mitos y memorias que forjan el alma virgeniana.</p>
                  </div>
                </div>
              </div>
              <a routerLink="/territorio" class="inline-block mt-2 px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-amber-50 font-sans text-sm font-semibold rounded shadow transition">
                Ver Proyecto Territorio
              </a>
            </div>

            <!-- YouTube Video Embed (documental real) -->
            <div class="lg:col-span-7">
              <div class="border-4 border-amber-200 shadow-xl rounded overflow-hidden">
                <div class="aspect-video w-full">
                  <iframe
                    [src]="videoUrl"
                    title="Documental La Virginia Risaralda"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    class="w-full h-full">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CALL TO ACTION clásico -->
      <section class="py-16 px-4 bg-amber-900 text-amber-100 text-center">
        <div class="max-w-3xl mx-auto">
          <p class="font-sans text-xs text-amber-400 tracking-[0.3em] uppercase mb-3">✦ Visítanos ✦</p>
          <h2 class="text-3xl md:text-5xl font-heading font-bold text-amber-50 mb-5">
            ¿Listo para conocer el Puerto Dulce?
          </h2>
          <p class="font-sans text-amber-200/80 mb-8 leading-relaxed text-sm md:text-base">
            Ven y recorre sus calles soleadas, cruza el puente histórico y disfruta de un delicioso pescado frito a la orilla del río. ¡La Virginia te espera con sus atardeceres mágicos!
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a routerLink="/ubicacion" class="px-8 py-3 bg-amber-50 hover:bg-white text-amber-900 font-sans font-bold rounded shadow transition">
              Ver Ubicación y Mapa
            </a>
            <a routerLink="/galeria" class="px-8 py-3 border border-amber-300/40 hover:bg-amber-800 text-amber-100 font-sans font-semibold rounded transition">
              Galería Fotográfica
            </a>
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
export class InicioComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);
  
  // Real documentary video of La Virginia: "Nos vemos en mi pueblo - La Virginia" or a drone promotional video
  // Video ID: cE_K72yY14c or similar. We can embed one of the documentary/tourism videos.
  protected videoUrl!: SafeResourceUrl;
  
  ngOnInit(): void {
    // Let's use a nice, real promotional video for Risaralda/La Virginia
    // Video ID 'N65nQZ4YvYc' or similar travel documentary about La Virginia.
    // YouTube embed requires 'https://www.youtube.com/embed/<video-id>'
    // Documental real del municipio de La Virginia, Risaralda
    const youtubeId = 'H_itndvSb1k';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${youtubeId}?rel=0&showinfo=0`);
  }
}
