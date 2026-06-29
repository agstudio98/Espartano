import { Component } from '@angular/core';

@Component({
  selector: 'app-home-who',
  standalone: true,
  template: `
    <section class="max-w-4xl mx-4 sm:mx-auto p-6 sm:p-12 md:p-20 glass rounded-[2rem] sm:rounded-[4rem] my-10 sm:my-20">
      <h2 class="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-10 text-primary">QUIÉNES SOMOS</h2>
      <p class="text-sm sm:text-base md:text-xl leading-relaxed opacity-80 font-light tracking-wide">
        EN ESPARTANO, NO SOLO HACEMOS ROPA. CREAMOS UNA ARMADURA MODERNA PARA EL DÍA A DÍA. 
        NACIMOS EN EL CORAZÓN DE NUEVA CÓRDOBA CON LA MISIÓN DE REDEFINIR EL CONCEPTO DE OVERSIZE.
        CALIDAD, IMPACTO Y ESTILO Y2K PULIDO AL MÁXIMO.
      </p>
    </section>
  `
})
export class HomeWhoComponent {}
