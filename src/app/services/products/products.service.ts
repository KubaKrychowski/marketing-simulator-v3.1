import { Product } from './../../shared/models/product.model';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  addNewProductToSystem(product: Product){
    return this.apiService.sendPatchRequest('products/add-product',product);
  }
}
