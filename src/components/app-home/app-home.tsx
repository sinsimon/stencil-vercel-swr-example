import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  @State() pokemonName: string;
  @State() pokemonImg: string;

  async componentWillLoad() {
    //get a random pokemon and set his name to the state
    return await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 151))
      .then(res => res.json())
      .then(data => {
        this.pokemonName = data.name;
        this.pokemonImg = data.sprites.front_default;
      });
  }

  render() {
    return (
      <div class="app-home">
        <span>
          My favorite pokemon is {this.pokemonName}
        </span>
        <img style={{ display: 'inline' }} src={this.pokemonImg} alt={this.pokemonName} />

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
