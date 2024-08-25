import { useRef, useEffect } from "react"
import '../styles/generalInfoDialog.css'

function InfoDialog({ isOpen, onClose }) {

  const dialogRef = useRef(null)

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
              type="text"
              id="firstName"
              name="first-name"
              required
            />
          </div>

          <div className="infoItem" tabIndex={0}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="last-name"
              required
            />
          </div>

          <div className="infoItem" tabIndex={0}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>

          <div className="infoItem" tabIndex={0}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phone-number"
            />
          </div>

        </div>
      </form>
    </dialog>
  )
}

export default InfoDialog