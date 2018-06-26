import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StepsServiceService } from './steps-service.service';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }

  url = 'http://www.likmap.org:8080/add-complex-one/45';

  getData() {
    return this.http.get(this.url);
  }

  postData(url, body) {
    return this.http.post(url, body);
  }

  get(url, body) {
    return this.http.get(url, {params: body});
  }
}
