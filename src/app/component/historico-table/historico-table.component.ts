import { Component, Input } from '@angular/core';
import { Cotacao } from '../../interfaces/cotacao';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-historico-table',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './historico-table.component.html',
  styleUrl: './historico-table.component.scss'
})
export class HistoricoTableComponent {

  @Input() cotacoes!: Cotacao[];

}
