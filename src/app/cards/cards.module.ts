import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent

  ],
  imports: [
    CommonModule,
    MatSliderModule
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
