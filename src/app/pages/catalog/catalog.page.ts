import { Component, signal, ViewChild, effect } from '@angular/core';
import { CatalogFilterComponent } from './components/filter/filter.component';
import { CatalogMainComponent } from './components/main/main.component';

@Component({
  selector: 'app-catalog-page',
  standalone: true,
  imports: [CatalogFilterComponent, CatalogMainComponent],
  template: `
    <main class="pt-32 pb-20">
      <div class="px-10 mb-10 text-center">
        <h1 class="text-4xl font-black uppercase tracking-tighter">CATÁLOGO</h1>
        <p class="text-[10px] opacity-40 font-bold tracking-[0.5em] uppercase mt-2">ARMADURA MODERNA / 2026</p>
      </div>
      <app-catalog-filter 
        (categoryChange)="updateCategory($event)"
        (searchChange)="updateSearch($event)">
      </app-catalog-filter>
      <app-catalog-main 
        #catalogMain
        [category]="currentCategory()"
        [search]="currentSearch()">
      </app-catalog-main>
    </main>
  `
})
export class CatalogPage {
  @ViewChild('catalogMain') catalogMain!: CatalogMainComponent;
  
  currentCategory = signal('TODOS');
  currentSearch = signal('');

  updateCategory(cat: string) {
    this.currentCategory.set(cat);
    this.catalogMain?.currentPage.set(1);
  }

  updateSearch(search: string) {
    this.currentSearch.set(search);
    this.catalogMain?.currentPage.set(1);
  }
}
