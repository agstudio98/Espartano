import { Component } from '@angular/core';

@Component({
  selector: 'app-home-timeline',
  standalone: true,
  template: `
    <section class="p-6 sm:p-20 flex flex-col items-center">
      <h2 class="text-2xl sm:text-4xl font-black mb-10 sm:mb-20 text-accent text-center">NUESTRO RECORRIDO</h2>
      <div class="relative w-full max-w-2xl border-l-4 border-primary/20 pl-6 sm:pl-10 space-y-12 sm:space-y-20">
        <div class="relative">
          <div class="absolute -left-[14px] sm:-left-[18px] top-1 sm:top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary neon-glow"></div>
          <h3 class="text-lg sm:text-2xl font-black">2024 - EL COMIENZO</h3>
          <p class="text-sm sm:text-base opacity-60">PRIMEROS DISEÑOS EN EL GARAGE.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[14px] sm:-left-[18px] top-1 sm:top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent neon-glow"></div>
          <h3 class="text-lg sm:text-2xl font-black">2025 - EXPANSIÓN</h3>
          <p class="text-sm sm:text-base opacity-60">PRIMER LOCAL EN NUEVA CÓRDOBA.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[14px] sm:-left-[18px] top-1 sm:top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-secondary neon-glow"></div>
          <h3 class="text-lg sm:text-2xl font-black">2026 - PRESENTE</h3>
          <p class="text-sm sm:text-base opacity-60">LÍDERES EN MODA OVERSIZED DIGITAL.</p>
        </div>
      </div>
    </section>
  `
})
export class HomeTimelineComponent {}
