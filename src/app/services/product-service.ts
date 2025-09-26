import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts() : Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>("http://localhost:8080/products");
  }

  saveProduct(product : ProductInterface) {
    return this.http.post<ProductInterface>("http://localhost:8080/products", product);
  }

  updateProduct(product : ProductInterface) {
    return this.http.put<ProductInterface>(`http://localhost:8080/products/${product.id}`, product);
  }

  deleteProduct(product : ProductInterface) {
    return this.http.delete<void>(`http://localhost:8080/products/${product.id}`);
  }
}
