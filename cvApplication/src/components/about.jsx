import '../styles/about.css'
import { useState } from 'react'
import AboutDialog from './aboutDialog'


function About() {

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [about, setAbout] = useState(localStorage.getItem('about'))

  const handleClickForAboutEdit = () =>{
    setIsDialogOpen(true)
  };

  return (
    <section className="about">
      <div className="aboutHead">
        <h2>About</h2>
        <button 
          className="editAbout"
          onClick={handleClickForAboutEdit}
        >
        </button>
      </div>
      <div className='aboutDetails'>
        {about ? <p>{about}</p> : '-'}
      </div>
      <AboutDialog
        isDialogOpen={isDialogOpen}
      />
    </section>
  )
}

export default About