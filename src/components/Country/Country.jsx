import { useState } from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    // console.log(country);
     const {name,flags,population,area,cca3} =country;

     const [visited,setVisited] = useState(false);

     const handleVisited = () =>{
            setVisited(!visited);

            console.log(handleVisitedCountry);
     }
    return (

        // style by template as background.
        <div className={`country ${visited && 'visited'}`}>

            {/* conditional style on h3 by ternary */}
            <h3 style={{color: visited ? 'limegreen' : 'white'}}>Name: {name?.common} </h3>
            <img src={flags?.png} alt="" />
            <p className='contents'>Area: {area} </p>
            <p className='contents'>Population: {population} </p>
            <p className='contents'><small>Country-Code: {cca3} </small> </p>
            <button onClick={()=>handleVisitedCountry(country)}   className='btn' style={{backgroundColor:'#509E2F'}} >Show Visited</button>
            <br/>
            <button onClick={()=>handleVisitedFlags(country?.flags?.png)}  className='btn' style={{backgroundColor:'#509E2F'}} >Visited Flag</button>
            <br/>
            <button onClick={handleVisited} className='btn' style={{backgroundColor:'#012169'}}>{visited ? 'Visited' : 'Going'}</button>
            <p className='text'>
            {visited ? 'I have visited this country.' : 'I want to visit'}</p>
        </div>
    );
};

export default Country;