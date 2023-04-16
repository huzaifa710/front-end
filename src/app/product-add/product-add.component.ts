// product-add.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product(); // Initialize a new Product object

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  // Add new product
  addProduct(): void {
    this.productService.addProduct(this.product).subscribe(
      (newProduct: Product) => {
        console.log('Product added successfully', newProduct);
        this.router.navigate(['/products']); // navigate to product list page
      },
      (error: any) => {
        console.error('Error adding product', error);
      }
    );
  }

  // Cancel adding and navigate back
  cancel(): void {
    this.router.navigate(['/products']); // navigate to product list page
  }
}
