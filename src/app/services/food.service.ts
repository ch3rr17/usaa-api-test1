import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  url = 'https://api.nal.usda.gov/ndb/search/';
  // apiKey: 'wX5EHcEKZ43WhsxMOFJfH42mKzaeR16ZEm6VwQOo';

  constructor(private http: HttpClient) { }

// Searches for food
  searchData(q: string): Observable<any> {
    return this.http.get(`${this.url}?api_key=wX5EHcEKZ43WhsxMOFJfH42mKzaeR16ZEm6VwQOo&q=${encodeURI(q)}`).pipe(
      map(results => results['Search'])
    );
  }
}
