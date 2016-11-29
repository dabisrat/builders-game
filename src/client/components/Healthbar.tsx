import * as React from 'react';

export default ({health}) => (
  <div className='healthBar'>
    <div className='health healthLeft' style={{'width': health +'%'}}>
    </div>
    <div className='health healthLost' style={{'width': 100 - health +'%'}}></div>
  </div>
);