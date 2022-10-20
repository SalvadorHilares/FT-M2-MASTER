import React from 'react';
import Card from './Card';

export default function Cards({cities}) {
  // acá va tu código
  return <div>
    {
        cities.map(city => {
          return (<Card 
            max={city.main.temp_max} 
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
            key={city.id}
          /> 
        )
    })}
  </div>
};