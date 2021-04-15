import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobResultsService {

  constructor(private http: HttpClient) { }

  findByJobId(id: string) {
    return this.http.get(environment.URLS.jobsResultByJob + id);
  }
}
