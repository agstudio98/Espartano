import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="glass mt-20 p-6 sm:p-10 flex flex-col items-center gap-6 border-t border-white/10">
      <div class="logo-text text-2xl sm:text-3xl font-black">ESPARTANO</div>
      <p class="text-xs sm:text-sm opacity-50 text-center">AV. INTENDENCIA 210, NUEVA CORDOBA</p>
      <div class="flex gap-6 flex-wrap justify-center">
        <a href="#" class="hover:text-primary transition-colors text-xs sm:text-sm">INSTAGRAM</a>
        <a href="#" class="hover:text-primary transition-colors text-xs sm:text-sm">TIKTOK</a>
        <a href="#" class="hover:text-primary transition-colors text-xs sm:text-sm">WHATSAPP</a>
      </div>
      <div class="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] opacity-30 mt-8 sm:mt-10 uppercase text-center">
        DESARROLLADO POR AG STUDIO'S 2026
      </div>
    </footer>
  `
})
export class FooterComponent {}
