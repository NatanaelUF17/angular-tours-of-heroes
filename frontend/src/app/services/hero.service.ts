import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private API_URL = 'https://localhost:5051/api/Heroes';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.API_URL);
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.API_URL}/${id}`);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
