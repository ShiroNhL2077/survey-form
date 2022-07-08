import React from 'react'
import './role.css'

export default function Role() {
  return (
    <>
        <label for="dropdown" id="dropdown-label">
          Which option best describes your current role?
        </label>
        <select id="dropdown">
          <option value="Select current role">
            Select current role
          </option>
          <option value="Student">
            Student
          </option>
          <option value="Full Time job">
            Full Time job
          </option>
          <option value="Full Time Learner">
            Full Time Learner
          </option>
          <option value="Prefer Not To Say">
            Prefer Not To Say
          </option>
          <option value="Other">
            Other
          </option>
        </select>
    </>
  )
}
