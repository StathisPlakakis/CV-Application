import '../styles/experienceDialog.css'
import { useRef, useEffect } from "react"

function ExperienceDialog({
  isOpen, onClose, 
  title, onTitleChange,
  employmentType, onEmploymentTypeChange,
  companyName, onCompanyNameChange,
  startMonth, onStartMonthChange,
  startYear, onStartYearChange,
  endMonth, onEndMonthChange,
  endYear, onEndYearChange,
  duration, onDurationChange,
  responsibilities, onResponsibilitiesChange,
  onSavedActive, onSavedDisactive
  
}) {

  const dialogRef = useRef(null)

  const onSave = (event) => {
    event.preventDefault();
    onTitleChange(document.getElementById('title').value);
    onEmploymentTypeChange(document.getElementById('employmentType').value);
    onCompanyNameChange(document.getElementById('companyName').value);
    onStartMonthChange(document.getElementById('startMonth').value);
    onStartYearChange(document.getElementById('startYear').value);
    onEndMonthChange(document.getElementById('endMonth').value);
    onEndYearChange(document.getElementById('endYear').value);
    onResponsibilitiesChange(document.getElementById('responsibilities').value)
    onSavedActive();
    setTimeout(() => onSavedDisactive(), 1500);
  }

  useEffect( () => {
    if(isOpen) {
      dialogRef.current.showModal();
    }else {
      dialogRef.current.close();
    }
  })

  return (
    <dialog ref={dialogRef}>
      <div className='experienceDialHead'>
        <h2>Edit experience</h2>
        <button onClick={onClose}></button>
      </div>
      <form className="experienceForm">
        <div className="experienceItems">

          <div className="experienceItem" tabIndex={0}>
            <label htmlFor="title">Title</label>
            <input
              defaultValue={title}
              autoComplete="off"
              type="text"
              id="title"
              name="title"
            />
          </div>

          <div className="experienceItem" tabIndex={0}>
            <label htmlFor="companyName">Company Name</label>
            <input
              defaultValue={companyName}
              autoComplete="off"
              type="text"
              id="companyName"
              name="companyName"
            />
          </div>

          <div className="experienceItem" tabIndex={0}>
            <label htmlFor="employmentType">Employment Type</label>
            <select 
              id='employmentType' 
              name='employmentType'
              defaultValue={employmentType}
              autoComplete="off"
            >
              <option value='Full Time'>Full Time</option>
              <option value='Part Time'>Part Time</option>
            </select>
          </div>

          <div className="experienceItem date" tabIndex={0}>
            <p>From</p>
            <div className='start'>

            <div className='startYear'>
                <label htmlFor="startYear">Year</label>
                <select 
                  id='startYear' 
                  name='startYear'
                  defaultValue={startYear}
                  autoComplete="off"
                >
                  <option value='Full Time'>Full Time</option>
                  <option value='Part Time'>Part Time</option>
                </select>
              </div>

              <div className='startMonth'>
                <label htmlFor="startMonth">Month</label>
                <select 
                  id='startMonth' 
                  name='startMonth'
                  defaultValue={startMonth}
                  autoComplete="off"
                >
                  <option value='Full Time'>Full Time</option>
                  <option value='Part Time'>Part Time</option>
                </select>
              </div>
              
            </div>
          </div>

          <div className="experienceItem date" tabIndex={0}>
            <p>To</p>
            <div className='end'>

            <div className='endYear'>
                <label htmlFor="endYear">Year</label>
                <select 
                  id='endYear' 
                  name='endYear'
                  defaultValue={endYear}
                  autoComplete="off"
                >
                  <option value='Full Time'>Full Time</option>
                  <option value='Part Time'>Part Time</option>
                </select>
              </div>

              <div className='endMonth'>
                <label htmlFor="endMonth">Month</label>
                <select 
                  id='endMonth' 
                  name='endMonth'
                  defaultValue={endMonth}
                  autoComplete="off"
                >
                  <option value='Full Time'>Full Time</option>
                  <option value='Part Time'>Part Time</option>
                </select>
              </div>
              
            </div>
          </div>

          <div className="experienceItem" tabIndex={0}>
            <label htmlFor="responsibilities">Responsibilities</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              defaultValue={responsibilities}
              autoComplete="off"
            >
            </textarea>
          </div>

        </div>

        <div className="save">
          <button 
            type="submit"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </form>
    </dialog>
  )
}

export default ExperienceDialog