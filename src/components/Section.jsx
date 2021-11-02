import React, {useContext} from 'react'
import MyContext from '../context/MyContext'

const Section = () => {

    const shop = useContext(MyContext)
    const {select ,joke, getJoke} = shop

    return (
        <div className="section">
           <h2>{joke}</h2> 
           {select && <button onClick={getJoke}>Next Joke</button>}
        </div>
    )
}

export default Section
