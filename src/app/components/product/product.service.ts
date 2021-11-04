import { Product } from './product-create/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Endpoint do backend para realizar requisições
  url = 'http://localhost:1005/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // Método para voltar uma mensagem no canto superior a direita da realização de sucesso da operação, utilizando snackBar
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // CREATE
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product)
  }

}
