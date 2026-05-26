import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      [attr.width]="size()" 
      [attr.height]="size()" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="1.5" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="w-full h-full"
    >
      <!-- T-Shirt / Hoodie Base -->
      <ng-container *ngIf="name() === 'shirt'">
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
      </ng-container>

      <!-- Pants / Cargo -->
      <ng-container *ngIf="name() === 'pants'">
        <path d="M6 3h12l1.5 6v11a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1v-8l-1-1-1 1v8a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1V9L6 3z" />
        <path d="M6 6h12" />
      </ng-container>

      <!-- Sneaker / Shoes -->
      <ng-container *ngIf="name() === 'sneaker'">
        <path d="M3 12h18v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7Z"/>
        <path d="M3 12c0-3.5 1-7 5-7 1.5 0 3 1 4.5 3.5s2.5 4.5 4.5 4.5 4-1 4-1"/>
        <path d="M12 8v4"/>
        <path d="M15 9v3"/>
      </ng-container>

      <!-- Hat / Accessory -->
      <ng-container *ngIf="name() === 'hat'">
        <path d="M2 18h20"/>
        <path d="M5 18a7 7 0 0 1 14 0"/>
        <circle cx="12" cy="4" r="2"/>
      </ng-container>

      <!-- Grid / All -->
      <ng-container *ngIf="name() === 'all'">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </ng-container>
    </svg>
  `
})
export class IconComponent {
  name = input.required<string>();
  size = input<number>(24);
}
