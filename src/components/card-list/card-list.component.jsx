import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.scss';


export const CardList = (props) => (
    <div className='card-list'>
      {props.tools.map(({id, ...otherToolsProps}) => (
            <Card key={id} {...otherToolsProps}/>
                ))}
    </div>
)
