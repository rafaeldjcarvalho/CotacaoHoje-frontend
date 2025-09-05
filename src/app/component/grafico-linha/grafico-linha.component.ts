import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Cotacao } from '../../interfaces/cotacao';

@Component({
  selector: 'app-grafico-linha',
  standalone: true,
  imports: [
    NgxChartsModule
  ],
  templateUrl: './grafico-linha.component.html',
  styleUrl: './grafico-linha.component.scss'
})
export class GraficoLinhaComponent implements OnChanges {

  //view: [number, number] = [600, 600];

  @Input() historicoDeCotacao!: Cotacao[];

  multi: any[] = []

  // Opções de exibição
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Data';
  showYAxisLabel = true;
  yAxisLabel = 'Valor';
  autoScale = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['historicoDeCotacao'] && this.historicoDeCotacao?.length) {
      this.multi = [
        {
          name: 'Cotacao',
          series: this.historicoDeCotacao.map(c => ({
            name: new Date(c.dataHoraConsulta),
            value: c.valor
          }))
        }
      ];
    }
  }
}
