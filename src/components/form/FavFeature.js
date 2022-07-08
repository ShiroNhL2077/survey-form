import React from 'react'
import './favfeature.css'

export default function FavFeature() {
  return (
    <>
        <label for="dropdown-2" id="dropdown-label">
            What is your favorite feature of freeCodeCamp?
        </label>
        <select id="dropdown-2">
          <option value="Select an option" selected>
            Select an option
          </option>
          <option value="Challenges">
            Challenges
          </option>
          <option value="Projects">
            Projects
          </option>
          <option value="Community">
            Community
          </option>
          <option value="Open Source">
            Open Source
          </option>
        </select>
    </>
  )
}
