import { Component, OnInit } from '@angular/core';
import { PokeService } from './services/poke.service';
import { Result } from './interfaces/poke.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  pokemonList: Result[] = [];

  constructor(private pokemonService: PokeService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(data => {
      this.pokemonList = data;
    });
  }
  title = 'pokenocturno';
}