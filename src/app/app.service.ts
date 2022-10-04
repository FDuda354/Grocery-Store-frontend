import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Basket, Product, Receipt, User} from "./app.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AppService {
  title = 'Grocery-Store-frontend';
  username = '';
  password = '';
  private header = new HttpHeaders();


  constructor(private http: HttpClient) {
  }

  loginApi(payload: any) {
    return this.http.post('http://localhost:8080/users/login', payload)
  }



  getBasketId(token: string, userId: string): Observable<User>{
    this.header = this.header.set('Authorization', 'Bearer ' + token);
    console.log(token);
    return this.http.get<User>('http://localhost:8080/users/?id='+userId, {'headers': this.header});

  }


  addProduct(token: string): Observable<Basket> {
    this.header = this.header.set('Authorization', 'Bearer ' + token);
    console.log(token);

    return this.http.post<Basket>('http://localhost:8080/shop/product?basketId=8&name=Bread', {'headers': this.header});
  }
///asd

  getReceipt(token: string): Observable<Receipt> {
    this.header = this.header.set('Authorization', 'Bearer ' + token);
    console.log(token);

    return this.http.get<Receipt>('http://localhost:8080/shop/receipt?basketId=8', {'headers': this.header});

  }

  addProductTest( token: string) {
    return this.http.post('http://localhost:8080/shop/product?basketId=8&name=Bread', {'headers': this.header});
  }


}
