import React from 'react'
import './personelinfo.css'

export default function PersonelInfo() {
  return (
    <>
        <label for="name" id="name-label">
          Name
        </label>
        <input id="name" type="text" required placeholder="Enter you name"/>
        <label for="email" id="email-label">
          Email
        </label>
        <input id="email" type="email" required placeholder="Enter your Email"/>
        <label for="number" id="number-label">
          Age (optional)
        </label>
        <input id="number" type="number" min="0" max="1000" placeholder="Age"/>
    </>
  )
}
