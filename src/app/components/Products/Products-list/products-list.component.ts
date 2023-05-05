import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { ProductsService } from '@services/Products/products.service';
import {
  faArrowUpFromBracket,
  faEye,
  faHeart,
  faShare,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { productInterface } from '@models/products.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products!: productInterface[];
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  faShare = faShare;
  faEye = faEye;
  faArrowUpFromBracket = faArrowUpFromBracket;
  precioTotal!: number;

  constructor(
    public appComponent: AppComponent,
    public productsService: ProductsService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spinner.show().then(() =>
      this.productsService.getProducts().subscribe(
        (productsPromise) => (this.products = productsPromise),
        (err) => console.error(err),
        () => this.spinner.hide()
      )
    );
  }

  getTotalDescuento(product: productInterface) {
    return product.precio! - (product.precio! * product.descuento!) / 100;
  }

  getDetails(_id: string) {
    this.spinner
      .show()
      .then(() =>
        this.appComponent
          .getOutSections()
          .then(() => this.router.navigate(['products-details', _id]))
      );
  }
}
