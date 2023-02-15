import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeModule } from './../home/home.module';
import { IdiomasComponent } from './../home/idiomas/idiomas.component';
import { NavegacaoComponent } from './navegacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NavegacaoComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    FlexLayoutModule
  ],
  exports: [
    NavegacaoComponent
  ]
})
export class NavigationModule { }
