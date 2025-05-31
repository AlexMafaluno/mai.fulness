import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-challenge-card',
  imports: [RouterModule],
  templateUrl: './challenge-card.component.html',
  styleUrl: './challenge-card.component.scss'
})
export class ChallengeCardComponent {
@Input() titulo: string = '';
@Input() descripcion: string = '';
@Input() duracion: number = 0;
@Input() completado: boolean = false;
@Input() id: number = 0;

  get duracionFormateada(): string {
    const minutos = Math.floor(this.duracion / 60);
    const segundos = this.duracion % 60;
    return `${minutos} min ${segundos} seg`;
  }

  get estado(): string {
    return this.completado ? 'Completado' : 'Pendiente';
  }
}
