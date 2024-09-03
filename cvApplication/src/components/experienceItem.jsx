import ExperienceDialog from './experienceDialog'
import '../styles/experience.css'
import { useState } from 'react';

function ExperienceItem({
  title, employmentType,
  companyName, startMonth,
  startYear, endMonth,
  endYear, duration,
  responsibilities,id,
  onExperienceItemChange,
  onSavedActive, onSavedDisactive
}) {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClickForExperienceEdit = () => {
    setIsDialogOpen(true);
  }

  const handleClickForCloseExperienceEdit = () => {
    setIsDialogOpen(false);
  }

  const handleExperienceItemChange = (id, editedExperienceItem) => {
    onExperienceItemChange(id, editedExperienceItem);
  };

  return (
    <>
      <div className='experienceDetails'>
          <div className='experienceDeatailsHead'>
            <button 
              className="editExperience"
              onClick={handleClickForExperienceEdit}
            >
            </button>
            <h2>
              {title}
            </h2>
          </div>
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
        employmentType={employmentType}
        companyName={companyName}
        startMonth={startMonth}
        startYear={startYear}
        endMonth={endMonth}
        endYear={endYear}
        responsibilities={responsibilities}
        onSavedActive={onSavedActive}
        onSavedDisactive={onSavedDisactive}
        isForAddition={false}
        id={id}
        onExperienceItemEdit={handleExperienceItemChange}
      />
    </>
    
  )
}

export default ExperienceItem;