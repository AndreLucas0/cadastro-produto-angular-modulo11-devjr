import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { ProductInterface } from '../../interfaces/Product';
import { CategoryService } from '../../services/category-service';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  products : ProductInterface [] = [];

  product : ProductInterface = {} as ProductInterface;
  
  categories : Category [] = [];

  showForm : boolean = false;

  constructor(private categoryService: CategoryService, private productService: ProductService) {}

  ngOnInit(): void {
    // this.categories = this.categoryService.getCategories();
    this.loadCategories();
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: data => { this.products = data }
    });
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: data => {this.categories = data}
    });
  }

  saveProduct(save: boolean) {

    if (save) {
      this.productService.saveProduct(this.product).subscribe({
      next: data => { 
        this.products.push(data);
       }
    });
    }

    this.product = {} as ProductInterface;
    this.showForm = false;
    
  }
  
  create() {
    this.showForm = true;
  }

  edit(product : ProductInterface) {
    this.product = product;
    this.showForm = true;
  }

  delete(product : ProductInterface) {
    console.log(product);
  }
}
