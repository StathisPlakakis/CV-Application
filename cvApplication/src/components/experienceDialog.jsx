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
  onDurationChange,
  responsibilities, onResponsibilitiesChange,
  onSavedActive, onSavedDisactive
  
}) {

  const dialogRef = useRef(null)

  const currentYear = new Date().getFullYear();
  const startYear2 = 1965;
  let years = [];
  for (let i = currentYear; i >= startYear2; i--) {
    years.push(i);
  }

  const onSave = (event) => {
    if (
      document.getElementById('title').value !== '' &&
      document.getElementById('employmentType').value !== '' &&
      document.getElementById('companyName').value !== '' &&
      document.getElementById('startMonth').value !== '' &&
      document.getElementById('startYear').value !== '' &&
      document.getElementById('endMonth').value !== '' &&
      document.getElementById('endYear').value !== '' &&
      document.getElementById('responsibilities').value !== ''
    ) {

        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]
    
        let sMonth = undefined;
        const sYear = document.getElementById('startYear').value;
        let eMonth = undefined;
        const eYear = document.getElementById('endYear').value;
    
    
        for (let i = 0; i <= 11; i++) {
          if (months[i] === document.getElementById('startMonth').value) {
            sMonth = i + 1;
          }
        }
    
        for (let i = 0; i <= 11; i++) {
          if (months[i] === document.getElementById('endMonth').value) {
            eMonth = i + 1;
          }
        }
    
        let yearsDiff = eYear - sYear;
        let monthsDiff = eMonth - sMonth;
    
        if (monthsDiff < 0) {
          yearsDiff -= 1;
          monthsDiff += 12;
        }

        if ( 
          yearsDiff < 0 ||
          yearsDiff === 0 && monthsDiff === 0
          ) {
          event.preventDefault();
          console.log('eeeeeeeeee')
        }else {
    
          event.preventDefault();
          onTitleChange(document.getElementById('title').value);
          onEmploymentTypeChange(document.getElementById('employmentType').value);
          onCompanyNameChange(document.getElementById('companyName').value);
      
          onStartMonthChange(document.getElementById('startMonth').value);
          onStartYearChange(document.getElementById('startYear').value);
          onEndMonthChange(document.getElementById('endMonth').value);
          onEndYearChange(document.getElementById('endYear').value);
      
          onDurationChange(`${yearsDiff} yr ${monthsDiff} mos`)
      
          onResponsibilitiesChange(document.getElementById('responsibilities').value)
          onSavedActive();
          setTimeout(() => onSavedDisactive(), 1500);
        }

      }

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
              required
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
              required
            />
          </div>

          <div className="experienceItem" tabIndex={0}>
            <label htmlFor="employmentType">Employment Type</label>
            <select 
              id='employmentType' 
              name='employmentType'
              defaultValue={employmentType}
              autoComplete="off"
              required
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
                  required

                >
                  {
                    years.map(year => (
                      <option
                        key={year}
                        value={year}
                      >
                        {year}
                      </option>
                    ))
                  }
                </select>
              </div>

              <div className='startMonth'>
                <label htmlFor="startMonth">Month</label>
                <select 
                  id='startMonth' 
                  name='startMonth'
                  defaultValue={startMonth}
                  autoComplete="off"
                  required

                >
                  <option value='January'>January</option>
                  <option value='February'>February</option>
                  <option value='March'>March</option>
                  <option value='April'>April</option>
                  <option value='May'>May</option>
                  <option value='June'>June</option>
                  <option value='July'>July</option>
                  <option value='August'>August</option>
                  <option value='September'>September</option>
                  <option value='October'>October</option>
                  <option value='November'>November</option>
                  <option value='December'>December</option>
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
                  required

                >
                  {
                    years.map(year => (
                      <option
                        key={year}
                        value={year}
                      >
                        {year}
                      </option>
                    ))
                  }
                </select>
              </div>

              <div className='endMonth'>
                <label htmlFor="endMonth">Month</label>
                <select 
                  id='endMonth' 
                  name='endMonth'
                  defaultValue={endMonth}
                  autoComplete="off"
                  required

                >
                  <option value='January'>January</option>
                  <option value='February'>February</option>
                  <option value='March'>March</option>
                  <option value='April'>April</option>
                  <option value='May'>May</option>
                  <option value='June'>June</option>
                  <option value='July'>July</option>
                  <option value='August'>August</option>
                  <option value='September'>September</option>
                  <option value='October'>October</option>
                  <option value='November'>November</option>
                  <option value='December'>December</option>
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
              required

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