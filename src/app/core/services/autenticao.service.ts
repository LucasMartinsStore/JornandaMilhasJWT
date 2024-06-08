import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutenticaoService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  auth(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/auth/login`, {
      email,
      password,
    });
  }
}
