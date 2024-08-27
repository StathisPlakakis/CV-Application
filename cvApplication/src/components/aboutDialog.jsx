import { useEffect, useRef } from "react";
import '../styles/aboutDialog.css';

function AboutDialog({isDialogOpen}) {

  const dialogRef = useRef(null);

  useEffect(() => {
    if (isDialogOpen) {
      dialogRef.current.showModal();
    }else {
      dialogRef.current.close();
    }
  })

  return (
    <dialog ref={dialogRef}>
      <div className='aboutDialHead'>
        <h2>Edit about</h2>
        <button></button>
      </div>
      <form className="aboutForm">
        <div className="aboutItems">
          <div className="aboutItem" tabIndex={0}>
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              name="about"
              type="text"

            ></textarea>
            {/* <input
              defaultValue={firstName}
              autoComplete="off"
              type="text"
              id="firstName"
              name="first-name"
              required
            /> */}
          </div>
        </div>
        <div className="save">
          <button 
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </dialog>
  )
}

export default AboutDialog;