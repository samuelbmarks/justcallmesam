import React from 'react'

const Colors = () => {    
    return (
        async function analyze(hexCode: string) {
            'use server'

            const response = await fetch(`https://www.thecolorapi.com/id?hex=${hexCode}`, {
                method: 'GET'
              });
              
              const result = await response.json();
              
              return result;
        }
    );
};

export default Colors;
