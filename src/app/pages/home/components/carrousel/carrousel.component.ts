import { Component } from '@angular/core';

@Component({
  selector: 'app-home-carrousel',
  standalone: true,
  template: `
    <section class="h-[60vh] w-full overflow-hidden flex items-center justify-center p-4 sm:p-10">
      <div class="w-full max-w-6xl h-full glass rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative">
        <div class="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl font-black opacity-10 animate-pulse text-center px-4">
          FASHION SHOWREEL 2026
        </div>
        <div class="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 flex gap-4">
          <div class="w-12 h-2 bg-primary rounded-full"></div>
          <div class="w-4 h-2 bg-white/20 rounded-full"></div>
          <div class="w-4 h-2 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </section>
  `
})
export class HomeCarrouselComponent {}
