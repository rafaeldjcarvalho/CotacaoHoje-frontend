import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiConfigService } from '../../service/api-config.service';
import { Cotacao } from '../../interfaces/cotacao';
import { delay, tap } from 'rxjs';
import { MoedaTableComponent } from "../moeda-table/moeda-table.component";

@Component({
  selector: 'app-moeda-conversor',
  standalone: true,
  imports: [
    FormsModule,
    MoedaTableComponent
],
  templateUrl: './moeda-conversor.component.html',
  styleUrl: './moeda-conversor.component.scss'
})
export class MoedaConversorComponent {

  @Input() listaDeMoeda!: string[];

  cotacao!: Cotacao;
  moeda: string = "Selecione uma moeda";
  valor: number = 0;
  resultado: number = 0;
  click: boolean = false;

  constructor(private service:ApiConfigService){
    this.buscarMoedas();
  }

  buscarMoedas() {
    this.service.buscarMoedasSuportadas().pipe(
      tap((moedas) => (this.listaDeMoeda = moedas, console.log(this.listaDeMoeda)))
    ).subscribe();
  }

  enviarDados() {
    if(this.moeda != "Selecione uma moeda") {
      this.service.buscarCotacaoPorCodigo(this.moeda).pipe(
        tap((response) => (
          this.cotacao = response,
          this.resultado = this.cotacao.valor * this.valor,
          this.click = true,
          console.log(this.cotacao))),
      ).subscribe();
    }
  }

  valorMudou() {
    this.click = false;
  }
}
