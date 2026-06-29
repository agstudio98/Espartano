import { Component, signal, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../components/icon/icon.component';

@Component({
  selector: 'app-catalog-main',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="p-4 sm:p-6">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
        <div *ngFor="let product of paginatedProducts()" 
             (click)="openModal(product)"
             class="glass p-3 sm:p-4 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group cursor-pointer animate-in fade-in duration-500">
          <div class="aspect-[3/4] bg-white/5 rounded-xl mb-3 sm:mb-4 flex items-center justify-center relative overflow-hidden group-hover:bg-primary/5 transition-colors text-white">
            <div class="opacity-30 group-hover:opacity-60 transition-opacity transform group-hover:scale-110 duration-500 w-16 h-16 sm:w-20 sm:h-20">
              <app-icon [name]="product.iconName" [size]="product.iconName === 'pants' ? 60 : 80"></app-icon>
            </div>
          </div>
          <h3 class="font-black text-[8px] mb-1 tracking-wider opacity-80 uppercase truncate">{{product.name}}</h3>
          <p class="text-primary font-bold text-xs sm:text-sm mb-3">{{product.price | currency}}</p>
          <button class="w-full py-2 bg-white/5 border border-white/10 rounded-lg font-bold uppercase text-[7px] tracking-widest hover:bg-white hover:text-black transition-all">COMPRAR</button>
        </div>
      </div>

      <!-- No Results -->
      <div *ngIf="filteredProducts().length === 0" class="p-20 text-center opacity-30 font-black text-xl sm:text-2xl uppercase tracking-[0.5em]">
        SIN RESULTADOS
      </div>

      <!-- Pagination Control -->
      <div class="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
        <button (click)="prevPage()" [disabled]="currentPage() === 1" class="glass px-4 sm:px-6 py-2 rounded-xl font-black text-[9px] sm:text-[10px] disabled:opacity-20 hover:bg-primary transition-all uppercase tracking-widest">ANTERIOR</button>
        <div class="flex gap-1.5 sm:gap-2">
          <button *ngFor="let p of totalPagesArray()" (click)="setPage(p)" [class.bg-primary]="currentPage() === p" class="w-8 h-8 sm:w-10 sm:h-10 glass rounded-xl font-black text-[9px] sm:text-[10px] flex items-center justify-center hover:bg-primary/50 transition-all">{{p}}</button>
        </div>
        <button (click)="nextPage()" [disabled]="currentPage() === totalPages()" class="glass px-4 sm:px-6 py-2 rounded-xl font-black text-[9px] sm:text-[10px] disabled:opacity-20 hover:bg-primary transition-all uppercase tracking-widest">SIGUIENTE</button>
      </div>

      <!-- Quick Buy Modal -->
      <div *ngIf="selectedProduct()" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
        <div class="glass max-w-lg w-full p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border-2 border-primary animate-in fade-in zoom-in duration-300 relative">
          <button (click)="closeModal()" class="absolute top-6 right-6 sm:top-8 sm:right-10 text-3xl sm:text-4xl font-light hover:text-primary">&times;</button>
          <div class="mb-6 sm:mb-10 text-center pr-8">
            <h2 class="text-2xl sm:text-4xl font-black uppercase">{{selectedProduct()?.name}}</h2>
          </div>
          <div class="space-y-4 sm:space-y-6">
            <div class="flex justify-between items-center text-xl sm:text-2xl font-black">
              <span>TOTAL</span>
              <span class="text-primary">{{selectedProduct()?.price | currency}}</span>
            </div>
            <div class="bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10">
              <h4 class="font-bold mb-3 sm:mb-4 uppercase text-xs sm:text-sm">MÉTODO DE PAGO</h4>
              <div class="space-y-3 sm:space-y-4">
                <button class="w-full p-3 sm:p-4 border border-white/20 rounded-xl hover:bg-primary/20 text-left font-bold uppercase transition-all flex justify-between text-xs sm:text-sm">TRANSFERENCIA (-15%)</button>
                <button class="w-full p-3 sm:p-4 border border-white/20 rounded-xl hover:bg-primary/20 text-left font-bold uppercase transition-all text-xs sm:text-sm">TARJETA DE CRÉDITO</button>
              </div>
            </div>
            <button class="w-full py-4 sm:py-6 bg-primary text-white font-black text-lg sm:text-2xl rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(139,92,246,0.5)]">CONFIRMAR PEDIDO</button>
            <p class="text-[8px] sm:text-[10px] text-center opacity-50 uppercase tracking-[0.2em]">AL CONFIRMAR SERÁS REDIRIGIDO A WHATSAPP</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CatalogMainComponent {
  category = input<string>('TODOS');
  search = input<string>('');
  currentPage = signal(1);
  pageSize = 12;

  products = this.generateProducts();

  filteredProducts = computed(() => {
    return this.products.filter(p => {
      const matchCategory = this.category() === 'TODOS' || p.type === this.category();
      const matchSearch = p.name.toLowerCase().includes(this.search().toLowerCase());
      return matchCategory && matchSearch;
    });
  });

  paginatedProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredProducts().slice(start, end);
  });

  totalPages = computed(() => Math.ceil(this.filteredProducts().length / this.pageSize));
  totalPagesArray = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i + 1));

  selectedProduct = signal<any>(null);

  private generateProducts() {
    const list = [];
    const types = ['REMERAS', 'PANTALONES', 'ZAPATILLAS', 'ACCESORIOS'];
    const names = ['OVERSYSTEM', 'TITAN', 'CYBER', 'ARMOR', 'GHOST', 'CHROME', 'NEON', 'TECH', 'METAL', 'CORE'];
    
    for (let i = 1; i <= 72; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      const name = names[Math.floor(Math.random() * names.length)];
      
      let iconName = 'shirt';
      if (type === 'PANTALONES') iconName = 'pants';
      if (type === 'ACCESORIOS') iconName = 'hat';
      if (type === 'ZAPATILLAS') iconName = 'sneaker';

      list.push({
        id: i,
        name: `${name} ${type.slice(0, -1)} V${i}`,
        price: 15000 + (Math.random() * 50000),
        type: type,
        iconName: iconName
      });
    }
    return list;
  }

  setPage(page: number) {
    this.currentPage.set(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextPage() { if (this.currentPage() < this.totalPages()) this.setPage(this.currentPage() + 1); }
  prevPage() { if (this.currentPage() > 1) this.setPage(this.currentPage() - 1); }
  openModal(product: any) { this.selectedProduct.set(product); }
  closeModal() { this.selectedProduct.set(null); }
}
