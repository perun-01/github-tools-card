import React from 'react';

import './footer.styles.scss';

export const Footer = ({name}) => (
    <div className='footer'>
        <p>Designed with <span className='heart'>&hearts; </span>by {name}</p>
    </div>
)