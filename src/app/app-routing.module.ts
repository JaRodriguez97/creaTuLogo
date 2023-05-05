import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Logo',
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    title: 'Producto Detallado',
    path: 'products-details/:id',
    loadChildren: () =>
      import(
        './components/Products/Products-details/products-details.module'
      ).then((m) => m.ProductsDetailsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
