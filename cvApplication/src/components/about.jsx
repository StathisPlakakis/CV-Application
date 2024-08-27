import '../styles/about.css'
import { useState } from 'react'
import AboutDialog from './aboutDialog'


function About({onSavedActive, onSavedDisactive}) {

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [about, setAbout] = useState(localStorage.getItem('about'))

  const handleClickForAboutEdit = () =>{
    setIsDialogOpen(true)
  };

  const handleClickForCloseAboutEdit = () => {
    setIsDialogOpen(false);
  }

  const handleAboutChange = (value) => {
    setAbout(value);
    localStorage.setItem('about', value)
  }

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
        onClose={handleClickForCloseAboutEdit}
        onSavedActive={onSavedActive}
        onSavedDisactive={onSavedDisactive}
        about={about}
        onAboutChange={handleAboutChange}
      />
    </section>
  )
}

export default About