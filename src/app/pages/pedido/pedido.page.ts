import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  navCtrl: any;

  constructor() { }

  ngOnInit() {
  }
  ir_pagina2(){
    this.navCtrl.push("Pagina2Page");
  }
}
