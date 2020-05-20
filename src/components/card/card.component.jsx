import React from 'react';
import './card.styles.scss';


export const Card = ({about, offer, name, id, connect, support}) =>(
            <div key={id} className='card-container'>
                   <center><img className='image' src={`${process.env.PUBLIC_URL}/assets/${name}.png`} alt={name} /></center>  
                   <p className='about'>{about}</p>
                   <p className='offer'><span className='details-span'>Details</span>&nbsp;{offer}</p> 
                   <p className='access'>Get access by connecting your GitHub account on <a href={connect}>{name}</a> </p>
                   <p className='support'>Help available at <a href={support}>{name} support</a></p>
            </div>

)
