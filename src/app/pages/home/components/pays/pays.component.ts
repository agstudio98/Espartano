import { Component } from '@angular/core';

@Component({
  selector: 'app-home-pays',
  standalone: true,
  template: `
    <section class="p-6 sm:p-20 flex flex-wrap justify-center gap-6 sm:gap-10">
      <div class="glass p-6 sm:p-10 rounded-2xl flex flex-col items-center gap-4 w-64 border border-white/5">
        <div class="text-2xl sm:text-3xl font-black">3 CUOTAS</div>
        <div class="text-xs opacity-50 uppercase tracking-widest text-center">SIN INTERÉS CON TODAS LAS TARJETAS</div>
      </div>
      <div class="glass p-6 sm:p-10 rounded-2xl flex flex-col items-center gap-4 w-64 border border-white/5 bg-primary/20 sm:scale-110">
        <div class="text-2xl sm:text-3xl font-black">-15% OFF</div>
        <div class="text-xs opacity-100 font-bold uppercase tracking-widest text-center">ABONANDO CON TRANSFERENCIA</div>
      </div>
      <div class="glass p-6 sm:p-10 rounded-2xl flex flex-col items-center gap-4 w-64 border border-white/5">
        <div class="text-2xl sm:text-3xl font-black">GO CUOTAS</div>
        <div class="text-xs opacity-50 uppercase tracking-widest text-center">4 CUOTAS SIN INTERÉS CON DÉBITO</div>
      </div>
    </section>
  `
})
export class HomePaysComponent {}
