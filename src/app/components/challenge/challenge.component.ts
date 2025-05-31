import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from '../../interfaces/challenge';

@Component({
  selector: 'app-challenge',
  imports: [],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.scss'
})
export class ChallengeComponent implements OnInit {

  idChallenge: string = ''
  challengeSubs$!: Subscription;
  challenge!: Challenge
  params$!: Subscription;

  private readonly route = inject(ActivatedRoute);
  private readonly challengeService = inject(ChallengeService); // Asegúrate de importar y definir ChallengeService correctamente
  description: string = '';
  duracion: number = 0; // Duración en segundos
  completado: boolean = false; // Estado de completado del desafío

// Aquí puedes definir el tipo adecuado según tu implementación
ngOnInit(): void {
  this.params$ = this.route.paramMap.subscribe((params: ParamMap) => {
      this.idChallenge = params.get('id') ?? ''
      this.loadMasterData(this.idChallenge);
  console.log('Componente Challenge cargado');
})
}

loadMasterData(idChallenge: string): void {
  const challenge = this.challengeService.getChallengeById(Number(idChallenge));
  if (challenge) {
    this.challenge = challenge;
    this.description = challenge.descripcion;
    this.duracion = challenge.duracion;
    this.completado = challenge.completado;
  } else {
    console.warn('No se encontró el desafío con ID:', idChallenge);
  }
}

}