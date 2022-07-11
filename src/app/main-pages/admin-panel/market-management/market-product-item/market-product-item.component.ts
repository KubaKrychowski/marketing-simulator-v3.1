import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-product-item',
  templateUrl: './market-product-item.component.html',
  styleUrls: ['./market-product-item.component.sass']
})
export class MarketProductItemComponent implements OnInit {

  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
