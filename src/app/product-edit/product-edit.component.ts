// product-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productId!: number;
  product!: Product;
  // Add form fields and bindings

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Null check
      this.getProductById(parseInt(id, 10));
    }
  }

  getProductById(id: number): void {
    this.productService.getProductById(id).subscribe(
      (product: Product) => {
        this.product = product;
      },
      (error: any) => {
        console.error(`Failed to fetch product with ID ${id}:`, error);
      }
    );
  }

  // Update product details
  updateProduct(): void {
    this.productService.updateProduct(this.product.id, this.product).subscribe(
      (updatedProduct: Product) => {
        console.log('Product updated successfully', updatedProduct);
        this.router.navigate(['/products']); // navigate to product list page
      },
      (error: any) => {
        console.error('Error updating product', error);
      }
    );
  }


  // Cancel editing and navigate back
  cancel(): void {
    this.router.navigate(['/products']); // navigate to product list page
  }
}
