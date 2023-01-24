import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    ApresentacaoComponent,
    NavegacaoComponent,
    CompetenciasComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
