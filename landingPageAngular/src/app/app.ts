import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Carrusel } from './carrusel/carrusel';
import { NavBar } from './nav-bar/nav-bar';
import { SecMedicos } from './sec-medicos/sec-medicos';
import { RegPacientes } from './reg-pacientes/reg-pacientes';

@Component({
  selector: 'app-root',
  imports: [ Header, Footer, Carrusel, NavBar, SecMedicos, RegPacientes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landingPageAngular');
}
