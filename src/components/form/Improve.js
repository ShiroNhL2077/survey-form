import React from 'react'
import './improve.css'

export default function Improve() {
  return (
    <div className='check-grp'>
        <p className='lbl'>
          What would you like to see improved? (Check all that apply)
        </p>
        <label>
          <input type="checkbox"
            value="Front-end Projects" 
            id="Front-end Projects"/>
          Front-end Projects
        </label>
        <label>
          <input type="checkbox"
            value="Back-end Projects" 
            id="Back-end Projects"/>
          Back-end Projects
        </label>
        <label>
          <input type="checkbox"
            value="Data Visualization" 
            id="Data Visualization"/>
          Data Visualization
        </label>
        <label>
          <input type="checkbox"
            value="Challenges" 
            id="Challenges"/>
          Challenges
        </label>
        <label>
          <input type="checkbox"
            value="Open Source Community" 
            id="Open Source Community"/>
          Open Source Community
        </label>
        <label>
          <input type="checkbox"
            value="Gitter help rooms" 
            id="Gitter help rooms"/>
          Gitter help rooms
        </label>
        <label>
          <input type="checkbox"
            value="Videos" 
            id="Videos"/>
          Videos
        </label>
        <label>
          <input type="checkbox"
            value="City Meetups" 
            id="City Meetups"/>
          City Meetups
        </label>
        <label>
          <input type="checkbox"
            value="Wiki" 
            id="Wiki"/>
          Wiki
        </label>
        <label>
          <input type="checkbox"
            value="Forum" 
            id="Forum"/>
          Forum
        </label>
        <label>
          <input type="checkbox"
            value="Additional Courses" 
            id="Additional Courses"/>
          Additional Courses
        </label>
    </div>
  )
}
