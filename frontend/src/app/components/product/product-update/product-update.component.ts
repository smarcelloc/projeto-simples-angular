import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  product: Product = {
    name: '',
    price: null
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    let x = this.productService.readByID(id).subscribe((response) => {
      this.product = response
    }, (responseError) => {
      this.productService.showMessage(
        `
          ${responseError.status} - 
          ${responseError.message}
        `
      )
      this.router.navigate(['/products'])
    })
  }

  // SUBSCRIBE (esperar receber a resposta do servidor)
  updateProduct(): void {
    this.productService.showMessageAguarde()
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto alterado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
