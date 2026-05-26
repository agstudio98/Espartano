import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Chat Window -->
    <div *ngIf="isOpen()" 
         class="fixed bottom-28 right-8 z-[60] w-[350px] h-[450px] glass rounded-[2rem] border-2 border-primary/30 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
      <div class="p-6 border-b border-white/10 flex justify-between items-center bg-primary/10">
        <div>
          <h3 class="font-black text-sm tracking-widest">SOPORTE ESPARTANO</h3>
          <p class="text-[10px] opacity-50 uppercase">EN LÍNEA</p>
        </div>
        <button (click)="toggleChat()" class="text-2xl hover:text-primary">&times;</button>
      </div>

      <div class="flex-1 p-6 overflow-y-auto space-y-4">
        <div class="glass p-4 rounded-2xl rounded-tl-none text-[11px] font-bold uppercase tracking-tight max-w-[80%] border-white/5">
          ¡HOLA! ¿CÓMO PODEMOS AYUDARTE CON TU ARMADURA HOY?
        </div>
        <div *ngFor="let msg of messages()" 
             class="p-4 rounded-2xl rounded-tr-none text-[11px] font-bold uppercase tracking-tight max-w-[80%] ml-auto bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
          {{msg}}
        </div>
      </div>

      <div class="p-4 border-t border-white/10 bg-black/20">
        <form (submit)="sendMessage($event)" class="flex gap-2">
          <input type="text" 
                 [(ngModel)]="newMessage" 
                 name="newMessage"
                 placeholder="ESCRIBE TU MENSAJE..." 
                 class="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[10px] font-bold uppercase focus:outline-none focus:border-primary">
          <button type="submit" class="bg-primary p-2 rounded-xl hover:scale-105 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>
      </div>
    </div>

    <!-- Toggle Button -->
    <button (click)="toggleChat()" 
            class="fixed bottom-8 right-8 z-50 glass p-4 rounded-2xl hover:bg-primary/20 transition-all border border-white/20 group cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.2)]">
      <svg *ngIf="!isOpen()" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <svg *ngIf="isOpen()" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  `
})
export class SoporteComponent {
  isOpen = signal(false);
  messages = signal<string[]>([]);
  newMessage = '';

  toggleChat() {
    this.isOpen.update(v => !v);
  }

  sendMessage(event: Event) {
    event.preventDefault();
    if (this.newMessage.trim()) {
      this.messages.update(m => [...m, this.newMessage.toUpperCase()]);
      this.newMessage = '';
    }
  }
}
