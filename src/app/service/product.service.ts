import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { environment } from '../environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl; // replace with your backend API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const headers = {
      headers: new HttpHeaders({
        rejectUnauthorized: 'false',
        origin: 'https://main--tubular-dragon-cecba9.netlify.app',
      }),
    };
    return this.http.get<Product[]>(this.apiUrl,headers);
  }

  getProductById(id: number): Observable<Product> {
    let header_node = {
      headers: new HttpHeaders({
        rejectUnauthorized: 'false',
        origin: 'https://main--tubular-dragon-cecba9.netlify.app',
      }),
    };
    const url = `${this.apiUrl}/${id}`; // Update the API endpoint URL for getting product by ID
    return this.http.get<Product>(url, header_node);
  }

  addProduct(product: Product): Observable<Product> {
    let header_node = {
      headers: new HttpHeaders({
        rejectUnauthorized: 'false',
        origin: 'https://main--tubular-dragon-cecba9.netlify.app',
      }),
    };
    return this.http.post<Product>(this.apiUrl, product, header_node);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    let header_node = {
      headers: new HttpHeaders({
        rejectUnauthorized: 'false',
        origin: 'https://main--tubular-dragon-cecba9.netlify.app',
      }),
    };
    const url = `${this.apiUrl}/${id}`; // Update the API endpoint URL for updating product by ID
    console.log('In the update service', url, product);
    return this.http.put<Product>(url, product, header_node);
  }

  deleteProduct(id: number): Observable<void> {
    let header_node = {
      headers: new HttpHeaders({
        rejectUnauthorized: 'false',
        origin: 'https://main--tubular-dragon-cecba9.netlify.app',
      }),
    };
    const url = `${this.apiUrl}/${id}`; // Update the API endpoint URL for deleting product by ID
    return this.http.delete<void>(url, header_node);
  }
}
