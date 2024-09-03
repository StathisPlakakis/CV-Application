import ExperienceDialog from './experienceDialog'
import ExperienceDialogDelete from './experienceDialogDelete';
import '../styles/experience.css'
import { useState } from 'react';

function ExperienceItem({
  title, employmentType,
  companyName, startMonth,
  startYear, endMonth,
  endYear, duration,
  responsibilities,id,
  onExperienceItemChange,
  onSavedActive, onSavedDisactive,
  onExperienceItemDelete
}) {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);


  const handleClickForExperienceEdit = () => {
    setIsDialogOpen(true);
  }

  const handleClickForCloseExperienceEdit = () => {
    setIsDialogOpen(false);
  }

  const handleClickForExperienceDelete = () => {
    setIsDeleteDialogOpen(true);
  }

  const handleClickForCloseExperienceDelete = () => {
    setIsDeleteDialogOpen(false);
  }

  const handleExperienceItemChange = (id, editedExperienceItem) => {
    onExperienceItemChange(id, editedExperienceItem);
  };

  return (
    <>
      <div className='experienceDetails'>
          <div className='experienceDeatailsHead'>
            <div className='buttons'>
              <button
                className="deleteExperience"
                onClick={handleClickForExperienceDelete}
              >
              </button>
              <button
                className="editExperience"
                onClick={handleClickForExperienceEdit}
              >
              </button>
            </div>
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
      <ExperienceDialogDelete
        isDeleteDialogOpen={isDeleteDialogOpen}
        onClose={handleClickForCloseExperienceDelete}
        onDelete={onExperienceItemDelete}
        id={id}
      />
    </>
    
  )
}

export default ExperienceItem;