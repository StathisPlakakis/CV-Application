import '../styles/experience.css'
import { useState } from 'react'
import ExperienceDialog from './experienceDialog'
import ExperienceItem from './experienceItem'

function Experience({onSavedActive, onSavedDisactive}) {

  return (
    <section className="experience">
      <div className="experienceHead">
        <h2>Experience</h2>
      </div>
      <ExperienceItem
        onSavedActive={onSavedActive}
        onSavedDisactive={onSavedDisactive}
      />
    </section>

  )
}

export default Experience