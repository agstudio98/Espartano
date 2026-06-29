import { Component } from '@angular/core';

@Component({
  selector: 'app-home-main',
  standalone: true,
  template: `
    <section class="min-h-screen flex flex-col justify-center items-center relative p-4 sm:p-10 overflow-hidden">
      <h1 class="oversized-text neon-glow text-center">ESPARTANO</h1>
      <p class="text-base sm:text-2xl md:text-3xl font-black mt-4 tracking-[0.25em] sm:tracking-[0.5em] text-white/80 text-center">OVERSIVE DE CALIDAD</p>
      <div class="mt-12 sm:mt-20 border border-white/20 px-6 sm:px-8 py-3 sm:py-4 glass uppercase tracking-[0.25em] sm:tracking-[0.5em] text-[10px] sm:text-xs font-bold animate-pulse text-center">
        NUEVA COLECCIÓN DISPONIBLE
      </div>
    </section>
  `
})
export class HomeMainComponent {}
