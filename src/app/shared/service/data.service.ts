import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService extends HttpService {
  options: HttpHeaders;
  constructor(public http: HttpClient) {
    super(http);
    this.options = new HttpHeaders();
    this.options = this.options.set('Content-Type', 'application/json');
  }

  getCards() {
    return this.get('tasks', this.options).toPromise();
  }

  deleteCard(id) {
    return this.delete('tasks/' + id, this.options).toPromise();
  }

  addCard(data) {
    return this.post('tasks', data, this.options).toPromise();
  }

  changeCard(id, data) {
    return this.put('tasks/' + id, data, this.options).toPromise();
  }
}
