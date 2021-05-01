import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img alt="pokemons" src={`https://robohash.org/${props.pokemon.id}?set=set2&size=180x180`}/>
        <h1 key={props.pokemon.id}>{props.pokemon.name}</h1>
    </div>
)