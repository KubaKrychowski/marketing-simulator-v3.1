import { MarketSearchResultsItemComponent } from './../components/market-search-results-item/market-search-results-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketFiltersSideBarComponent } from '../components/market-filters-side-bar/market-filters-side-bar.component';
import { MarketSearchResultsComponent } from '../components/market-search-results/market-search-results.component';
import { MarketComponent } from '../components/market/market.component';


@NgModule({
  declarations: [
    MarketSearchResultsComponent,
    MarketFiltersSideBarComponent,
    MarketSearchResultsItemComponent,
    MarketComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MarketModule { }
