import { MatDialogModule } from '@angular/material/dialog';
import { NavigationModule } from './navigation/navigation.module';
import { ProjectsModule } from './projects/projects.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutModule } from './about/about.module';
import { TransformArrayPipe } from './pipes/transform-array.pipe';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    BrowserAnimationsModule,
    AboutModule,
    ProjectsModule,
    NavigationModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
