import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Hero } from '../models/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private API_URL = 'https://localhost:5051/api/Heroes';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.API_URL)
      .pipe(
        tap(_ => this.messageLog('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: string): Observable<Hero> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.messageLog(`fetched hero: ${_.id}`)),
        catchError(this.handleError<Hero>('getOneHero '))
      );
  }

  private messageLog(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      // TODO: send the error to remote logging infrastructure
      console.error(error); 

      // TODO: better job of transforming error for user consumption
      this.messageLog(`${operation} failed: ${error.message}`);

      // TODO: Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
