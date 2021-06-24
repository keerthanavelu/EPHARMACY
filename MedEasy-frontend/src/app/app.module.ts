import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ProductDetailsService} from './product-details/product-details.service';
import {HomePageService} from './home-page/home-page.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './authentication.service';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {UserCartService} from './user-cart/user-cart.service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SuccessComponent } from './success/success.component';
import {OrderHistoryService} from './order-history/order-history.service';
import {MyProfileService} from './my-profile/my-profile.service';
import { AddProductComponent } from './add-product/add-product.component';
import { UsersComponent } from './users/users.component';
import {UsersService} from './users/users.service';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ProductDetailsComponent,
    UserCartComponent,
    LoginComponent,
    SignUpComponent,
    MyProfileComponent,
    OrderHistoryComponent,
    SuccessComponent,
    AddProductComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    HomePageService,
    ProductDetailsService,
    AuthenticationService,
    AppService,
    UserCartService,
    OrderHistoryService,
    MyProfileService,
    UsersService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }