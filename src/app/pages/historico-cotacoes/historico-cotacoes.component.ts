import { ApiConfigService } from './../../service/api-config.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { Cotacao } from '../../interfaces/cotacao';
import { HistoricoTableComponent } from "../../component/historico-table/historico-table.component";

@Component({
  selector: 'app-historico-cotacoes',
  standalone: true,
  imports: [
    FormsModule,
    HistoricoTableComponent
],
  templateUrl: './historico-cotacoes.component.html',
  styleUrl: './historico-cotacoes.component.scss'
})
export class HistoricoCotacoesComponent {

  historicoDaCotacao!: Cotacao[];
  listaDeMoeda!: string[];
  moeda!: string;
  dias!: number;

  constructor(private service: ApiConfigService){
    this.buscarMoedas();
  }

  atualizarDados() {
    if(this.moeda != undefined && this.dias != undefined){
      this.service.buscarHistorico(this.moeda, this.dias).pipe(
        tap((cotacao) => (this.historicoDaCotacao = cotacao, console.log(this.historicoDaCotacao)))
      ).subscribe();
    }
  }

  buscarMoedas() {
    this.service.buscarMoedasSuportadas().pipe(
      tap((nomes) => (this.listaDeMoeda = nomes, console.log(this.listaDeMoeda)))
    ).subscribe();
  }
}
