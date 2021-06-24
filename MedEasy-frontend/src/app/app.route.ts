import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {SuccessComponent} from './success/success.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {AddProductComponent} from './add-product/add-product.component';
import {UsersComponent} from './users/users.component';

export const MAIN_ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'home/:id', component: ProductDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'mycart', component: UserCartComponent},
  {path: 'myprofile', component: MyProfileComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'orderhistory', component: OrderHistoryComponent},
  {path: 'addproduct', component: AddProductComponent},
  {path: 'users', component: UsersComponent}
];
