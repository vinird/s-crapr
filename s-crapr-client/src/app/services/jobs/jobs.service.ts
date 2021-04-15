import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(environment.URLS.jobs);
  }

  findOne(id) {
    return this.http.get(environment.URLS.jobs + id);
  }

  create(body) {
    return this.http.post(environment.URLS.jobs, body);
  }

  update(id, body) {
    return this.http.put(environment.URLS.jobs + id, body);
  }

  remove(id) {
    return this.http.delete(environment.URLS.jobs + id)
  }
}
