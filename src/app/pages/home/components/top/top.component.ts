import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="p-10">
      <h2 class="text-4xl font-black mb-10 tracking-widest text-center">PROMOCIONES TOP</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let item of topProducts" class="glass group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-2 hover:border-primary/50">
          <div class="aspect-square bg-white/5 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
            <span class="text-8xl opacity-10 font-black">{{item.id}}</span>
          </div>
          <h3 class="text-xl font-black">{{item.name}}</h3>
          <p class="text-primary font-bold mt-2 text-2xl">{{item.price | currency}}</p>
          <div class="absolute top-4 right-4 bg-accent text-xs font-black px-3 py-1 rounded-full">-20% OFF</div>
        </div>
      </div>
    </section>
  `
})
export class HomeTopComponent {
  topProducts = [
    { id: '01', name: 'HOODIE OVERSYSTEM V1', price: 45000 },
    { id: '02', name: 'BAGGY JEANS NOVENTA', price: 38000 },
    { id: '03', name: 'T-SHIRT TITAN BLACK', price: 22000 },
    { id: '04', name: 'CARGO PANTS ARMOR', price: 42000 },
    { id: '05', name: 'JACKET CYBERPUNK', price: 55000 },
    { id: '06', name: 'CAP ESPARTANO X', price: 12000 },
  ];
}
