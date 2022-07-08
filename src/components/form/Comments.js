import React from 'react'
import './comments.css'

export default function Comments() {
  return (
    <div className='comments'>
        <label for="comments">
          Any comments or suggestions?
        </label>
        <textarea id="comments" placeholder="Your comments or suggestions"></textarea>
    </div>
  )
}
