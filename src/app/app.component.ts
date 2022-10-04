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
  data: Product[];

  ngOnInit(): void  {
  }

  constructor(private appService: AppService) {
    this.data = [];

  }

  login() {
    console.log('nick ' + this.username);

    let payload =
      {
        username : this.username,
        password : this.password
      }

    this.appService.loginApi(payload).subscribe((response: any) => {
      console.log(response);
      this.getData(response.token);
    })

  }

  // getData(token: string) {
  //   this.appService.getData(token).subscribe((response: any) => {
  //     console.log(response);
  //     this.data = response[0].username ;
  //
  //   })
  // }

  getData(token: string) {
    this.appService.getData(token).subscribe((response: any) => {
      console.log(response);
      this.data = response;

    })
  }

}

export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
}
