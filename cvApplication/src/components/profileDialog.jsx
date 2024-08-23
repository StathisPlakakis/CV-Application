import '../styles/profileDialog.css'
import  { useRef, useEffect } from 'react';

function ProfileDialog({isOpen, onClose}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef}>
      <div className='profDialHead'>
        <h2>Profile photo</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div className='profDialImage'>
        <div className='profImg'></div>
      </div>
      <div className='profDialActions'>
        <div className='add'>
          <h3>Add photo</h3>
          <div className='addIcon'></div>
        </div>
        <div className='add'>
          <h3>Delete</h3>
          <div className='deleteIcon'></div>
        </div>
      </div>
    </dialog>
  );
}

export default ProfileDialog
