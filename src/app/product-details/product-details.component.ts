import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null; // Initialize with null

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
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
  goBack(): void {
    this.router.navigate(['/products']); // Navigate to the product listing page
  }
}
