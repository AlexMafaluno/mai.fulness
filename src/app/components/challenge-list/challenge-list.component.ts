import { Component, inject, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from '../../interfaces/challenge';
import { CommonModule } from '@angular/common';
import { ChallengeCardComponent } from '../../shared/challenge-card/challenge-card.component';

@Component({
  selector: 'app-challenge-list',
  imports: [CommonModule, ChallengeCardComponent],
  templateUrl: './challenge-list.component.html',
  styleUrl: './challenge-list.component.scss'
})
export class ChallengeListComponent implements OnInit {

  challenges: Challenge[] = [];
private challengeService=inject(ChallengeService);


  ngOnInit():void {
    this.challenges = this.challengeService.getChallenges();
  }

}
