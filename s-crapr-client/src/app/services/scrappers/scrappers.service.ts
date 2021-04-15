import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrappersService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(environment.URLS.scrappers);
  }

  findAllReduced() {
    return this.http.get(environment.URLS.scrappersReduced);
  }

  findOne(id) {
    return this.http.get(environment.URLS.scrappers + id);
  }

  create(body) {
    return this.http.post(environment.URLS.scrappers, body);
  }

  update(id, body) {
    return this.http.put(environment.URLS.scrappers + id, body);
  }

  remove(id) {
    return this.http.delete(environment.URLS.scrappers + id)
  }

  run(body) {
    return this.http.post(environment.URLS.scrappersRun, body);
  }
}
