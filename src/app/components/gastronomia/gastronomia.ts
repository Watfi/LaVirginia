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
        <span class="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider">
          Ruta del Pescado
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white mt-4 font-heading">
          Gastronomía Local
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mt-4 rounded-full"></div>
        <p class="text-slate-600 dark:text-slate-400 mt-5 leading-relaxed">
          Deleita tu paladar con los sabores tradicionales de La Virginia. La confluencia de ríos y la herencia de pescadores dan vida a platos memorables cocinados a fuego de leña.
        </p>
      </div>

      <!-- INSIGNIA DISH HIGHLIGHT -->
      <section class="mb-20 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 md:p-10 rounded-3xl shadow-xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div class="lg:col-span-5 relative h-72 lg:h-96 rounded-2xl overflow-hidden bg-amber-950 shadow-md">
            <img src="assets/images/viudo-insignia.jpg" alt="Viudo de Pescado" class="w-full h-full object-cover opacity-95" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'">
            <div class="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <span class="text-xs text-amber-400 font-bold uppercase tracking-wider">Plato Insignia</span>
              <h3 class="text-lg font-bold text-white font-heading mt-0.5">Viudo de Pescado en Salsa</h3>
            </div>
          </div>
          
          <div class="lg:col-span-7">
            <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">La Especialidad del Puerto Dulce</span>
            <h2 class="text-2xl md:text-4.5xl font-extrabold text-slate-900 dark:text-white mt-1 mb-5 font-heading">
              El Famoso "Viudo de Pescado"
            </h2>
            <p class="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
              El Viudo de Pescado es una obra maestra culinaria. Su preparación tradicional consiste en cocinar el pescado al vapor sobre una base de plátano, yuca y arracacha, cubriéndolo luego con un guiso criollo ("hogao") denso y condimentado con finas hierbas. Su nombre proviene de la vieja leyenda de los pescadores del río Cauca, quienes servían este plato a la orilla del río rindiendo tributo a las almas solitarias de los navegantes.
            </p>
            
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80">
                <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Tiempo</span>
                <p class="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">45 Minutos</p>
              </div>
              <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80">
                <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Ingrediente Principal</span>
                <p class="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">Bocachico / Capaz</p>
              </div>
              <div class="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 col-span-2 md:col-span-1">
                <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Acompañamiento</span>
                <p class="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">Consomé y Arroz</p>
              </div>
            </div>
            
            <div class="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 rounded-xl flex gap-3 items-start">
              <span class="text-xl">💡</span>
              <p class="text-xs md:text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
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
            <h2 class="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white font-heading">
              Recetario y Platillos Tradicionales
            </h2>
            <p class="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1">
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
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'">
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Dishes Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let dish of filteredDishes" 
               (click)="toggleActiveDish(dish.id)"
               class="group bg-white dark:bg-slate-900 border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
               [ngClass]="activeDishId === dish.id ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-100 dark:border-slate-800/80'">
            
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
                <h3 class="text-lg font-bold text-slate-900 dark:text-white font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                  {{ dish.name }}
                </h3>
                <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                      [ngClass]="dish.difficulty === 'Fácil' ? 'bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-300' : dish.difficulty === 'Medio' ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300' : 'bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-300'">
                  {{ dish.difficulty }}
                </span>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
                {{ dish.description }}
              </p>
              
              <div class="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                <span>⏲ {{ dish.prepTime }}</span>
                <span class="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-0.5">
                  {{ activeDishId === dish.id ? 'Ocultar Receta ▲' : 'Ver Receta ▼' }}
                </span>
              </div>

              <!-- Collapsible Recipe Details (Premium Feature) -->
              <div *ngIf="activeDishId === dish.id" 
                   class="mt-4 pt-4 border-t border-dashed border-slate-200 dark:border-slate-800 animate-slide-down"
                   (click)="$event.stopPropagation();">
                <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">Ingredientes Requeridos:</h4>
                <ul class="list-disc pl-4 text-xs text-slate-600 dark:text-slate-400 space-y-1 mb-4">
                  <li *ngFor="let ing of dish.ingredients">{{ ing }}</li>
                </ul>
                
                <div class="p-3 bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <h4 class="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1">
                    ✨ Secreto del Chef Virginiano:
                  </h4>
                  <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed mt-1 italic">
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
      name: 'Viudo de Pescado en Salsa',
      category: 'Pescados',
      description: 'El rey de la mesa ribereña. Pescado sudado al vapor sobre lechos de yuca, plátano verde e impregnado con hogao criollo espeso.',
      image: 'assets/images/gastronomia-viudo.jpg',
      ingredients: [
        '1 Bocachico grande o Capaz fresco',
        '2 Plátanos verdes cortados en troncos',
        '1 Libra de yuca pelada',
        '3 Arracachas medianas',
        'Para el hogao: Cebolla larga, tomates maduros, ajo, achiote, cilantro y comino'
      ],
      prepTime: '45 mins',
      difficulty: 'Medio',
      secretTip: 'Envuelve el pescado en hojas de plátano soasadas durante la cocción al vapor para retener sus jugos y aportar un aroma campestre inigualable.'
    },
    {
      id: 'trucha-frita',
      name: 'Trucha Frita del Río',
      category: 'Pescados',
      description: 'Deliciosa trucha fresca, frita hasta obtener una piel dorada y crujiente con una carne tierna y jugosa por dentro. Servida con patacón.',
      image: 'assets/gastronomia/Trucha frita.png',
      ingredients: [
        '1 Trucha fresca entera de la región',
        'Harina de trigo para apanar',
        'Sal, ajo macerado y pimienta al gusto',
        'Aceite vegetal para freír',
        'Acompañamiento: Limón mandarina, patacón verde y arroz con coco'
      ],
      prepTime: '25 mins',
      difficulty: 'Fácil',
      secretTip: 'Sazona la trucha con ajo molido y unas gotas de limón 15 minutos antes de freír para que absorba bien el sabor en su carne blanca.'
    },
    {
      id: 'patacon-relleno',
      name: 'Patacón Relleno Especial',
      category: 'Aperitivos',
      description: 'Un patacón de plátano verde gigante y crujiente en forma de canasta, relleno de carne desmechada, pechuga de pollo, hogao criollo y queso derretido.',
      image: 'assets/gastronomia/Patacon Relleno.jpeg',
      ingredients: [
        '1 Plátano verde grande (Hartón)',
        'Carne de res desmechada y pechuga de pollo desmechada',
        'Guiso de cebolla, tomate picado y ajo',
        'Queso doble crema rallado para gratinar',
        'Aceite para freír y sal al gusto'
      ],
      prepTime: '30 mins',
      difficulty: 'Fácil',
      secretTip: 'Fríe el plátano en trozos gruesos a fuego medio, sácalo, aplástalo usando dos tablas de madera y vuelve a freírlo a fuego alto para que quede extra crujiente.'
    },
    {
      id: 'pizza-artesanal',
      name: 'Pizza Artesanal Italiana',
      category: 'Otros',
      description: 'Pizza de masa delgada horneada artesanalmente con salsa casera de tomates maduros, abundante queso mozzarella fundido, albahaca y aceite de oliva.',
      image: 'assets/gastronomia/Pizza Artesanal Italiana.jpeg',
      ingredients: [
        'Harina de trigo de fuerza y levadura para la masa',
        'Salsa de tomates frescos sazonada con orégano y sal de mar',
        'Queso mozzarella de búfala rallado',
        'Hojas de albahaca fresca',
        'Aceite de oliva extra virgen'
      ],
      prepTime: '20 mins',
      difficulty: 'Medio',
      secretTip: 'Para emular un horno de leña profesional, precalienta una piedra para pizza o una bandeja metálica a la máxima temperatura antes de deslizar la masa.'
    },
    {
      id: 'chontaduro',
      name: 'Chontaduros con Miel y Sal',
      category: 'Aperitivos',
      description: 'Fruto exótico de palmera muy popular en las calles soleadas de La Virginia. Se consume caliente y aderezado con sal y miel de abejas.',
      image: 'assets/images/gastronomia-chontaduro.jpg',
      ingredients: [
        'Chontaduros maduros cocidos',
        'Miel de abejas pura',
        'Sal al gusto',
        'Limón fresco (opcional)'
      ],
      prepTime: '10 mins',
      difficulty: 'Fácil',
      secretTip: 'Cocina los chontaduros con una pizca de sal y una hoja de higuerón en el agua para suavizar la pulpa de forma natural.'
    },
    {
      id: 'raspado',
      name: 'Raspado y Salpicón del Río',
      category: 'Bebidas y Postres',
      description: 'Postre refrescante para aplacar el calor tropical. Hielo raspado a mano bañado en jarabes dulces de frutas con leche condensada.',
      image: 'assets/images/gastronomia-raspado.jpg',
      ingredients: [
        'Hielo finamente triturado',
        'Jarabes de frutas caseros (kola, maracuyá, limón)',
        'Leche condensada espesa',
        'Ensalada de frutas picadas (piña, papaya, sandía, banano) para el salpicón'
      ],
      prepTime: '5 mins',
      difficulty: 'Fácil',
      secretTip: 'Combina el raspado de kola clásica con salpicón de frutas natural encima para crear el famoso "Cholado del Puerto", una explosión refrescante.'
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
