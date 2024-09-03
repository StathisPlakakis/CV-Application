import '../styles/educationDialog.css'
import { useRef, useEffect } from "react"

function EducationDialog({
  isOpen, onClose, 
  school, degree, 
  field, startMonth, 
  startYear, endMonth, 
  endYear, id,
  onSavedActive, onSavedDisactive,
  isForAddition, onEducationItemAddition,  
  onEducationItemEdit
}) {

  const dialogRef = useRef(null)
  const schoolRef = useRef(null)
  const degreeRef = useRef(null)
  const fieldRef = useRef(null)
  const startMonthRef = useRef(null)
  const startYearRef = useRef(null)
  const endMonthRef = useRef(null)
  const endYearRef = useRef(null)
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
      schoolRef.current.value = ''
      degree.current.value = ''
      field.current.value = '' 
      startMonthRef.current.value = 'January' 
      startYearRef.current.value = '2024' 
      endMonthRef.current.value = 'January' 
      endYearRef.current.value = '2034' 
    }else {
      onClose()
    }
  }

  const onSave = (event) => {
    if (
      schoolRef.current.value !== '' &&
      degreeRef.current.value !== '' &&
      fieldRef.current.value !== '' &&
      startMonthRef.current.value !== '' &&
      startYearRef.current.value !== '' &&
      endMonthRef.current.value !== '' &&
      endYearRef.current.value !== ''
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
            onEducationItemAddition(
              schoolRef.current.value,
              degreeRef.current.value,
              fieldRef.current.value,
              startMonthRef.current.value,
              startYearRef.current.value,
              endMonthRef.current.value,
              endYearRef.current.value,
            );
            onSavedActive();
            setTimeout(() => onSavedDisactive(), 1500);
            handleOnClose();
          }else {
            event.preventDefault();
            errorRef.current.style.display = 'none'
            onEducationItemEdit(id, {
              'id': `${id}`,
              'school': `${schoolRef.current.value}`,
              'degree': `${degree.current.value}`,
              'field': `${fieldRef.current.value}`,
              'startMonth': `${startMonthRef.current.value}`,
              'startYear': `${startYearRef.current.value}`,
              'endMonth': `${endMonthRef.current.value}`,
              'endYear': `${endYearRef.current.value}`,
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
      <div className='educationDialHead'>
        <h2>Edit education</h2>
        <button onClick={handleOnClose}></button>
      </div>
      <form className="educationForm">
        <div className="educationItems">

          <div className="educationItem" tabIndex={0}>
            <label htmlFor="school">School</label>
            <input
              defaultValue={school}
              autoComplete="off"
              type="text"
              id="title"
              ref={schoolRef}
              name="school"
              required
            />
          </div>

          <div className="educationItem" tabIndex={0}>
            <label htmlFor="degree">Degree</label>
            <input
              defaultValue={degree}
              autoComplete="off"
              type="text"
              id="degree"
              ref={degreeRef}
              name="degree"
              required
            />
          </div>

          <div className="educationItem" tabIndex={0}>
            <label htmlFor="field">Field of study</label>
            <input 
              id='field' 
              ref={fieldRef}
              name='field'
              defaultValue={field}
              autoComplete="off"
              required
            />
          </div>

          <div className="educationItem date" tabIndex={0}>
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

          <div className="educationItem date" tabIndex={0}>
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
                        key={year+10}
                        value={year+10}
                      >
                        {year+10}
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
            The duration of your studies is invalid
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

export default EducationDialog;