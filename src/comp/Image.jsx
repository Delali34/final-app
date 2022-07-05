
import React from 'react';

import './myStyles.css';

export function Image(props) {
      return (
        <div>
      <img src={props.src} alt={props.alt} width={'100%'} height={'300vh'}/>    
      
        </div>
      );
    }
    
  
//   export default WelcomeComponents;

// import React from 'react';
// import './myStyles.css';
// export const Image=()=> {
//     <img src='props.src' className='image'/>
// }