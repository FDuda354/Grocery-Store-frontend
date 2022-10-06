import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Grocery-Store-frontend';
  username = '';
  password = '';
  basketId = '';
  userId = '';
  token = '';
  user: User | undefined;
  basket: Basket | undefined;
  products: Product[];
  receipt: Receipt | undefined;


  ngOnInit(): void  {

  }

  constructor(private appService: AppService) {
    this.products = [];

  }

  login() {

    let payload =
      {
        username : this.username,
        password : this.password
      }

    this.appService.loginApi(payload).subscribe((response: any) => {
      this.token = response.token;
      this.userId = response.userId;
      this.basketId = response.basketId;

      console.log(this.basketId)

    })

  }

   getReceipt() {
    this.appService.getReceipt(this.token,this.basketId).subscribe((response: any) => {
      console.log(response);
      this.receipt = response;
      console.log(this.receipt);
    })
  }

  addProduct(productName: string) {
    this.appService.addProduct(this.token, productName, this.basketId ).subscribe((response: any) => {
      console.log(response);
      this.basket = response;
      console.log(this.basket);
    })
  }

  singUp() {
   this.appService.singUp(this.username, this.password).subscribe((response: any) => {
      console.log(response);
      this.user = response;
      console.log(this.user);
   });
  }
}


export interface Entry {
  product: Product;
  quantity: number;
  totalPrice: number;
}

export interface Receipt {
  entries: Entry[];
  discounts: string[];
  totalPrice: number;
  date: string;
}
export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
}

export interface Basket {
  id: number;
  products: Product[];
  owner: string;
}

export interface Authority {
  authority: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  basket: Basket;
  role: string;
  enabled: boolean;
  authorities: Authority[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

