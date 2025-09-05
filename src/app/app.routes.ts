import { HistoricoCotacoesComponent } from './pages/historico-cotacoes/historico-cotacoes.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "dashboard"},
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "historico",
    component: HistoricoCotacoesComponent
  },
  {path: "**", pathMatch: "full", redirectTo: "dashboard"}
];
