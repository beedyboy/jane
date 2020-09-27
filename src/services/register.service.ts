import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  getRecordById(id) {
    return this.http.get<any>(`${environment.apiUrl}/user/${id}`);
  }

  list() {
    return this.http.get<any>(`${environment.apiUrl}/user`);
  }
  save(data) {
    return this.http.post<any>(`${environment.apiUrl}/user/save`, data);
  }
}
