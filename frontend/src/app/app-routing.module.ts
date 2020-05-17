import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/// IMPORTANDO POR MIM PARA ROUTES (URL)
import { HomeComponent } from './views/home/home.component';
import { ProductsCrudComponent } from './views/products-crud/products-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "products",
    component: ProductsCrudComponent
  }, {
    path: "products/create",
    component: ProductCreateComponent
  }, {
    path: "products/edit/:id",
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
