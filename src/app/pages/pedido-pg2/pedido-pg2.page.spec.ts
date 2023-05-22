import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoPg2Page } from './pedido-pg2.page';

describe('PedidoPg2Page', () => {
  let component: PedidoPg2Page;
  let fixture: ComponentFixture<PedidoPg2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedidoPg2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
