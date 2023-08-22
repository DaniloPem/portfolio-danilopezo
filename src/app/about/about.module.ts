import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { GrupoCompetenciasComponent } from './grupo-competencias/grupo-competencias.component';

@NgModule({
  declarations: [AboutComponent, GrupoCompetenciasComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  exports: [AboutComponent],
})
export class AboutModule {}
