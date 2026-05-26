import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="glass mt-20 p-10 flex flex-col items-center gap-6 border-t border-white/10">
      <div class="logo-text text-3xl font-black">ESPARTANO</div>
      <p class="text-sm opacity-50">AV. INTENDENCIA 210, NUEVA CORDOBA</p>
      <div class="flex gap-6">
        <a href="#" class="hover:text-primary transition-colors">INSTAGRAM</a>
        <a href="#" class="hover:text-primary transition-colors">TIKTOK</a>
        <a href="#" class="hover:text-primary transition-colors">WHATSAPP</a>
      </div>
      <div class="text-[10px] tracking-[0.3em] opacity-30 mt-10 uppercase">
        DESARROLLADO POR AG STUDIO'S 2026
      </div>
    </footer>
  `
})
export class FooterComponent {}
