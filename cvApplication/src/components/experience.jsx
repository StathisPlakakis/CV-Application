import '../styles/experience.css'
import { useState } from 'react'


function Experience() {

  const [title, setTitle] = useState(localStorage.getItem('title'));
  const [employmentType, setEmploymentType] = useState(localStorage.getItem('employmentType'));
  const [companyName, setCompanyName] = useState(localStorage.getItem('companyName'));
  const [startDate, setStartDate] = useState(localStorage.getItem('startDate'));
  const [endDate, setEndDate] = useState(localStorage.getItem('endDate'));
  const [duration, setDuration] = useState(localStorage.getItem('duration'));
  const [responsibilities, setResponsibilities] = useState(localStorage.getItem('responsibilities'));

  return (
    <section className="experience">
      <div className="experienceHead">
        <h2>Experience</h2>
        <button 
          className="editExperience"
        >
        </button>
      </div>
      <div className='experienceDetails'>
          <h2>
            {title ? title : null}
          </h2>
          <h3>
            {companyName ? companyName : null} {employmentType ? ' ( '+ employmentType + ' )' : null}
          </h3>
          <h3>
            { startDate ? 
              startDate + ' - ' + endDate + ' ( ' + duration + ' )' : 
              null }
          </h3>
          <p>
            {responsibilities ? responsibilities : null}
          </p>
      </div>
    </section>

  )
}

export default Experience