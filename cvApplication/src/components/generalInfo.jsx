import '../styles/generalInfo.css'
import InfoDialog from './generalInfoDialog'
import { useState } from 'react'

function Info() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClickForGeneralInfoEdit = () => {
    setIsDialogOpen(true);
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
      />
    </section>
  )
}

export default Info