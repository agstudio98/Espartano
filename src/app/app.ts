import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { ThreeBackgroundComponent } from './components/three-bg/three-bg.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SoporteComponent, ThreeBackgroundComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Espartano');
}
