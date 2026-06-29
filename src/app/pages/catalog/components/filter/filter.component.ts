import { Component, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../../../components/icon/icon.component';

@Component({
  selector: 'app-catalog-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  template: `
    <section class="px-4 py-4 flex flex-wrap gap-4 items-center justify-between glass mb-6 mx-4 rounded-2xl">
      <div class="flex gap-2 sm:gap-4 flex-wrap w-full justify-center md:w-auto md:justify-start">
        <button 
          *ngFor="let cat of categoriesWithIcons"
          (click)="selectCategory(cat.name)"
          [class.bg-primary]="activeCategory() === cat.name"
          [class.border-primary]="activeCategory() === cat.name"
          class="group flex flex-col items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all min-w-[70px] sm:min-w-[80px] cursor-pointer">
          <div class="opacity-40 group-hover:opacity-100 transition-opacity">
            <app-icon [name]="cat.iconName" [size]="16" class="sm:hidden"></app-icon>
            <app-icon [name]="cat.iconName" [size]="20" class="hidden sm:block"></app-icon>
          </div>
          <span class="font-black uppercase text-[7px] sm:text-[8px] tracking-widest">{{cat.name}}</span>
        </button>
      </div>
      
      <div class="relative w-full md:w-64 mt-2 md:mt-0">
        <input 
          type="text" 
          [(ngModel)]="searchTerm"
          (input)="onSearch()"
          placeholder="BUSCAR EN EL SISTEMA..." 
          class="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-primary uppercase font-bold text-[10px] tracking-[0.2em]">
      </div>
    </section>
  `
})
export class CatalogFilterComponent {
  @Output() categoryChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();

  categoriesWithIcons = [
    { name: 'TODOS', iconName: 'all' },
    { name: 'REMERAS', iconName: 'shirt' },
    { name: 'PANTALONES', iconName: 'pants' },
    { name: 'ACCESORIOS', iconName: 'hat' }
  ];

  activeCategory = signal('TODOS');
  searchTerm = '';

  selectCategory(category: string) {
    this.activeCategory.set(category);
    this.categoryChange.emit(category);
  }

  onSearch() {
    this.searchChange.emit(this.searchTerm);
  }
}
