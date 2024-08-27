import '../styles/experienceDialog.css'
import { useRef, useEffect } from "react"

function ExperienceDialog({
  isOpen, onClose, 
  title, onTitleChange,
  employmentType, onEmploymentTypeChange,
  companyName, onCompanyNameChange,
  startDate, onStartDateChange,
  endDate, onEndDateChange,
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
    onStartDateChange(document.getElementById('startDate').value);
    onEndDateChange(document.getElementById('endDate').value);
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
            <label htmlFor="employmentType">Employment Type</label>
            <input
              defaultValue={employmentType}
              autoComplete="off"
              type="text"
              id="employmentType"
              name="employmentType"
            />
          </div>

          <div className="experienceItem" tabIndex={0}>
            <label htmlFor="companyName">Company Name</label>
            <input
              defaultValue={companyName}
              autoComplete="off"
              type="text"
              id="companyName"
              name="emcompanyNameail"
            />
          </div>

          <div className="experienceItem" tabIndex={0}>
            <label htmlFor="startDate">Start Date</label>
            <input
              defaultValue={startDate}
              autoComplete="off"
              type="text"
              id="startDate"
              name="startDate"
            />
          </div>

          <div className="experienceItem" tabIndex={0}>
            <label htmlFor="endDate">End Date</label>
            <input
              defaultValue={endDate}
              autoComplete="off"
              type="text"
              id="endDate"
              name="endDate"
            />
          </div>

          <div className="experienceItem" tabIndex={0}>
            <label htmlFor="responsibilities">Responsibilities</label>
            <input
              defaultValue={responsibilities}
              autoComplete="off"
              type="text"
              id="responsibilities"
              name="responsibilities"
            />
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