import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCotacoesComponent } from './historico-cotacoes.component';

describe('HistoricoCotacoesComponent', () => {
  let component: HistoricoCotacoesComponent;
  let fixture: ComponentFixture<HistoricoCotacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoCotacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoCotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
