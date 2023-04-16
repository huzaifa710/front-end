import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error: any) => {
        console.error('Failed to fetch products:', error);
      }
    );
  }

  // getProductById(id: number): void {
  //   this.productService.getProductById(id).subscribe(
  //     (product: Product) => {
  //       // Handle the product data here
  //       console.log('Product:', product);
  //     },
  //     (error: any) => {
  //       console.error(`Failed to fetch product with ID ${id}:`, error);
  //     }
  //   );
  // }

  // addProduct(product: Product): void {
  //   this.productService.addProduct(product).subscribe(
  //     (newProduct: Product) => {
  //       // Handle the new product data here
  //       console.log('New Product:', newProduct);
  //     },
  //     (error: any) => {
  //       console.error('Failed to add product:', error);
  //     }
  //   );
  // }

  // updateProduct(id: number, product: Product): void {
  //   this.productService.updateProduct(id, product).subscribe(
  //     (updatedProduct: Product) => {
  //       // Handle the updated product data here
  //       console.log('Updated Product:', updatedProduct);
  //     },
  //     (error: any) => {
  //       console.error(`Failed to update product with ID ${id}:`, error);
  //     }
  //   );
  // }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      () => {
        // Handle the successful deletion here
        window.location.reload();
        console.log(`Product with ID ${id} deleted successfully`);
      },
      (error: any) => {
        console.error(`Failed to delete product with ID ${id}:`, error);
      }
    );
  }
}
