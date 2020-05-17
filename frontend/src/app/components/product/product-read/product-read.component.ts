import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.modal';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(private productService: ProductService) { }

  private load() {
    this.productService.read().subscribe(responseProduct => {
      this.products = responseProduct
    })
  }

  ngOnInit() {
    this.load()
  }

  deleteProduct(id: string) {
    this.productService.showMessageAguarde()
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage('Deletado com sucesso')
      this.load()
    })
  }

}
