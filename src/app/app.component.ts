import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { productInterface } from '@app/models/products.interface';
// import { ProductsService } from '@app/services/Products/products.service';
import {
  IconDefinition,
  faBars,
  faHeart,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'creaTuLogo';
  faHeart: IconDefinition = faHeart;
  faShoppingCart: IconDefinition = faShoppingCart;
  faUser: IconDefinition = faUser;
  faBars: IconDefinition = faBars;
  paragraphSpinner!: string;
  iterating!: any[];

  // !!! Sections !!!

  @ViewChild('header') header!: ElementRef;
  @ViewChild('home') home!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('iconsContainer') iconsContainer!: ElementRef;
  @ViewChild('productsSection') productsSection!: ElementRef;
  @ViewChild('review') review!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('footer') footer!: ElementRef;

  constructor(
    private readonly formBuilder: FormBuilder,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public spinner: NgxSpinnerService
  ) {}

  @HostListener('window:scroll')
  scrolling(): void {
    if (window.scrollY > 80)
      this.renderer.addClass(this.header.nativeElement, 'active');
    else this.renderer.removeClass(this.header.nativeElement, 'active');
  }

  async ngOnInit() {
    this.paragraphSpinner = 'Cargando...';
    this.spinner
      .show()
      .then(
        () =>
          (this.iterating = [
            this.header.nativeElement,
            this.home.nativeElement,
            this.about.nativeElement,
            this.iconsContainer.nativeElement,
            this.productsSection.nativeElement,
            this.review.nativeElement,
            this.contact.nativeElement,
            this.footer.nativeElement,
          ])
      )
      .then(() =>
        this.document.location.pathname !== '/'
          ? this.getOutSections()
          : this.closeSection()
      )
      .finally(() => this.spinner.hide());
  }

  async getOutSections() {
    this.renderer.addClass(this.header.nativeElement, 'noneDisplay');
    this.renderer.addClass(this.home.nativeElement, 'noneDisplay');
    this.renderer.addClass(this.about.nativeElement, 'noneDisplay');
    this.renderer.addClass(this.iconsContainer.nativeElement, 'noneDisplay');
    this.renderer.addClass(this.productsSection.nativeElement, 'noneDisplay');
    this.renderer.addClass(this.review.nativeElement, 'noneDisplay');
    this.renderer.addClass(this.contact.nativeElement, 'noneDisplay');
    this.renderer.addClass(this.footer.nativeElement, 'noneDisplay');
  }

  closeSection() {
    this.renderer.removeClass(this.header.nativeElement, 'noneDisplay');
    this.renderer.removeClass(this.home.nativeElement, 'noneDisplay');
    this.renderer.removeClass(this.about.nativeElement, 'noneDisplay');
    this.renderer.removeClass(this.iconsContainer.nativeElement, 'noneDisplay');
    this.renderer.removeClass(
      this.productsSection.nativeElement,
      'noneDisplay'
    );
    this.renderer.removeClass(this.review.nativeElement, 'noneDisplay');
    this.renderer.removeClass(this.contact.nativeElement, 'noneDisplay');
    this.renderer.removeClass(this.footer.nativeElement, 'noneDisplay');

    this.router.navigate(['/']);
  }
}
