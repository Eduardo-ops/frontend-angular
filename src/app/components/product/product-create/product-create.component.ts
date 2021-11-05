import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // Objeto product com seus atributos
  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso!!!')
      this.router.navigate(['/products'])
    })
  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }

}
