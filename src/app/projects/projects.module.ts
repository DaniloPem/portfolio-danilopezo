import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { DescricaoProjetoComponent } from './descricao-projeto/descricao-projeto.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProjectsComponent,
    DescricaoProjetoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
