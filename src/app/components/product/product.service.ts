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
  /* url = 'http://localhost:1005/products' */
  url = 'http://localhost:8080/products'

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

  //READ
  readAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }

  //READ BY ID
  readProductById(id: number): Observable<Product> {
    const urlId = `${this.url}/${id}`
    return this.http.get<Product>(urlId)
  }

  //UPDATE
  updateProduct(product: Product): Observable<Product> {
    const urlProduct = `${this.url}/${product.id}`
    return this.http.put<Product>(urlProduct, product)
  }

  //DELETE
  deleteProduct(id: number): Observable<Product> {
    const urlId = `${this.url}/${id}`
    return this.http.delete<Product>(urlId)
  }

}
