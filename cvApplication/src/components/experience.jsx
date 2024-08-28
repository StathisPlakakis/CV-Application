import '../styles/experience.css'
import { useState } from 'react'
import ExperienceDialog from './experienceDialog'

function Experience({onSavedActive, onSavedDisactive}) {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState(localStorage.getItem('title'));
  const [employmentType, setEmploymentType] = useState(localStorage.getItem('employmentType'));
  const [companyName, setCompanyName] = useState(localStorage.getItem('companyName'));
  const [startMonth, setStartMonth] = useState(localStorage.getItem('startMonth'));
  const [startYear, setStartYear] = useState(localStorage.getItem('startYear'));
  const [endMonth, setEndMonth] = useState(localStorage.getItem('endMonth'));
  const [endYear, setEndYear] = useState(localStorage.getItem('endYear'));
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

  const handleStartMonthChange = (value) => {
    setStartMonth(value);
    localStorage.setItem('startMonth', value)
  }

  const handleStartYearChange = (value) => {
    setStartYear(value);
    localStorage.setItem('startYear', value)
  }

  const handleEndMonthChange = (value) => {
    setEndMonth(value);
    localStorage.setItem('endMonth', value)
  }

  const handleEndYearChange = (value) => {
    setEndYear(value);
    localStorage.setItem('endYear', value)
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
            {title}
          </h2>
          <h3>
            {'@ ' + companyName + ' (' + employmentType + ')'}
          </h3>
          <h3>
            {startMonth + ' ' + startYear + ' - ' + endMonth + ' ' + endYear + ' (' + duration + ')' }
          </h3>
          <p>
            {responsibilities}
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
        startMonth={startMonth}
        onStartMonthChange={handleStartMonthChange}
        startYear={startYear}
        onStartYearChange={handleStartYearChange}
        endMonth={endMonth}
        onEndMonthChange={handleEndMonthChange}
        endYear={endYear}
        onEndYearChange={handleEndYearChange}
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