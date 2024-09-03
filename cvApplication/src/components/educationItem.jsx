import EducationDialog from './educationDialog'
import EducationDialogDelete from './educationDialogDelete';
import '../styles/educationItem.css'
import { useState } from 'react';

function EducationItem({
  school, degree,
  field, startMonth,
  startYear, endMonth,
  endYear, id,
  onSavedActive, onSavedDisactive,
  onEducationItemChange, onEducationItemDelete
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);


  const handleClickForEducationEdit = () => {
    setIsDialogOpen(true);
  }

  const handleClickForCloseEducationEdit = () => {
    setIsDialogOpen(false);
  }

  const handleClickForEducationDelete = () => {
    setIsDeleteDialogOpen(true);
  }

  const handleClickForCloseEducationDelete = () => {
    setIsDeleteDialogOpen(false);
  }

  const handleEducationItemChange = (id, editedEducationItem) => {
    onEducationItemChange(id, editedEducationItem);
  };

  return (
    <>
      <div className='educationDetails'>
          <div className='educationDeatailsHead'>
            <div className='buttons'>
              <button
                className="deleteEducation"
                onClick={handleClickForEducationDelete}
              >
              </button>
              <button
                className="editEducation"
                onClick={handleClickForEducationEdit}
              >
              </button>
            </div>
            <h2>
              {school}
            </h2>
          </div>
          <h3>
            {degree + ' ,' + field}
          </h3>
          <h3>
            {startMonth + ' ' + startYear + ' - ' + endMonth + ' ' + endYear}
          </h3>
      </div>
      <EducationDialog
        isOpen={isDialogOpen}
        onClose={handleClickForCloseEducationEdit}
        school={school}
        degree={degree}
        field={field}
        startMonth={startMonth}
        startYear={startYear}
        endMonth={endMonth}
        endYear={endYear}
        onSavedActive={onSavedActive}
        onSavedDisactive={onSavedDisactive}
        isForAddition={false}
        id={id}
        onEducationItemEdit={handleEducationItemChange}
      />
      <EducationDialogDelete
        isDeleteDialogOpen={isDeleteDialogOpen}
        onClose={handleClickForCloseEducationDelete}
        onDelete={onEducationItemDelete}
        id={id}
      />
    </>
    
  )
}

export default EducationItem;