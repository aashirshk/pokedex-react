import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.components'; 
import { SearchBox } from './components/search-box/search-box.components'; 

class App extends Component{
  constructor(){
    super();

    this.state = {
      pokemons : [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({'pokemons': users}))
  }
  
  render(){

    const { pokemons, searchField } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return(
      <div className="App">
        <h1>Pokedex</h1>
        <SearchBox placeholder="Search pokemons" handleChange={(e)=>{
          this.setState({'searchField': e.target.value})
        }}/>
        <CardList pokemons={filteredPokemons}/>
      </div>
    )
  }
}

export default App;
