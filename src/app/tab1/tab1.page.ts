import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotateY(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in'))
    ])
  ]
})
export class Tab1Page {

  cara = 'https://sorteador.com.br/imgs/flip-a-coin/side-b.jpeg';
  coroa = 'https://sorteador.com.br/imgs/flip-a-coin/side-a.jpeg';
  logo = 'https://sorteador.com.br/imgs/flip-a-coin/side-b.jpeg';
  image = this.logo;
  info = 'Clique no botão para jogar!';
  state = 'default';

  constructor() { }

  jogarMoeda() {

    this.info = 'GIRANDO...';
    this.image = this.logo;
    this.state = this.state === 'default' ? 'rotated' : 'default';

    setTimeout(() => {
      if (Math.random() < 0.5) {
        this.image = this.cara;
        this.info = "CARA"
      } else {
        this.image = this.coroa;
        this.info = "COROA"
      }
    }, 2000);
  }

}
