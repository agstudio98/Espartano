import { Component } from '@angular/core';
import { HomeMainComponent } from './components/main/main.component';
import { HomeWhoComponent } from './components/who/who.component';
import { HomeSlogansComponent } from './components/slogans/slogans.component';
import { HomeTimelineComponent } from './components/timeline/timeline.component';
import { HomeTopComponent } from './components/top/top.component';
import { HomeEventsComponent } from './components/events/events.component';
import { HomePaysComponent } from './components/pays/pays.component';
import { HomeCarrouselComponent } from './components/carrousel/carrousel.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HomeMainComponent,
    HomeWhoComponent,
    HomeSlogansComponent,
    HomeTimelineComponent,
    HomeTopComponent,
    HomeEventsComponent,
    HomePaysComponent,
    HomeCarrouselComponent
  ],
  template: `
    <main class="pt-20">
      <app-home-main class="block animate-fade-in" style="animation-delay: 0.1s"></app-home-main>
      <app-home-carrousel class="block animate-fade-in" style="animation-delay: 0.2s"></app-home-carrousel>
      <app-home-top class="block animate-fade-in" style="animation-delay: 0.3s"></app-home-top>
      <app-home-who class="block animate-fade-in" style="animation-delay: 0.4s"></app-home-who>
      <app-home-slogans class="block animate-fade-in" style="animation-delay: 0.5s"></app-home-slogans>
      <app-home-events class="block animate-fade-in" style="animation-delay: 0.6s"></app-home-events>
      <app-home-timeline class="block animate-fade-in" style="animation-delay: 0.7s"></app-home-timeline>
      <app-home-pays class="block animate-fade-in" style="animation-delay: 0.8s"></app-home-pays>
    </main>
  `
})
export class HomePage {}
