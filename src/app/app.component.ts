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
  isLogin = false;
  showReceipt = false;
  email = '';
  entries: Entry[];
  showProducts = true;

  ngOnInit(): void  {

  }

  constructor(private appService: AppService) {
    this.products = [];
    this.entries = [];

  }

  login() {

    let payload =
      {
        username : this.username,
        password : this.password
      }
    if(this.username != '' && this.password != '')
    this.appService.loginApi(payload).subscribe((response: any) => {
      this.token = response.token;
      this.userId = response.userId;
      this.basketId = response.basketId;
      this.isLogin = true;
      this.showProducts = true;

      console.log(this.basketId)

    })

  }

   getReceipt() {
    this.appService.getReceipt(this.token,this.basketId).subscribe((response: any) => {
      this.entries = response.entries;
      console.log(this.entries);
      console.log(this.receipt);
      this.showReceipt = true;
      this.showProducts = false;
    })
  }

  addProduct(productName: string) {
    this.appService.addProduct(this.token, productName, this.basketId ).subscribe((response: any) => {
      this.products = response.products;
      console.log(response);

    })
  }


  logOut() {
    this.isLogin = false;
    this.showReceipt = false;
    this.showProducts = false;
    this.token = '';
    this.userId = '';
    this.basketId = '';
    this.username = '';
    this.password = '';
    this.email = '';
    this.products = [];
  }

  register() {
    let payload =
      {
        username : this.username,
        password : this.password,
        email: this.email,
        accountNonExpired:true,
        accountNonLocked:true,
        credentialsNonExpired:true,
        enabled:true
      }
    if(this.username != '' && this.password != '' && this.email != '')
    this.appService.registerApi(payload).subscribe((response: any) => {

    })
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

