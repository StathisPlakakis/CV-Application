import { useEffect, useRef } from "react";
import '../styles/aboutDialog.css';

function AboutDialog({
  isDialogOpen, onClose, 
  onSavedActive, onSavedDisactive,
  about, onAboutChange
}) {

  const dialogRef = useRef(null);

  const onSave = (event) => {
    event.preventDefault();
    onAboutChange(document.getElementById('about').value)
    onSavedActive();
    setTimeout(() => onSavedDisactive(), 1500);
  }

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
        <button onClick={onClose}></button>
      </div>
      <form className="aboutForm">
        <div className="aboutItems">
          <div className="aboutItem" tabIndex={0}>
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              name="about"
              type="text"
              defaultValue={about}
              autoComplete="off"
            ></textarea>
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

export default AboutDialog;