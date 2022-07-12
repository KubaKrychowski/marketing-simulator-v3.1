import { Product } from './../../../../shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import { UniqueNamesService } from 'src/app/services/unique-names/unique-names.service';

@Component({
  selector: 'app-add-product-card',
  templateUrl: './add-product-card.component.html',
  styleUrls: ['./add-product-card.component.sass'],
})
export class AddProductCardComponent implements OnInit {
  newProduct: Product = null;
  addProductForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
  });

  constructor(
    private productsService: ProductsService,
    private uniqueNamesService: UniqueNamesService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    let isProductUnique: boolean = false;
    this.newProduct = {
      name: this.addProductForm.controls['name'].value,
      price: this.addProductForm.controls['price'].value,
    };

    this.uniqueNamesService
      .checkIfProductNameIsAvailable(this.newProduct.name)
      .subscribe((res) => {
        //TODO: Add controller to unique validators in api
        isProductUnique = res === 'avaliable' ? true : false;
      });

    if (isProductUnique) {
      this.productsService
        .addNewProductToSystem(this.newProduct)
        .subscribe((res) => console.log(res));
    }
  }
}
