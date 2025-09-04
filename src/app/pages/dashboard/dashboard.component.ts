import { Component } from '@angular/core';
import { ApiConfigService } from '../../service/api-config.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  lista: string[] = [];

  constructor(private service:ApiConfigService){}

  getMoeda() {
    this.service.buscarMoedasSuportadas().pipe(
      tap((moedas) => (this.lista = moedas, console.log(this.lista))),
    ).subscribe();
  }

}
