import '../styles/about.css'
import { useState } from 'react'


function About() {

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [about, setAbout] = useState(localStorage.getItem('about'))

  return (
    <section className="about">
      <div className="aboutHead">
        <h2>About</h2>
        <button 
          className="editAbout"
        >
        </button>
      </div>
      <div className='aboutDetails'>
        {about ? <p>{about}</p> : '-'}
      </div>
    </section>
  )
}

export default About