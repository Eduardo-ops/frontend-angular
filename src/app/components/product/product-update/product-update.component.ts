import { Product } from './../product-create/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  // Trazendo formulário já preenchido com as informações do determinado produto selecionado
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readProductById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancelUpdate(): void {
    this.router.navigate(['/products'])
  }

}
