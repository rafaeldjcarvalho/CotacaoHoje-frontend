import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedaConversorComponent } from './moeda-conversor.component';

describe('MoedaConversorComponent', () => {
  let component: MoedaConversorComponent;
  let fixture: ComponentFixture<MoedaConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoedaConversorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedaConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
