import { Component } from '@angular/core';

@Component({
  selector: 'app-home-slogans',
  standalone: true,
  template: `
    <section class="py-10 sm:py-20 flex flex-col gap-10 overflow-hidden">
      <div class="flex whitespace-nowrap gap-10 animate-[scroll_40s_linear_infinite]">
        <div class="text-6xl sm:text-8xl md:text-9xl font-black opacity-10 uppercase tracking-tighter">IMPACTO TOTAL</div>
        <div class="text-6xl sm:text-8xl md:text-9xl font-black opacity-10 uppercase tracking-tighter">OVERSYSTEM</div>
        <div class="text-6xl sm:text-8xl md:text-9xl font-black opacity-10 uppercase tracking-tighter">ESTILO Y2K</div>
        <div class="text-6xl sm:text-8xl md:text-9xl font-black opacity-10 uppercase tracking-tighter">NUEVA CORDOBA</div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `]
})
export class HomeSlogansComponent {}
