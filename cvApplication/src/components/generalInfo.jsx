import '../styles/generalInfo.css'
import InfoDialog from './generalInfoDialog'
import { useState } from 'react'

function Info() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [laststName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');




  const handleClickForGeneralInfoEdit = () => {
    setIsDialogOpen(true);
  }

  const handleClickForCloseGeneralInfoEdit = () => {
    setIsDialogOpen(false);
  }

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  }

  const handleLastNameChange = (value) => {
    setLastName(value);
  }

  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
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
        <div className='fullName'>
          <h1>
            {firstName !== '' ? firstName : '-'} {firstName !== '' ? firstName : '-'}
          </h1>
        </div>
      </div>
      <InfoDialog 
        isOpen={isDialogOpen}
        onClose={handleClickForCloseGeneralInfoEdit}
        firstName={firstName}
        onFirstNameChange={handleFirstNameChange}
        laststName={laststName}
        onLastNameChange={handleLastNameChange}
        email={email}
        onEmailChange={handleEmailChange}
        phoneNumber={phoneNumber}
        onPhoneNumberChange={handlePhoneNumberChange}
      />
    </section>
  )
}

export default Info