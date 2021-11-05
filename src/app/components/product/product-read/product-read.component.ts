import { Component, OnInit } from '@angular/core';
import { Product } from '../product-create/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  // Objeto array de product
  products: Product[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.readAllProduct().subscribe(products => {
      this.products = products
    })
  }



}
