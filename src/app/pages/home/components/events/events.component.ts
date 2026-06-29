import { Component } from '@angular/core';

@Component({
  selector: 'app-home-events',
  standalone: true,
  template: `
    <section class="p-6 sm:p-12 md:p-20 glass m-4 sm:m-10 rounded-[2rem] sm:rounded-[3rem] border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
      <div class="flex flex-col md:flex-row justify-between items-center gap-10">
        <div class="text-center md:text-left">
          <h2 class="text-3xl sm:text-5xl font-black mb-4">PRÓXIMO DROP</h2>
          <p class="text-lg sm:text-2xl opacity-70">SÁBADO 15 DE JUNIO - 18:00 HS</p>
          <button class="mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 bg-white text-black font-black text-base sm:text-xl hover:bg-primary hover:text-white transition-all cursor-pointer">NOTIFICARME</button>
        </div>
        <div class="text-[6rem] sm:text-[10rem] md:text-[12rem] font-black leading-none select-none opacity-20">2026</div>
      </div>
    </section>
  `
})
export class HomeEventsComponent {}
