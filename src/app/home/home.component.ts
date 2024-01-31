import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() irParaProjectsEvent = new EventEmitter<void>();
  avisoAberto = true;

  constructor() {}

  ngOnInit(): void {}

  handleIrParaProjects() {
    this.irParaProjectsEvent.emit();
  }

  fecharAviso() {
    this.avisoAberto = false;
  }
}
