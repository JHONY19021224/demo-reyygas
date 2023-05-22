import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoPg3Page } from './pedido-pg3.page';

describe('PedidoPg3Page', () => {
  let component: PedidoPg3Page;
  let fixture: ComponentFixture<PedidoPg3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedidoPg3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
