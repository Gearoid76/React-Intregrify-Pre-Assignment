import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = props => (

    <ul className='card-container'>
        {props.items.map(item => (
              <Card name={item.name} email={item.email} website={item.website} key={item.id} />
            ))}
    </ul>

)

export default CardList;