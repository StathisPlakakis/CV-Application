import '../styles/experienceDialog.css'
import { useRef, useEffect } from "react"

function ExperienceDialog({
  isOpen, onClose, 
  title, employmentType, 
  companyName, startMonth, 
  startYear, endMonth, 
  endYear, responsibilities, 
  id,
  onSavedActive, onSavedDisactive,
  isForAddition, onExperienceItemAddition,  
  onExperienceItemEdit
}) {

  const dialogRef = useRef(null)
  const titleRef = useRef(null)
  const employmentTypeRef = useRef(null)
  const companyNameRef = useRef(null)
  const startMonthRef = useRef(null)
  const startYearRef = useRef(null)
  const endMonthRef = useRef(null)
  const endYearRef = useRef(null)
  const responsibilitiesRef = useRef(null)
  const errorRef = useRef(null)

  

  const currentYear = new Date().getFullYear();
  const startYear2 = 1965;
  let years = [];
  for (let i = currentYear; i >= startYear2; i--) {
    years.push(i);
  }

  const handleOnClose = () => {
    if (isForAddition) {
      onClose()
      errorRef.current.style.display = 'none'
      titleRef.current.value = ''
      employmentTypeRef.current.value = 'Full Time'
      companyNameRef.current.value = '' 
      startMonthRef.current.value = 'January' 
      startYearRef.current.value = '2024' 
      endMonthRef.current.value = 'January' 
      endYearRef.current.value = '2024' 
      responsibilitiesRef.current.value = ''
    }else {
      onClose()
    }
  }

  const onSave = (event) => {
    if (
      titleRef.current.value !== '' &&
      employmentTypeRef.current.value !== '' &&
      companyNameRef.current.value !== '' &&
      startMonthRef.current.value !== '' &&
      startYearRef.current.value !== '' &&
      endMonthRef.current.value !== '' &&
      endYearRef.current.value !== '' &&
      responsibilitiesRef.current.value !== '' 
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
        const sYear = startYearRef.current.value;
        let eMonth = undefined;
        const eYear = endYearRef.current.value;
    
    
        for (let i = 0; i <= 11; i++) {
          if (months[i] === startMonthRef.current.value) {
            sMonth = i + 1;
          }
        }
    
        for (let i = 0; i <= 11; i++) {
          if (months[i] === endMonthRef.current.value) {
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
          errorRef.current.style.display = 'block';
        }else {
          if (isForAddition) {
            event.preventDefault();
            onExperienceItemAddition(
              titleRef.current.value,
              employmentTypeRef.current.value,
              companyNameRef.current.value,
              startMonthRef.current.value,
              startYearRef.current.value,
              endMonthRef.current.value,
              endYearRef.current.value,
              `${yearsDiff} yr ${monthsDiff} mos`,
              responsibilitiesRef.current.value,
            );
            onSavedActive();
            setTimeout(() => onSavedDisactive(), 1500);
            handleOnClose();
          }else {
            event.preventDefault();
            errorRef.current.style.display = 'none'
            onExperienceItemEdit(id, {
              'id': `${id}`,
              'title': `${titleRef.current.value}`,
              'employmentType': `${employmentTypeRef.current.value}`,
              'companyName': `${companyNameRef.current.value}`,
              'startMonth': `${startMonthRef.current.value}`,
              'startYear': `${startYearRef.current.value}`,
              'endMonth': `${endMonthRef.current.value}`,
              'endYear': `${endYearRef.current.value}`,
              'duration': `${`${yearsDiff} yr ${monthsDiff} mos`}`,
              'responsibilities': `${responsibilitiesRef.current.value}`,
            }
            )
            onSavedActive();
            setTimeout(() => onSavedDisactive(), 1500);
          }

        }

      }

  }

  useEffect( () => {
    if(isOpen) {
      dialogRef.current.showModal();
    }else {
      dialogRef.current.close();
    }
  }, [isOpen])

  return (
    <dialog ref={dialogRef}>
      <div className='experienceDialHead'>
        <h2>Edit experience</h2>
        <button onClick={handleOnClose}></button>
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
              ref={titleRef}
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
              ref={companyNameRef}
              name="companyName"
              required
            />
          </div>

          <div className="experienceItem" tabIndex={0}>
            <label htmlFor="employmentType">Employment Type</label>
            <select 
              id='employmentType' 
              ref={employmentTypeRef}
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
                  ref={startYearRef}
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
                  ref={startMonthRef}
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
                  ref={endYearRef}
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
                  ref={endMonthRef}
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
              ref={responsibilitiesRef}
              name="responsibilities"
              defaultValue={responsibilities}
              autoComplete="off"
              required
            >
            </textarea>
          </div>

        </div>

        <div className="save">
          <h2 
          ref={errorRef}
            className='error'
            style={
              {
                color: 'red',
                display: 'none'
              }
            }
          >
            The duration of your working experience is invalid
          </h2>
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