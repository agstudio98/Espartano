import { Component } from '@angular/core';

@Component({
  selector: 'app-home-events',
  standalone: true,
  template: `
    <section class="p-20 glass m-10 rounded-[3rem] border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
      <div class="flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h2 class="text-5xl font-black mb-4">PRÓXIMO DROP</h2>
          <p class="text-2xl opacity-70">SÁBADO 15 DE JUNIO - 18:00 HS</p>
          <button class="mt-8 px-10 py-4 bg-white text-black font-black text-xl hover:bg-primary hover:text-white transition-all">NOTIFICARME</button>
        </div>
        <div class="text-[12rem] font-black leading-none select-none opacity-20">2026</div>
      </div>
    </section>
  `
})
export class HomeEventsComponent {}
