import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonComponent } from '../card-button/card-button.component';

@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent
  ],
  imports: [
    CommonModule
  ],
  // exportacao explicita do modulos para serem consumidos por outros modulos
  exports: [
    CardComponent,
    // CardButtonComponent,
    CardRoxoComponent,
    // CardRoxoButtonComponent
  ]
})
export class CardsModule { }
