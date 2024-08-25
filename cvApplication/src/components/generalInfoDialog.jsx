import { useRef, useEffect } from "react"
import '../styles/generalInfoDialog.css'

function InfoDialog({ 
  isOpen, onClose, 
  firstName, onFirstNameChange,
  lastName, onLastNameChange,
  email, onEmailChange,
  phoneNumber, onPhoneNumberChange 
}) {

  const dialogRef = useRef(null)


  const onSave = (event) => {
    if (
      document.getElementById('firstName').value !== '' && 
      document.getElementById('lastName').value
    ) {
      event.preventDefault();
      onFirstNameChange(document.getElementById('firstName').value);
      onLastNameChange(document.getElementById('lastName').value);
      onEmailChange(document.getElementById('email').value);
      onPhoneNumberChange(document.getElementById('phoneNumber').value);
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
      <div className='infoDialHead'>
        <h2>Edit info</h2>
        <button onClick={onClose}></button>
      </div>
      <form className="infoForm">
        <div className="infoItems">

          <div className="infoItem" tabIndex={0}>
            <label htmlFor="firstName">First Name</label>
            <input
              defaultValue={firstName}
              autoComplete="off"
              type="text"
              id="firstName"
              name="first-name"
              required
            />
          </div>

          <div className="infoItem" tabIndex={0}>
            <label htmlFor="lastName">Last Name</label>
            <input
              defaultValue={lastName}
              autoComplete="off"
              type="text"
              id="lastName"
              name="last-name"
              required
            />
          </div>

          <div className="infoItem" tabIndex={0}>
            <label htmlFor="email">Email</label>
            <input
              defaultValue={email}
              autoComplete="off"
              type="email"
              id="email"
              name="email"
            />
          </div>

          <div className="infoItem" tabIndex={0}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              defaultValue={phoneNumber}
              autoComplete="off"
              type="tel"
              id="phoneNumber"
              name="phone-number"
            />
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

export default InfoDialog