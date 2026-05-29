import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Question {
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

@Component({
  selector: 'app-interactivo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="animate-fade-in py-12 px-4 max-w-4xl mx-auto">
      <!-- HEADER -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider">
          Módulo Interactivo
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white mt-4 font-heading">
          Trivia: ¿Cuánto sabes del Puerto Dulce?
        </h1>
        <div class="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        <p class="text-slate-600 dark:text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
          Ponte a prueba respondiendo estas 5 preguntas sobre la historia, geografía, cultura y gastronomía de La Virginia, Risaralda. ¡Obtén tu certificado oficial de explorador al finalizar!
        </p>
      </div>

      <!-- MAIN TRIVIA CARD CONTAINER -->
      <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
        
        <!-- Background accents -->
        <div class="absolute top-0 right-0 -mt-16 -mr-16 w-36 h-36 bg-amber-500/5 rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 left-0 -mb-16 -ml-16 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl"></div>

        <div class="relative z-10">
          
          <!-- STATE 1: WELCOME SCREEN -->
          <div *ngIf="gameState === 'welcome'" class="text-center py-8 space-y-6">
            <div class="w-24 h-24 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center text-4xl mx-auto border border-amber-500/20 shadow-inner">
              🎓
            </div>
            <div class="space-y-2">
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white font-heading">¿Listo para el desafío?</h2>
              <p class="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
                No hay tiempo límite. Analiza con calma cada pregunta. Si aciertas todas, serás proclamado Historiador Ilustre de La Virginia.
              </p>
            </div>
            <button (click)="startTrivia()" 
                    class="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition duration-300 w-full sm:w-auto">
              Comenzar Trivia
            </button>
          </div>

          <!-- STATE 2: PLAYING SCREEN -->
          <div *ngIf="gameState === 'playing'" class="space-y-8">
            <!-- Progress Indicators -->
            <div class="space-y-2">
              <div class="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>Pregunta {{ currentQuestionIndex + 1 }} de {{ questions.length }}</span>
                <span class="text-emerald-650 dark:text-emerald-400">Puntaje: {{ score }}</span>
              </div>
              <div class="h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200/30 dark:border-slate-800/20">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-300" 
                     [style.width.%]="progressPercent"></div>
              </div>
            </div>

            <!-- Question Text -->
            <div class="space-y-1">
              <span class="text-xs font-semibold text-amber-500 uppercase tracking-widest">Pregunta del Municipio</span>
              <h3 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-heading leading-snug">
                {{ currentQuestion.text }}
              </h3>
            </div>

            <!-- Options Grid -->
            <div class="grid grid-cols-1 gap-3">
              <button *ngFor="let option of currentQuestion.options; let i = index" 
                      (click)="selectOption(i)"
                      [disabled]="hasAnswered"
                      class="p-4 md:p-5 rounded-2xl border text-left text-sm md:text-base font-medium transition duration-300 focus:outline-none flex justify-between items-center w-full"
                      [ngClass]="getOptionClass(i)">
                <span>{{ option }}</span>
                <span class="text-lg md:text-xl font-bold" *ngIf="hasAnswered">
                  {{ i === currentQuestion.correctAnswerIndex ? '✓' : (selectedOptionIndex === i ? '✗' : '') }}
                </span>
              </button>
            </div>

            <!-- Feedback / Explanation Section -->
            <div *ngIf="hasAnswered" 
                 class="p-5 rounded-2xl border animate-fade-in-quick flex gap-3 items-start"
                 [ngClass]="isAnswerCorrect ? 'bg-green-50/50 dark:bg-green-950/20 border-green-200/50 dark:border-green-900/50 text-green-900 dark:text-green-300' : 'bg-red-50/50 dark:bg-red-950/20 border-red-200/50 dark:border-red-900/50 text-red-900 dark:text-red-300'">
              <span class="text-2xl">{{ isAnswerCorrect ? '🎉' : '💡' }}</span>
              <div class="space-y-1">
                <h4 class="font-bold text-sm">{{ isAnswerCorrect ? '¡Correcto!' : 'Respuesta Incorrecta' }}</h4>
                <p class="text-xs md:text-sm leading-relaxed">{{ currentQuestion.explanation }}</p>
              </div>
            </div>

            <!-- Action Button -->
            <div class="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <button *ngIf="hasAnswered"
                      (click)="nextQuestion()" 
                      class="px-6 py-3 bg-slate-900 hover:bg-slate-850 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold rounded-xl transition duration-200 shadow-md">
                {{ isLastQuestion ? 'Ver Resultados' : 'Siguiente Pregunta' }}
              </button>
            </div>
          </div>

          <!-- STATE 3: RESULTS & CERTIFICATE SCREEN -->
          <div *ngIf="gameState === 'results'" class="space-y-8 animate-fade-in">
            <div class="text-center py-4 space-y-3">
              <span class="text-4xl">🏆</span>
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white font-heading">¡Trivia Finalizada!</h2>
              <p class="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
                Tu puntuación fue de <strong class="text-slate-900 dark:text-white">{{ score }} aciertos</strong> de {{ questions.length }} posibles. Obtuviste el título de:
              </p>
              <div class="inline-block px-4 py-1.5 rounded-full text-sm font-extrabold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 uppercase tracking-wide">
                {{ getHonorTitle() }}
              </div>
            </div>

            <!-- Name input for Certificate -->
            <div class="max-w-md mx-auto bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-850 space-y-4">
              <label for="explorer-name" class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Escribe tu nombre para el certificado:
              </label>
              <div class="flex gap-2">
                <input id="explorer-name" 
                       type="text" 
                       [(ngModel)]="explorerName" 
                       placeholder="Ej. Juan Pérez" 
                       class="flex-1 px-4 py-2.5 rounded-xl border border-slate-350 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:text-white" />
              </div>
            </div>

            <!-- THE CERTIFICATE (Designed for both Web preview and PDF/Paper printing) -->
            <div id="certificate-area" class="border-[6px] border-double border-amber-600 p-6 md:p-10 rounded-2xl bg-[#FCFBF7] text-slate-900 max-w-2xl mx-auto shadow-lg relative font-serif">
              
              <!-- Watermark Background -->
              <div class="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none select-none">
                <span class="text-9xl text-amber-900 font-serif">LA VIRGINIA</span>
              </div>

              <!-- Certificate Borders details -->
              <div class="border border-amber-650/40 p-4 md:p-6 rounded-lg text-center space-y-6 relative">
                
                <!-- Corner Decorations -->
                <div class="absolute top-2 left-2 text-amber-700 text-xs">◆</div>
                <div class="absolute top-2 right-2 text-amber-700 text-xs">◆</div>
                <div class="absolute bottom-2 left-2 text-amber-700 text-xs">◆</div>
                <div class="absolute bottom-2 right-2 text-amber-700 text-xs">◆</div>

                <div class="space-y-1">
                  <h3 class="text-amber-800 font-bold text-xs uppercase tracking-widest font-heading">República de Colombia</h3>
                  <h4 class="text-slate-650 text-[10px] font-bold uppercase tracking-wider">Municipio de La Virginia, Risaralda</h4>
                </div>

                <div class="py-2">
                  <h2 class="text-3xl md:text-4.5xl font-extrabold text-amber-900 font-heading tracking-tight italic">
                    Diploma de Explorador
                  </h2>
                  <p class="text-xs text-slate-500 mt-2 font-sans uppercase tracking-widest font-semibold">Concedido con honores a:</p>
                </div>

                <div class="border-b-2 border-slate-300 py-1 max-w-sm mx-auto">
                  <h1 class="text-2xl md:text-3.5xl font-extrabold text-slate-800 font-heading truncate capitalize">
                    {{ explorerName || 'Explorador Distinguido' }}
                  </h1>
                </div>

                <p class="text-xs md:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                  Por haber superado satisfactoriamente la trivia cultural e histórica municipal con un puntaje de <strong>{{ score }}/{{ questions.length }}</strong> aciertos, demostrando amplios conocimientos sobre su fundación (1888), sus ríos Cauca y Risaralda, su emblemático Puente Bernardo Arango y su exquisita gastronomía.
                </p>

                <div class="pt-6 grid grid-cols-2 gap-4 max-w-md mx-auto font-sans text-[10px]">
                  <div class="text-center space-y-1 border-t border-slate-200 pt-3">
                    <p class="font-bold text-slate-800">El Puerto Dulce de Risaralda</p>
                    <p class="text-slate-400 text-[8px] uppercase">Aval Histórico y Cultural</p>
                  </div>
                  <div class="text-center space-y-1 border-t border-slate-200 pt-3">
                    <p class="font-bold text-slate-800">Cacique Sopinga</p>
                    <p class="text-slate-400 text-[8px] uppercase">Espíritu y Tradición Ribereña</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Action buttons -->
            <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <button (click)="printCertificate()" 
                      class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl shadow-md transition duration-200 flex items-center justify-center gap-2">
                🖨️ Imprimir / Guardar en PDF
              </button>
              <button (click)="restartTrivia()" 
                      class="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition duration-200">
                🔄 Reintentar Trivia
              </button>
            </div>
          </div>

        </div>
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
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInQuick {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* Print styles to only output the certificate on paper/PDF */
    @media print {
      body * {
        visibility: hidden;
      }
      #certificate-area, #certificate-area * {
        visibility: visible;
      }
      #certificate-area {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        border: none;
        box-shadow: none;
        padding: 0;
        background: white;
      }
    }
  `]
})
export class InteractivoComponent {
  protected gameState: 'welcome' | 'playing' | 'results' = 'welcome';
  protected currentQuestionIndex = 0;
  protected selectedOptionIndex: number | null = null;
  protected hasAnswered = false;
  protected isAnswerCorrect = false;
  protected score = 0;
  protected explorerName = '';

  protected questions: Question[] = [
    {
      text: '¿Con qué apodo turístico es conocido popularmente a nivel nacional el municipio de La Virginia?',
      options: [
        'La Ciudad de las Brumas',
        'El Puerto Dulce de Colombia',
        'La Capital Cafetera del Eje',
        'El Retiro Hermoso de Risaralda'
      ],
      correctAnswerIndex: 1,
      explanation: 'La Virginia es llamado el "Puerto Dulce de Colombia" debido a su histórico auge como puerto fluvial sobre el río Cauca y la abundante caña de azúcar cultivada en sus tierras fértiles, empleada tradicionalmente para la panela.'
    },
    {
      text: '¿En qué año se inauguró el representativo e histórico Puente Colgante Bernardo Arango?',
      options: [
        '1910',
        '1959',
        '1928',
        '1985'
      ],
      correctAnswerIndex: 2,
      explanation: 'El Puente Colgante Bernardo Arango fue inaugurado en 1928. Conectó a La Virginia con Caimalito, permitiendo el transporte de café y productos agrícolas hacia el occidente de Caldas y Antioquia.'
    },
    {
      text: '¿Cuáles ríos importantes confluyen geográficamente en el territorio de La Virginia?',
      options: [
        'Río Magdalena y Río Bogotá',
        'Río Otún y Río Consota',
        'Río Cauca y Río Risaralda',
        'Río Atrato y Río San Juan'
      ],
      correctAnswerIndex: 2,
      explanation: 'La Virginia se asienta sobre la confluencia de los ríos Cauca y Risaralda. Esta ubicación le dotó históricamente de gran importancia pesquera y de transporte fluvial regional.'
    },
    {
      text: '¿Cómo se llamaba originalmente el primer asentamiento que dio origen a La Virginia a finales del siglo XIX?',
      options: [
        'Sopinga o Nigricia',
        'Belalcázar de los Ríos',
        'San Francisco del Occidente',
        'Marsella la Nueva'
      ],
      correctAnswerIndex: 0,
      explanation: 'Los primeros asentamientos coloniales se denominaron "Sopinga" (en honor al cacique Sopinga) o "Nigricia" (llamado así por el asentamiento de poblaciones afrodescendientes y pescadores tradicionales en el lugar).'
    },
    {
      text: '¿Cuál es el plato típico e insignia de la gastronomía de La Virginia que atrae a miles de turistas en su ruta gastronómica?',
      options: [
        'Bandeja Paisa Montañera',
        'Viudo de Pescado en Salsa',
        'Mote de Queso Costeño',
        'Trucha al Ajillo'
      ],
      correctAnswerIndex: 1,
      explanation: 'El plato rey del municipio es el "Viudo de Pescado en Salsa" (preparado al vapor y aderezado con hogao criollo), servido en las cocinas tradicionales de la orilla de los ríos.'
    }
  ];

  protected get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  protected get progressPercent(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  protected get isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  protected startTrivia(): void {
    this.gameState = 'playing';
    this.currentQuestionIndex = 0;
    this.selectedOptionIndex = null;
    this.hasAnswered = false;
    this.score = 0;
  }

  protected selectOption(index: number): void {
    if (this.hasAnswered) return;
    this.selectedOptionIndex = index;
    this.hasAnswered = true;
    
    this.isAnswerCorrect = index === this.currentQuestion.correctAnswerIndex;
    if (this.isAnswerCorrect) {
      this.score++;
    }
  }

  protected getOptionClass(index: number): string {
    if (!this.hasAnswered) {
      return 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-850 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200';
    }
    
    // Correct Answer
    if (index === this.currentQuestion.correctAnswerIndex) {
      return 'bg-green-100/70 border-green-500 text-green-950 dark:bg-green-950/40 dark:text-green-300';
    }
    
    // User selected this and it was WRONG
    if (this.selectedOptionIndex === index && index !== this.currentQuestion.correctAnswerIndex) {
      return 'bg-red-100/70 border-red-500 text-red-950 dark:bg-red-950/40 dark:text-red-300';
    }
    
    // Unselected wrong options
    return 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-350 dark:text-slate-650 opacity-60';
  }

  protected nextQuestion(): void {
    if (this.isLastQuestion) {
      this.gameState = 'results';
    } else {
      this.currentQuestionIndex++;
      this.selectedOptionIndex = null;
      this.hasAnswered = false;
      this.isAnswerCorrect = false;
    }
  }

  protected getHonorTitle(): string {
    if (this.score === 5) return 'Historiador Ilustre de La Virginia 👑';
    if (this.score >= 3) return 'Explorador Distinguido del Puerto Dulce 🧭';
    return 'Visitante Curioso del Eje Cafetero 🎒';
  }

  protected printCertificate(): void {
    window.print();
  }

  protected restartTrivia(): void {
    this.gameState = 'welcome';
    this.score = 0;
    this.currentQuestionIndex = 0;
  }
}
