import { Component } from '@angular/core';

@Component({
  selector: 'app-home-timeline',
  standalone: true,
  template: `
    <section class="p-20 flex flex-col items-center">
      <h2 class="text-4xl font-black mb-20 text-accent">NUESTRO RECORRIDO</h2>
      <div class="relative w-full max-w-2xl border-l-4 border-primary/20 pl-10 space-y-20">
        <div class="relative">
          <div class="absolute -left-14 top-2 w-8 h-8 rounded-full bg-primary neon-glow"></div>
          <h3 class="text-2xl font-black">2024 - EL COMIENZO</h3>
          <p class="opacity-60">PRIMEROS DISEÑOS EN EL GARAGE.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-14 top-2 w-8 h-8 rounded-full bg-accent neon-glow"></div>
          <h3 class="text-2xl font-black">2025 - EXPANSIÓN</h3>
          <p class="opacity-60">PRIMER LOCAL EN NUEVA CÓRDOBA.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-14 top-2 w-8 h-8 rounded-full bg-secondary neon-glow"></div>
          <h3 class="text-2xl font-black">2026 - PRESENTE</h3>
          <p class="opacity-60">LÍDERES EN MODA OVERSIZED DIGITAL.</p>
        </div>
      </div>
    </section>
  `
})
export class HomeTimelineComponent {}
