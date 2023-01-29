import { Primeiras3LetrasPipe } from './../pipes/primeiras-3-letras.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { HomeComponent } from './home.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ApresentacaoComponent,
    NavegacaoComponent,
    CompetenciasComponent,
    HomeComponent,
    IdiomasComponent,
    Primeiras3LetrasPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    FlexLayoutModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
