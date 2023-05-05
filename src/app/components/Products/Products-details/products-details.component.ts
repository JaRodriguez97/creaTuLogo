import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { ProductsService } from '@services/Products/products.service';
import {
  faArrowUpFromBracket,
  faShoppingCart,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { productInterface } from '@models/products.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit {
  product!: productInterface;
  faXmark = faXmark;
  faShoppingCart = faShoppingCart;
  faArrowUpFromBracket = faArrowUpFromBracket;

  constructor(
    public productsService: ProductsService,
    private spinner: NgxSpinnerService,
    public appComponent: AppComponent,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.spinner.show().then(() => {
      let { id } = this.activatedRouter.snapshot.params;

      this.productsService.getProduct(id).subscribe(
        (res) => (this.product = res),
        (err) => console.error(err),
        () => this.spinner.hide()
      );
    });
  }
}
