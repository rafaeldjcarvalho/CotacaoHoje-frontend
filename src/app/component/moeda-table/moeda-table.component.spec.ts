import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedaTableComponent } from './moeda-table.component';

describe('MoedaTableComponent', () => {
  let component: MoedaTableComponent;
  let fixture: ComponentFixture<MoedaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoedaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
