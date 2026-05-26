import { Component } from '@angular/core';

@Component({
  selector: 'app-home-main',
  standalone: true,
  template: `
    <section class="min-h-screen flex flex-col justify-center items-center relative p-10 overflow-hidden">
      <h1 class="oversized-text neon-glow text-center">ESPARTANO</h1>
      <p class="text-3xl font-black mt-4 tracking-[0.5em] text-white/80">OVERSIVE DE CALIDAD</p>
      <div class="mt-20 border border-white/20 px-8 py-4 glass uppercase tracking-[0.5em] text-xs font-bold animate-pulse">
        NUEVA COLECCIÓN DISPONIBLE
      </div>
    </section>
  `
})
export class HomeMainComponent {}
