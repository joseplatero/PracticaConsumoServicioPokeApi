
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result, SearchResponse } from '../interfaces/poke.interface';
import { SearchDetail } from '../interfaces/poke.detail.interface';



@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Result[]> {
    return this.http.get<SearchResponse>(this.apiUrl)
      .pipe(
        map(response => response.results)
      );
  }

  getPokemonByName(name: string): Observable<SearchDetail> {
    const url = `${this.apiUrl}/${name}`;
    return this.http.get<SearchDetail>(url);
  }
}
