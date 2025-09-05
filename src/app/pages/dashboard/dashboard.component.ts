import { Component } from '@angular/core';
import { ApiConfigService } from '../../service/api-config.service';
import { delay, Observable, tap } from 'rxjs';
import { MoedaTableComponent } from "../../component/moeda-table/moeda-table.component";
import { Cotacao } from '../../interfaces/cotacao';
import { MoedaConversorComponent } from "../../component/moeda-conversor/moeda-conversor.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MoedaTableComponent, MoedaConversorComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  lista: Cotacao[] | null = null;

  constructor(private service:ApiConfigService){
    delay(2000);
    this.getListaDeCotacoes();
  }

  getListaDeCotacoes() {
    this.service.buscarListaDeCotacoes().pipe(
      tap((moedas) => (this.lista = moedas, console.log(this.lista))),
    ).subscribe();
  }

}
