import '../styles/experience.css'
import { useState } from 'react'
import ExperienceDialog from './experienceDialog'

function Experience({onSavedActive, onSavedDisactive}) {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState(localStorage.getItem('title'));
  const [employmentType, setEmploymentType] = useState(localStorage.getItem('employmentType'));
  const [companyName, setCompanyName] = useState(localStorage.getItem('companyName'));
  const [startDate, setStartDate] = useState(localStorage.getItem('startDate'));
  const [endDate, setEndDate] = useState(localStorage.getItem('endDate'));
  const [duration, setDuration] = useState(localStorage.getItem('duration'));
  const [responsibilities, setResponsibilities] = useState(localStorage.getItem('responsibilities'));

  const handleClickForExperienceEdit = () => {
    setIsDialogOpen(true);
  }

  const handleClickForCloseExperienceEdit = () => {
    setIsDialogOpen(false);
  }

  const handleTitleChange = (value) => {
    setTitle(value);
    localStorage.setItem('title', value)
  }

  const handleEmploymentTypeChange = (value) => {
    setEmploymentType(value);
    localStorage.setItem('employmentType', value)
  }

  const handleCompanyNameChange = (value) => {
    setCompanyName(value);
    localStorage.setItem('companyName', value)
  }

  const handleDurationChange = (value) => {
    setDuration(value);
    localStorage.setItem('duration', value)
  }

  const handleStartDateChange = (value) => {
    setStartDate(value);
    localStorage.setItem('startDate', value)
  }

  const handleEndDateChange = (value) => {
    setEndDate(value);
    localStorage.setItem('endDate', value)
  }

  const handleResponsibilitiesChange = (value) => {
    setResponsibilities(value);
    localStorage.setItem('responsibilities', value)
  }

  return (
    <section className="experience">
      <div className="experienceHead">
        <h2>Experience</h2>
        <button 
          className="editExperience"
          onClick={handleClickForExperienceEdit}
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
      <ExperienceDialog
        isOpen={isDialogOpen}
        onClose={handleClickForCloseExperienceEdit}
        title={title}
        onTitleChange={handleTitleChange}
        employmentType={employmentType}
        onEmploymentTypeChange={handleEmploymentTypeChange}
        companyName={companyName}
        onCompanyNameChange={handleCompanyNameChange}
        startDate={startDate}
        onStartDateChange={handleStartDateChange}
        endDate={endDate}
        onEndDateChange={handleEndDateChange}
        duration={duration}
        onDurationChange={handleDurationChange}
        responsibilities={responsibilities}
        onResponsibilitiesChange={handleResponsibilitiesChange}
        onSavedActive={onSavedActive}
        onSavedDisactive={onSavedDisactive}
      />
    </section>

  )
}

export default Experience