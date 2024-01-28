import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ConviteComponent } from './convite/convite.component';
import { ProjetosContatoComponent } from './projetos-contato/projetos-contato.component';
import { DadosDetallesComponent } from './dados-detalles/dados-detalles.component';

@NgModule({
  declarations: [ContactComponent, ConviteComponent, ProjetosContatoComponent, DadosDetallesComponent],
  imports: [CommonModule],
  exports: [ContactComponent],
})
export class ContactModule {}
