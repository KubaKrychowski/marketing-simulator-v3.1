import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-management',
  templateUrl: './market-management.component.html',
  styleUrls: ['./market-management.component.sass']
})
export class MarketManagementComponent implements OnInit {
  products: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
