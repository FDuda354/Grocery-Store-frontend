import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Product} from "./app.component";
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

  // getData(token: string) {
  //    this.header = this.header.set('Authorization', 'Bearer ' + token);
  //   return this.http.get('http://localhost:8080/users/all', {'headers': this.header});
  // }

  //TODO: do wyjebania
  // getData(token: string) {
  //   this.header = this.header.set('Authorization', 'Bearer ' + token);
  //   return this.http.get('http://localhost:8080/shop/products', {'headers': this.header});
  // }

  getData(token: string): Observable<Product[]> {
    this.header = this.header.set('Authorization', 'Bearer ' + token);
    return this.http.get<Product[]>('http://localhost:8080/shop/products', {'headers': this.header});
  }


}
