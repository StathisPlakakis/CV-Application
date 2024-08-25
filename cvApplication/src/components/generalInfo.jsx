import '../styles/generalInfo.css'
import InfoDialog from './generalInfoDialog'
import { useState } from 'react'

function Info() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [firstName, setFirstName] = useState('');

  const handleClickForGeneralInfoEdit = () => {
    setIsDialogOpen(true);
  }

  const handleClickForCloseGeneralInfoEdit = () => {
    setIsDialogOpen(false);
  }

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  }

  return (
    <section className="info">
      <div className="infoHead">
        <h2>Info</h2>
        <button 
          className="editInfo"
          onClick={handleClickForGeneralInfoEdit}
        >
        </button>
      </div>
      <div className='infoDetails'>

      </div>
      <InfoDialog 
        isOpen={isDialogOpen}
        onClose={handleClickForCloseGeneralInfoEdit}
        firstName={firstName}
        onFirstNameChange={handleFirstNameChange}
      />
    </section>
  )
}

export default Info