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
        <button onClick={onClose}></button>
      </div>
      <div className='profDialImage'>
        <div className='profImg'></div>
      </div>
      <div className='profDialActions'>
        <div className='addImage'>
          <button>Add photo</button>
        </div>
        <div className='deleteImage'>
        <button>Delete</button>          
        </div>
      </div>
    </dialog>
  );
}

export default ProfileDialog
