import { Component, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/services/informacion-juego.service';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-elegir-dificultad',
  templateUrl: './elegir-dificultad.component.html',
  styleUrls: ['./elegir-dificultad.component.css']
})
export class ElegirDificultadComponent {
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);
  faChevronLeft = faChevronLeft;

  elegirDificultad(dif: number): void {
    this.infoJuegoService.setDificultad(dif);
    this.infoJuegoService.setDificultadElegida(true);
  }
}