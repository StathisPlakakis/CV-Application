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
      <h2>Dialog Title</h2>
      <p>This is the content of the dialog.</p>
      <button onClick={onClose}>Close</button>
    </dialog>
  );
}

export default ProfileDialog
