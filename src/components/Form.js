import React from 'react'
import PersonelInfo from './form/PersonelInfo'
import './form.css'
import Role from './form/Role'
import Recommend from './form/Recommend'
import FavFeature from './form/FavFeature'
import Improve from './form/Improve'
import Comments from './form/Comments'
import Button from './form/Button'

export default function Form() {
  return (
    <form id="survey-form">
        <PersonelInfo />
        <Role />
        <Recommend />
        <FavFeature />
        <Improve />
        <Comments />
        <Button />
    </form>
  )
}
