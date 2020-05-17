import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  product: Product = {
    name: '',
    price: null
  }

  // SUBSCRIBE (esperar receber a resposta do servidor)
  createProduct(): void {
    this.productService.showMessageAguarde()
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
