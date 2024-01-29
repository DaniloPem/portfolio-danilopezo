import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeModule } from './../home/home.module';
import { IdiomasComponent } from './../home/idiomas/idiomas.component';
import { NavegacaoComponent } from './navegacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavegacaoComponent],
  imports: [
    CommonModule,
    HomeModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [NavegacaoComponent],
})
export class NavigationModule {}
