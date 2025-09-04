import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cotacao } from '../interfaces/cotacao';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  private API_URL = "http://localhost:8080/api/cotacoes";

  constructor(private http: HttpClient) { }

  // Api endpoints

  buscarCotacaoPorCodigo(par: string) {
    return this.http.get<Cotacao>(`${this.API_URL}/agora/${par}`).pipe(first());
  }

  buscarListaDeCotacoes() {
    return this.http.get<Cotacao[]>(`${this.API_URL}/agora/dashboard`).pipe(first());
  }

  buscarHistorico(par: string, qtd_dias: number) {
    return this.http.get<Cotacao[]>(`${this.API_URL}/historico/${par}?dias=${qtd_dias}`).pipe(first());
  }

  buscarMoedasSuportadas() {
    return this.http.get<string[]>(`${this.API_URL}/moedas-suportadas`);
  }
}
