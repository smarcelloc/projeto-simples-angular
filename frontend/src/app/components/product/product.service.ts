// ng g s component/product/product

// gerou product.service.ts

import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';

// Interface em POO
import { Product } from './product.modal';
import { Observable } from 'rxjs';

// service single: somente único service
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3001/products"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  showMessageAguarde(): void {
    this.snackBar.open('Aguardar ...', null, {
      duration: 0,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // RESPOSTA DE PRODUTO : Observable<Product>
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product)
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL)
  }


  readByID(id: String): Observable<Product> {
    return this.http.get<Product>(`${this.baseURL}/${id}`)
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseURL}/${product.id}`, product)
  }

  delete(id: String): Observable<Product> {
    return this.http.delete<Product>(`${this.baseURL}/${id}`)
  }

}
