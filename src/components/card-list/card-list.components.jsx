import React from 'react'
import './card-list.styles.css'
import {Card} from '../card/card.components'

export const CardList = (props) => (
    <div className="card-list">
        {props.pokemons.map((p,i)=>(
            <Card key={i+1} pokemon={p}/>
        ))}
    </div>
)