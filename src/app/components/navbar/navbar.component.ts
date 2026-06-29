import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  template: `
    <nav class="fixed top-0 left-0 w-full z-50 glass px-6 py-3 flex justify-between items-center">
      <div class="flex items-center">
        <a routerLink="/" class="logo-text text-lg sm:text-xl font-black cursor-pointer tracking-wider">ESPARTANO</a>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-6">
        <a routerLink="/catalog" class="hover:text-primary transition-colors font-bold tracking-[0.2em] text-[10px]">CATÁLOGO</a>
        <button (click)="toggleAuth()" class="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
      </div>

      <!-- Mobile Menu Buttons (User & Burger) -->
      <div class="flex md:hidden items-center gap-2">
        <button (click)="toggleAuth()" class="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer scale-90">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
        <button (click)="toggleMenu()" class="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer relative z-50" aria-label="Toggle menu">
          <div class="w-5 h-4 flex flex-col justify-between items-center">
            <span [class.rotate-45]="isMenuOpen()" [class.translate-y-[7px]]="isMenuOpen()" class="w-5 h-0.5 bg-white transition-all duration-300 origin-center"></span>
            <span [class.opacity-0]="isMenuOpen()" class="w-5 h-0.5 bg-white transition-all duration-300"></span>
            <span [class.-rotate-45]="isMenuOpen()" [class.-translate-y-[7px]]="isMenuOpen()" class="w-5 h-0.5 bg-white transition-all duration-300 origin-center"></span>
          </div>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Drawer -->
    <div *ngIf="isMenuOpen()" class="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden animate-in fade-in duration-300" (click)="toggleMenu()">
      <div class="absolute top-0 right-0 w-64 h-full glass border-l border-white/10 p-8 pt-24 flex flex-col gap-6 animate-in slide-in-from-right duration-300" (click)="$event.stopPropagation()">
        <a routerLink="/catalog" (click)="toggleMenu()" class="hover:text-primary transition-colors font-bold tracking-[0.2em] text-xs py-3 border-b border-white/5 block">CATÁLOGO</a>
        <button (click)="toggleAuthFromMenu()" class="flex items-center gap-2 text-left hover:text-primary transition-colors font-bold tracking-[0.2em] text-xs py-3 border-b border-white/5 w-full cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          CUENTA
        </button>
      </div>
    </div>

    <!-- Auth Modal -->
    <div *ngIf="isAuthOpen()" class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div class="glass max-w-md w-full p-10 rounded-[3rem] border border-white/10 relative animate-in zoom-in duration-300">
        <button (click)="toggleAuth()" class="absolute top-8 right-10 text-3xl font-light hover:text-primary">&times;</button>
        
        <div class="flex gap-8 mb-10 justify-center">
          <button (click)="isLogin.set(true)" [class.text-primary]="isLogin()" class="font-black text-xs tracking-[0.3em] uppercase transition-colors">LOGIN</button>
          <button (click)="isLogin.set(false)" [class.text-primary]="!isLogin()" class="font-black text-xs tracking-[0.3em] uppercase transition-colors">SIGN UP</button>
        </div>

        <form (submit)="handleAuth($event)" class="space-y-6">
          <div *ngIf="!isLogin()" class="space-y-2">
            <label class="text-[8px] font-black tracking-widest opacity-50 block">NOMBRE COMPLETO</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-[10px] font-bold uppercase focus:outline-none focus:border-primary">
          </div>
          <div class="space-y-2">
            <label class="text-[8px] font-black tracking-widest opacity-50 block">EMAIL</label>
            <input type="email" class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-[10px] font-bold uppercase focus:outline-none focus:border-primary">
          </div>
          <div class="space-y-2">
            <label class="text-[8px] font-black tracking-widest opacity-50 block">PASSWORD</label>
            <input type="password" class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-[10px] font-bold uppercase focus:outline-none focus:border-primary">
          </div>
          
          <button type="submit" class="w-full py-4 bg-primary text-white font-black text-xs tracking-[0.5em] rounded-xl hover:scale-105 transition-all mt-4">
            {{ isLogin() ? 'ENTRAR' : 'REGISTRARME' }}
          </button>
        </form>

        <p class="text-[8px] text-center opacity-30 mt-8 uppercase tracking-widest">ESP / SISTEMA DE ACCESO SEGURO / 2026</p>
      </div>
    </div>
  `
})
export class NavbarComponent {
  isAuthOpen = signal(false);
  isLogin = signal(true);
  isMenuOpen = signal(false);

  toggleAuth() {
    this.isAuthOpen.update(v => !v);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  toggleAuthFromMenu() {
    this.toggleMenu();
    this.toggleAuth();
  }

  handleAuth(event: Event) {
    event.preventDefault();
    // Simulate successful login/signup
    this.toggleAuth();
  }
}
