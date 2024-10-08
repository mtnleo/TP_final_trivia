import { Component, OnInit, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/services/informacion-juego.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {
  tiempoString: string = ""; // Para que se muestren los 0
  tiempo: number = 61;
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);
  
  constructor(){}

  ngOnInit(){
    this.infoJuegoService.setDificultadElegida(false); // Promptea que elija dificultad
    this.infoJuegoService.setModoJuego(0); // Le avisa que es el modo de juego de Time Trial
    
    this.empezarTemporizador();
  }

  empezarTemporizador(){
    if(this.tiempo > 0){
      this.tiempo--;
      if (this.tiempo < 10) {
        this.tiempoString = "0" + String(this.tiempo);
      }
      else {
        this.tiempoString = String(this.tiempo);
      }
      
      setTimeout(() => {this.empezarTemporizador();
      }, 1000);

    }
  }
}
