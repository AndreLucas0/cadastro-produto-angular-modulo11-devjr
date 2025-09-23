import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { ProductInterface } from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  
  ngOnInit(): void {
  }

  @Input()
  categories : Category [] = [];

  @Input()
  product ?: ProductInterface;

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }

  cancel() {
    this.product = {} as ProductInterface;
  }

  
}
