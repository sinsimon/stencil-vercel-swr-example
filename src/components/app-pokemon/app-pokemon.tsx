import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-pokemon',
  shadow: true,
})
export class AppPokemon {

  @State() pokemon: {
    name: string,
    img: string,
  };

  async componentWillLoad() {
    //get a random pokemon and set his name to the state
    if (globalThis['initialState']) {
      this.pokemon = globalThis['initialState'];
      return;
    }

    if (this.pokemon === undefined) {
      return await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 151))
        .then(res => res.json())
        .then(data => {
          this.pokemon = {
            name: data.name,
            img: data.sprites.front_default,
          }
        }).then(() => this.writeToDom());
    }
  }

  writeToDom() {
    // if (Build.isBrowser) {
    //   return;
    // }

    let script = document.getElementById('initial-state');
    let wasCreated = false;
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('id', 'initial-state');
      wasCreated = true;
    }
    script.textContent = `window.initialState = ${JSON.stringify(this.pokemon)};`;

    if (wasCreated) {
      document.head.appendChild(script);
    }
  }

  render() {
    return (
      <div class="app-home">
        <span>
          My favorite pokemon is {this.pokemon.name}
        </span>
        <img style={{ display: 'inline' }} src={this.pokemon.img} alt={this.pokemon.name} />

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
