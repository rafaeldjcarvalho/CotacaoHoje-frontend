import { Component, Input } from '@angular/core';
import { Cotacao } from '../../interfaces/cotacao';

@Component({
  selector: 'app-moeda-table',
  standalone: true,
  imports: [],
  templateUrl: './moeda-table.component.html',
  styleUrl: './moeda-table.component.scss'
})
export class MoedaTableComponent {

  @Input() listaDeCotacoes!:Cotacao[];

}
