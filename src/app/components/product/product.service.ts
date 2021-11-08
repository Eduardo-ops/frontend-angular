import { Product } from './product-create/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Endpoint do backend para realizar requisições
  url = 'http://localhost:1005/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // Método para voltar uma mensagem no canto superior a direita da realização de sucesso da operação, utilizando snackBar
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['cor-message-negative'] : ['cor-message-positive']
    })
  }

  // CREATE
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  //READ
  readAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  //READ BY ID
  readProductById(id: number): Observable<Product> {
    const urlId = `${this.url}/${id}`
    return this.http.get<Product>(urlId).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  //UPDATE
  updateProduct(product: Product): Observable<Product> {
    const urlProduct = `${this.url}/${product.id}`
    return this.http.put<Product>(urlProduct, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  //DELETE
  deleteProduct(id: number): Observable<Product> {
    const urlId = `${this.url}/${id}`
    return this.http.delete<Product>(urlId).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

}
