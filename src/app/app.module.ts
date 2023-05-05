import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { AboutComponent } from '@components/About/about.component';
import { InicioComponent } from '@components/Inicio/inicio.component';
import { ContactComponent } from '@components/contact/contact.component';
// import { FavoritesComponent } from '@components/favorites/favorites.component';
import { IconsContainerComponent } from '@components/Icons-container/icons-container.component';
// import { OrderComponent } from '@components/order/pre-order/order.component';
import { ProductsListComponent } from '@components/Products/Products-list/products-list.component';
import { ReviewComponent } from '@components/Review/review.component';
// import { ProfileComponent } from '@components/user/profile/profile.component';
// import { UserComponent } from '@components/user/user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AboutComponent,
    IconsContainerComponent,
    ReviewComponent,
    ContactComponent,
    // OrderComponent,
    // FavoritesComponent,
    // UserComponent,
    ProductsListComponent,
    // ProfileComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
