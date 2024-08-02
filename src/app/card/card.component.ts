import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  // encapsulation: ViewEncapsulation.Emulated, // Quando nao e declarado o encapsulamento ele e setado por padrao
  //encapsulation: ViewEncapsulation.None,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardComponent {
  plano = {
    infos:{
      tipo: 'Simples',
      preco : 100,
    }
  };
}
