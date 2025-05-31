import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

challenges = [
    {
      id: 1,
      titulo: "Respiración consciente",
      descripcion: "Practica la respiración profunda durante 5 minutos.",
      duracion: 5,
      completado: false
    },
    {
      id: 2,
      titulo: "Escaneo corporal",
      descripcion: "Realiza un escaneo corporal para relajar cada parte de tu cuerpo.",
      duracion: 10,
      completado: false
    }
  ]

  getChallenges(){
    return this.challenges;
  }

  getChallengeById(id: number) {
    return this.challenges.find(challenge => challenge.id === id);
  }
}
