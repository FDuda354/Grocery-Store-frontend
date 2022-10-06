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


  getReceipt(token: string,basketId: string): Observable<Receipt> {
    this.header = this.header.set('Authorization', 'Bearer ' + token);
    console.log(token);

    return this.http.get<Receipt>('http://localhost:8080/shop/receipt?basketId='+basketId, {'headers': this.header});

  }


  addProduct(token: string, productName: string, basketId: string): Observable<Basket> {
    this.header = this.header.set('Authorization', 'Bearer ' + token);
    console.log(token);

    return this.http.post<Basket>('http://localhost:8080/shop/product?basketId=' + basketId + '&name=' + productName ,null, {'headers': this.header});

  }

  registerApi(payload: { password: string; credentialsNonExpired: boolean; accountNonExpired: boolean; email: string; enabled: boolean; username: string; accountNonLocked: boolean }) {
    return this.http.post('http://localhost:8080/users/register', payload)
  }
}
