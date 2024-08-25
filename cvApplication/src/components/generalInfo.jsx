import '../styles/generalInfo.css'
import InfoDialog from './generalInfoDialog'
import { useState } from 'react'

function Info() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClickForGeneralInfoEdit = () => {
    setIsDialogOpen(true);
  }

  const handleClickForCloseGeneralInfoEdit = () => {
    setIsDialogOpen(false);
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
      <InfoDialog 
        isOpen={isDialogOpen}
        onClose={handleClickForCloseGeneralInfoEdit}
      />
    </section>
  )
}

export default Info