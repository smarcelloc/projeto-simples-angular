import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit {

  // O angular vai sempre instanciar no construtor
  // sem necessidade private router = new Router()
  // Permite usar nesta classe ProductsCrudComponent
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    // router aqui instancia pelo constructor
    this.router.navigate(['/products/create'])
  }

}
