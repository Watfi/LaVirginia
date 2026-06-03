import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Dish {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  ingredients: string[];
  prepTime: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  secretTip: string;
}

@Component({
  selector: 'app-gastronomia',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-fade-in py-12 px-4 max-w-6xl mx-auto">
      <!-- HEADER -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="px-3 py-1 bg-emerald-500/10 text-emerald-600  text-xs font-bold rounded-full uppercase tracking-wider">
          Ruta del Pescado
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-950  mt-4 font-heading">
          Gastronomía Local
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mt-4 rounded-full"></div>
        <p class="text-slate-600  mt-5 leading-relaxed">
          Deleita tu paladar con los sabores tradicionales de La Virginia. La confluencia de ríos y la herencia de pescadores dan vida a platos memorables cocinados a fuego de leña.
        </p>
      </div>

      <!-- INSIGNIA DISH HIGHLIGHT -->
      <section id="viudo-pescado" class="mb-20 bg-amber-50 border-2 border-amber-100 p-6 md:p-10 rounded-3xl shadow-xl relative overflow-hidden scroll-mt-24">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none"></div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          <div class="lg:col-span-5 relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-md border-2 border-stone-200">
            <img src="assets/gastronomia/viudo_de_pescado_.jpg" alt="Viudo de Pescado" class="w-full h-full object-cover">
            <div class="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-stone-200 shadow-sm">
              <span class="text-xs text-amber-700 font-bold uppercase tracking-wider">Plato Insignia</span>
              <h3 class="text-lg font-extrabold text-stone-900 font-heading mt-0.5">Viudo de Pescado</h3>
            </div>
          </div>
          
          <div class="lg:col-span-7">
            <span class="text-xs font-bold text-emerald-600  uppercase tracking-widest">La Especialidad del Puerto Dulce</span>
            <h2 class="text-2xl md:text-4.5xl font-extrabold text-slate-900  mt-1 mb-5 font-heading">
              El Famoso "Viudo de Pescado"
            </h2>
            <p class="text-slate-600  text-sm md:text-base leading-relaxed mb-6">
              El Viudo de Pescado es una obra maestra culinaria. Su preparación tradicional consiste en cocinar el pescado al vapor sobre una base de plátano, yuca y arracacha, cubriéndolo luego con un guiso criollo ("hogao") denso y condimentado con finas hierbas. Su nombre proviene de la vieja leyenda de los pescadores del río Cauca, quienes servían este plato a la orilla del río rindiendo tributo a las almas solitarias de los navegantes.
            </p>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div class="bg-slate-50  p-4 rounded-xl border border-slate-100 ">
                <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Tiempo</span>
                <p class="text-sm font-bold text-slate-800  mt-0.5">45 Minutos</p>
              </div>
              <div class="bg-slate-50  p-4 rounded-xl border border-slate-100 ">
                <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Ingrediente Principal</span>
                <p class="text-sm font-bold text-slate-800  mt-0.5">Bocachico / Capaz</p>
              </div>
              <div class="bg-slate-50  p-4 rounded-xl border border-slate-100  col-span-2 md:col-span-1">
                <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Acompañamiento</span>
                <p class="text-sm font-bold text-slate-800  mt-0.5">Consomé y Arroz</p>
              </div>
            </div>
            
            <div class="p-4 bg-emerald-50  border border-emerald-100  rounded-xl flex gap-3 items-start">
              <span class="text-xl">💡</span>
              <p class="text-xs md:text-sm text-emerald-800  leading-relaxed">
                <strong>Consejo del Pescador:</strong> Se acompaña obligatoriamente de un buen consomé caliente preparado con la cabeza del pescado, condimentado con cilantro cimarrón y unas gotas de limón.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- DISHES GRID & INTERACTIVE DETAILS -->
      <section class="mb-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-slate-950  font-heading">
              Recetario y Platillos Tradicionales
            </h2>
            <p class="text-slate-500  text-xs md:text-sm mt-1">
              Haz clic en cualquier platillo para abrir el recetario interactivo y ver sus ingredientes y secretos.
            </p>
          </div>
          
          <!-- Category Filters -->
          <div class="flex flex-wrap gap-2 mt-4 md:mt-0">
            <button *ngFor="let cat of categories" 
                    (click)="selectedCategory = cat"
                    class="px-4 py-1.5 rounded-full text-xs font-bold transition duration-300 border focus:outline-none"
                    [ngClass]="selectedCategory === cat 
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-md' 
                      : 'bg-white  border-slate-200  text-slate-600  hover:bg-slate-50 :bg-slate-800'">
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Dishes Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let dish of filteredDishes" 
               (click)="toggleActiveDish(dish.id)"
               class="group bg-white  border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
               [ngClass]="activeDishId === dish.id ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-100 '">
            
            <!-- Dish Image -->
            <div class="relative h-48 bg-slate-950 overflow-hidden">
              <img [src]="dish.image" [alt]="dish.name" class="w-full h-full object-cover group-hover:scale-102 transition duration-500" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'">
              <span class="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/70 text-amber-400 backdrop-blur-sm border border-white/10 uppercase tracking-wider">
                {{ dish.category }}
              </span>
            </div>

            <!-- Dish Info Brief -->
            <div class="p-5">
              <div class="flex justify-between items-start gap-2 mb-1.5">
                <h3 class="text-lg font-bold text-slate-900  font-heading group-hover:text-emerald-600 :text-emerald-400 transition">
                  {{ dish.name }}
                </h3>
                <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                      [ngClass]="dish.difficulty === 'Fácil' ? 'bg-green-100  text-green-700 ' : dish.difficulty === 'Medio' ? 'bg-amber-100  text-amber-700 ' : 'bg-red-100  text-red-700 '">
                  {{ dish.difficulty }}
                </span>
              </div>
              <p class="text-slate-600  text-xs leading-relaxed line-clamp-2 mb-4">
                {{ dish.description }}
              </p>
              
              <div class="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-100  pt-3">
                <span>⏲ {{ dish.prepTime }}</span>
                <span class="text-emerald-600  font-bold flex items-center gap-0.5">
                  {{ activeDishId === dish.id ? 'Ocultar Receta ▲' : 'Ver Receta ▼' }}
                </span>
              </div>

              <!-- Collapsible Recipe Details (Premium Feature) -->
              <div *ngIf="activeDishId === dish.id" 
                   class="mt-4 pt-4 border-t border-dashed border-slate-200  animate-slide-down"
                   (click)="$event.stopPropagation();">
                <h4 class="text-xs font-bold text-slate-800  uppercase tracking-wider mb-2">Ingredientes Requeridos:</h4>
                <ul class="list-disc pl-4 text-xs text-slate-600  space-y-1 mb-4">
                  <li *ngFor="let ing of dish.ingredients">{{ ing }}</li>
                </ul>
                
                <div class="p-3 bg-amber-500/5  border border-amber-500/20 rounded-xl">
                  <h4 class="text-[10px] font-bold text-amber-600  uppercase tracking-wider flex items-center gap-1">
                    ✨ Secreto del Chef Virginiano:
                  </h4>
                  <p class="text-[11px] text-slate-600  leading-relaxed mt-1 italic">
                    "{{ dish.secretTip }}"
                  </p>
                </div>
              </div>

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
    .animate-slide-down {
      animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes slideDown {
      from { opacity: 0; max-height: 0px; overflow: hidden; }
      to { opacity: 1; max-height: 400px; }
    }
  `]
})
export class GastronomiaComponent {
  protected selectedCategory = 'Todos';
  protected activeDishId: string | null = null;
  
  protected categories: string[] = ['Todos', 'Pescados', 'Aperitivos', 'Bebidas y Postres', 'Otros'];

  protected dishes: Dish[] = [
    {
      id: 'viudo-pescado',
      name: 'Viudo de Pescado',
      category: 'Pescados',
      description: 'El rey de la mesa ribereña. Pescado cocinado en sus jugos servido con un guiso criollo, yuca y plátano verde.',
      image: 'assets/gastronomia/viudo_de_pescado_.jpg',
      ingredients: [
        'Pescado fresco del Río Cauca',
        'Yuca y plátano verde',
        'Hogao casero tradicional',
        'Especias locales'
      ],
      prepTime: '45 mins',
      difficulty: 'Medio',
      secretTip: 'Envuelve el pescado en hojas de plátano soasadas durante la cocción para retener los jugos y aportar aroma.'
    },
    {
      id: 'trucha-frita',
      name: 'Trucha Frita',
      category: 'Pescados',
      description: 'Trucha fresca frita hasta lograr una piel dorada y crujiente, servida con generosos trozos de limón y ensalada.',
      image: 'assets/gastronomia/Trucha frita.png',
      ingredients: [
        'Trucha fresca entera',
        'Ajo macerado y sal',
        'Aceite caliente para freír',
        'Limón fresco'
      ],
      prepTime: '25 mins',
      difficulty: 'Fácil',
      secretTip: 'Marina la trucha con el ajo molido y unas gotas de limón 15 minutos antes de freír.'
    },
    {
      id: 'patacon-relleno',
      name: 'Patacón Relleno',
      category: 'Aperitivos',
      description: 'Patacón de plátano verde crujiente, coronado con una abundante mezcla de carnes desmechadas y salsas.',
      image: 'assets/gastronomia/Patacon Relleno.jpeg',
      ingredients: [
        'Plátano verde Hartón',
        'Carne desmechada mixta',
        'Hogao criollo',
        'Queso para gratinar'
      ],
      prepTime: '30 mins',
      difficulty: 'Fácil',
      secretTip: 'Pasa el plátano por agua con ajo antes de la segunda fritura para un extra de sabor y crocancia.'
    },
    {
      id: 'pizza-artesanal',
      name: 'Pizza Artesanal Italiana',
      category: 'Otros',
      description: 'Exquisita pizza horneada con una auténtica masa madre de larga fermentación y SIN levadura comercial. Fresca y ligera.',
      image: 'assets/gastronomia/Pizza Artesanal Italiana.jpeg',
      ingredients: [
        'Masa madre artesanal (sin levadura)',
        'Salsa de tomates naturales sazonada',
        'Queso mozzarella premium',
        'Albahaca fresca y aceite de oliva'
      ],
      prepTime: '24 hrs',
      difficulty: 'Difícil',
      secretTip: 'El secreto está en el tiempo: una masa madre de lenta fermentación hace que la pizza sea crujiente, ligera y muy fácil de digerir.'
    },
    {
      id: 'avena-palomino',
      name: 'Avena Palomino',
      category: 'Bebidas y Postres',
      description: 'Bebida tradicional fría, espesa y dulce a base de avena y canela, ideal para acompañar fritos locales.',
      image: 'assets/gastronomia/avena_palomino.jpg',
      ingredients: [
        'Avena en hojuelas cocida',
        'Leche entera y leche condensada',
        'Astillas de canela y clavos',
        'Hielo'
      ],
      prepTime: '15 mins',
      difficulty: 'Fácil',
      secretTip: 'Deja reposar la mezcla de avena con canela toda la noche en la nevera antes de licuar.'
    },
    {
      id: 'empanada-12',
      name: 'Empanada de la 12',
      category: 'Aperitivos',
      description: 'Las famosas empanadas crocantes de maíz amarillo, un clásico indiscutible del pueblo servido con ají casero.',
      image: 'assets/gastronomia/empanada_de_la_12.jpg',
      ingredients: [
        'Masa de maíz amarillo',
        'Guiso de papa y carne molida',
        'Cebolla larga finamente picada',
        'Aceite para freír'
      ],
      prepTime: '40 mins',
      difficulty: 'Medio',
      secretTip: 'El ají es fundamental: prepáralo con cilantro cimarrón fresco, ají dulce y un toque de limón mandarina.'
    },
    {
      id: 'ensalada-frutas',
      name: 'Ensalada de Frutas',
      category: 'Bebidas y Postres',
      description: 'Copón rebosante de frutas tropicales frescas picadas, bañadas en crema, helado y queso rallado.',
      image: 'assets/gastronomia/ensalada-de-frutas.webp',
      ingredients: [
        'Papaya, banano, manzana y sandía',
        'Crema de leche dulce',
        'Queso costeño rallado',
        'Helado de vainilla'
      ],
      prepTime: '10 mins',
      difficulty: 'Fácil',
      secretTip: 'El contraste de lo dulce del helado con el toque sutilmente salado del queso rallado es lo que la hace irresistible.'
    }
  ];

  protected get filteredDishes(): Dish[] {
    if (this.selectedCategory === 'Todos') {
      return this.dishes;
    }
    return this.dishes.filter(d => d.category === this.selectedCategory);
  }

  protected toggleActiveDish(id: string): void {
    if (this.activeDishId === id) {
      this.activeDishId = null;
    } else {
      this.activeDishId = id;
    }
  }
}
