import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
