import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.scss']
})
export class CompetenciasComponent implements OnInit {

  niveis = ['10', '9','8','7','6','5','4','3','2','1'];
  competencias = [
    {nome: 'html5', nivel: 'n7' }, {nome: 'css3', nivel: 'n7'},
    {nome: 'angular', nivel: 'n5'}, {nome: 'javascript', nivel: 'n7'},
    {nome: 'typescript', nivel: 'n7'}, {nome: 'java', nivel: 'n3'},
    {nome: 'poo', nivel: 'n7'}, {nome: 'mysql', nivel: 'n3'},
    {nome: 'espanhol', nivel: 'n10'}, {nome: 'portugues', nivel: 'n8'},
    {nome: 'ingles', nivel: 'n2'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
