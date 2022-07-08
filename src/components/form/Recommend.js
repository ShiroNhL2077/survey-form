import React from 'react'
import './recommend.css'

export default function Recommend() {
  return (
    <div className='radio-group'>
        <p>
          Would you recommend freeCodeCamp to a friend?
        </p>
        <label className='rad'><input type="radio" name="recommend" value="definitly" id="definitly"/><sapn>Definitly</sapn></label> 
        <label className='rad'><input type="radio" name="recommend" value="maybe" id="maybe"/><sapn>Maybe</sapn></label> 
        <label className='rad'><input type="radio" name="recommend" value="not sure" id="notsure"/><sapn>Not sure</sapn></label>
    </div>
  )
}   
