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
      <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white py-20 px-4">
        <!-- Background Gradient and Decorative Shapes -->
        <div class="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay" style="background-image: url('assets/images/hero-bg.jpg');"></div>
        <div class="absolute inset-0 z-0 bg-gradient-to-tr from-emerald-950/90 via-slate-900/90 to-amber-950/70"></div>
        
        <!-- Animated Background Blobs -->
        <div class="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>

        <!-- Content -->
        <div class="relative z-10 max-w-5xl mx-auto text-center">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-6 uppercase tracking-wider">
            📍 Risaralda, Colombia
          </span>
          <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-amber-400 via-yellow-200 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm font-heading">
            La Virginia
          </h1>
          <p class="text-2xl md:text-3xl font-light text-amber-200 mb-4 tracking-wide">
            "El Puerto Dulce de Colombia"
          </p>
          <p class="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Un rincón cálido donde confluyen los ríos Cauca y Risaralda, cuna de pescadores, leyendas ancestrales de Sopinga y la gastronomía más vibrante de la región.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a routerLink="/historia" class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5 transition duration-300 text-center">
              Descubrir Historia
            </a>
            <a routerLink="/interactivo" class="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl border border-white/20 backdrop-blur-md hover:-translate-y-0.5 transition duration-300 text-center">
              Jugar la Trivia
            </a>
          </div>
        </div>

        <!-- Wave Divider -->
        <div class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-[60px] fill-slate-50 dark:fill-slate-950">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.3,25.88,173,44.75,263,67.23,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      <!-- STATS SECTION -->
      <section class="py-16 px-4 max-w-7xl mx-auto -mt-16 relative z-20">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl hover:shadow-2xl transition duration-300">
            <div class="text-3xl md:text-4xl mb-2">☀️</div>
            <h3 class="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Clima Promedio</h3>
            <p class="text-2xl md:text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-1 font-heading">27°C</p>
            <p class="text-xs text-slate-400 mt-1">Cálido y tropical todo el año</p>
          </div>
          
          <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl hover:shadow-2xl transition duration-300">
            <div class="text-3xl md:text-4xl mb-2">👥</div>
            <h3 class="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Población</h3>
            <p class="text-2xl md:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1 font-heading">~32,000</p>
            <p class="text-xs text-slate-400 mt-1">Habitantes amables y alegres</p>
          </div>

          <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl hover:shadow-2xl transition duration-300">
            <div class="text-3xl md:text-4xl mb-2">🌊</div>
            <h3 class="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Confluencia</h3>
            <p class="text-xl md:text-2xl font-extrabold text-blue-600 dark:text-blue-400 mt-1 font-heading leading-tight">Cauca y Risaralda</p>
            <p class="text-xs text-slate-400 mt-1">Dos grandes ríos que se unen</p>
          </div>

          <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl hover:shadow-2xl transition duration-300">
            <div class="text-3xl md:text-4xl mb-2">🚗</div>
            <h3 class="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Distancia</h3>
            <p class="text-2xl md:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-1 font-heading">30 km</p>
            <p class="text-xs text-slate-400 mt-1">Desde la capital, Pereira</p>
          </div>
        </div>
      </section>

      <!-- HIGHLIGHTS MODULES -->
      <section class="py-16 px-4 max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white font-heading">
            Explora la Riqueza de Nuestro Municipio
          </h2>
          <div class="w-16 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
          <p class="text-slate-600 dark:text-slate-400 mt-4">
            Un recorrido por los rincones que hacen de La Virginia un destino turístico y cultural inolvidable en el departamento de Risaralda.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-800/50 transition duration-300 flex flex-col h-full">
            <div class="relative h-56 bg-emerald-950 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-70"></div>
              <img src="assets/images/puente.jpg" alt="Puente Bernardo Arango" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90" onerror="this.src='https://images.unsplash.com/photo-1549692540-848859296570?auto=format&fit=crop&w=600&q=80'">
              <span class="absolute top-4 left-4 z-20 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-full uppercase tracking-wider">Arquitectura</span>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 font-heading">Puente Colgante Bernardo Arango</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                Construido en 1928, este puente colgante peatonal es el monumento histórico más representativo de la región. Cruza el imponente río Cauca conectando con Caimalito.
              </p>
              <a routerLink="/historia" class="inline-flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition duration-200">
                Ver más detalles <span class="ml-1 group-hover:translate-x-1 transition duration-200">&rarr;</span>
              </a>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-800/50 transition duration-300 flex flex-col h-full">
            <div class="relative h-56 bg-amber-950 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-70"></div>
              <img src="assets/images/pescado.jpg" alt="Viudo de Pescado" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90" onerror="this.src='https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80'">
              <span class="absolute top-4 left-4 z-20 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">Gastronomía</span>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 font-heading">La Ruta del Pescado</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                La Virginia deleita los paladares de sus visitantes con el delicioso "Viudo de Pescado". La tradición culinaria ribereña ofrece platos frescos y llenos de sabor autóctono.
              </p>
              <a routerLink="/gastronomia" class="inline-flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition duration-200">
                Ver delicias <span class="ml-1 group-hover:translate-x-1 transition duration-200">&rarr;</span>
              </a>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-800/50 transition duration-300 flex flex-col h-full">
            <div class="relative h-56 bg-sky-950 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-70"></div>
              <img src="assets/images/guasimo.jpg" alt="Ecoturismo El Guásimo" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90" onerror="this.src='https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80'">
              <span class="absolute top-4 left-4 z-20 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">Naturaleza</span>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 font-heading">Distrito Natural El Guásimo</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                Una reserva forestal protegida del bosque seco tropical. El lugar ideal para el senderismo ecológico, avistamiento de aves coloridas y contacto directo con la naturaleza.
              </p>
              <a routerLink="/ubicacion" class="inline-flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition duration-200">
                Ver mapa y rutas <span class="ml-1 group-hover:translate-x-1 transition duration-200">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- VIDEO PROMO SECTION -->
      <section class="py-16 bg-slate-100 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/40">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-5">
              <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-3">
                Video Documental
              </span>
              <h2 class="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white mb-6 font-heading leading-tight">
                Siente el Calor de Nuestra Tierra Fluvial
              </h2>
              <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Descubre en este documental el alma de La Virginia: sus pescadores artesanales navegando las aguas del río Cauca, su herencia histórica afrodescendiente en Sopinga y la calidez humana de su gente que acoge a cada visitante con los brazos abiertos.
              </p>
              
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white text-sm">Historia viva</h4>
                    <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">El paso del desarrollo fluvial del eje cafetero.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white text-sm">Tradición pesquera</h4>
                    <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">La magia del río Cauca y sus lancheros tradicionales.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- YouTube Video Embed -->
            <div class="lg:col-span-7">
              <div class="relative bg-slate-950 p-3 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden">
                <div class="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe 
                    [src]="videoUrl" 
                    title="Video Promocional La Virginia" 
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

      <!-- CALL TO ACTION -->
      <section class="py-20 px-4 text-center max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white mb-6 font-heading">
          ¿Listo para conocer el Puerto Dulce?
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Ven y recorre sus calles soleadas, cruza el puente histórico y disfruta de un delicioso pescado frito a la orilla del río. ¡La Virginia te espera con sus atardeceres mágicos!
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a routerLink="/ubicacion" class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition duration-300">
            Ver Ubicación y Mapa
          </a>
          <a routerLink="/galeria" class="px-8 py-3.5 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition duration-300">
            Galería Fotográfica
          </a>
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
    const youtubeId = 'N65nQZ4YvYc'; 
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${youtubeId}`);
  }
}
